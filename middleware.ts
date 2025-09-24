import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { rateLimitMiddleware, securityHeaders } from './utils/security';
import { locales, defaultLocale } from '@/lib/i18n';

function getLocale(request: NextRequest): string {
  // Check URL pathname first
  const pathname = request.nextUrl.pathname;
  const pathnameLocale = locales.find(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (pathnameLocale) return pathnameLocale;
  
  // Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language') || '';
  
  // Priority order: ca > es > en
  if (acceptLanguage.includes('ca')) return 'ca';
  if (acceptLanguage.includes('es')) return 'es';
  
  return defaultLocale;
}

export async function middleware(request: NextRequest) {
  // Aplicar rate limiting
  const rateLimitResult = rateLimitMiddleware(request);
  if (rateLimitResult) return rateLimitResult;

  const pathname = request.nextUrl.pathname;
  
  // Skip API routes for i18n
  if (pathname.startsWith('/api')) {
    const response = NextResponse.next();
    Object.entries(securityHeaders()).forEach(([key, value]) => {
      response.headers.set(key, value);
    });
    return response;
  }

  // Skip static files
  if (pathname.startsWith('/_next') || pathname.includes('.')) {
    const response = NextResponse.next();
    Object.entries(securityHeaders()).forEach(([key, value]) => {
      response.headers.set(key, value);
    });
    return response;
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale && pathname === '/') {
    // Redirect to locale-specific path for homepage
    const locale = getLocale(request);
    if (locale !== defaultLocale) {
      return NextResponse.redirect(new URL(`/${locale}`, request.url));
    }
    // For default locale, rewrite to /en
    return NextResponse.rewrite(new URL('/en', request.url));
  }

  // Obtener la respuesta
  const response = NextResponse.next();

  // Aplicar headers de seguridad
  Object.entries(securityHeaders()).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
}; 