import { NextRequest, NextResponse } from 'next/server';
import { SECURITY_CONFIG } from '@/constants/config';

// Implementación básica de rate limiting
const ipRequestCounts = new Map<string, { count: number; timestamp: number }>();

export function rateLimitMiddleware(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();
  const windowMs = SECURITY_CONFIG.rateLimit.windowMs;
  const max = SECURITY_CONFIG.rateLimit.max;

  const requestData = ipRequestCounts.get(ip) || { count: 0, timestamp: now };

  // Limpiar solicitudes antiguas
  if (now - requestData.timestamp > windowMs) {
    requestData.count = 0;
    requestData.timestamp = now;
  }

  // Incrementar contador
  requestData.count++;
  ipRequestCounts.set(ip, requestData);

  // Verificar límite
  if (requestData.count > max) {
    return new NextResponse('Too Many Requests', { status: 429 });
  }

  return null;
}

// Headers de seguridad
export function securityHeaders() {
  return {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';",
  };
} 