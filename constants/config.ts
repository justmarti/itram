export const SITE_CONFIG = {
  name: 'ITRAM',
  description: 'Portfolio by Martí Espinosa – iOS Developer',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://itram.dev',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://itram.dev'),
  defaultLocale: 'en',
  supportedLocales: ['en', 'es'],
} as const;

export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  timeout: 5000,
  retryAttempts: 3,
} as const;

export const SECURITY_CONFIG = {
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // límite de 100 peticiones por ventana
  },
  cors: {
    origin: process.env.NEXT_PUBLIC_ALLOWED_ORIGINS?.split(',') || ['https://itram.dev'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  },
} as const; 