import type React from "react"
import "./globals.css"
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SITE_CONFIG } from '@/constants/config';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.name.toUpperCase(),
    template: `%s | ${SITE_CONFIG.name.toUpperCase()}`,
  },
  description: SITE_CONFIG.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
    ],
  },
  keywords: [
    'itram',
    'marti espinosa',
    'martí espinosa',
    'marti espinosa portfolio',
    'martí espinosa portfolio',
    'marti',
    'martí',
    'espinosa',
    'portfolio',
    'portfolio ios',
    'ios developer',
    'swift developer',
    'swiftui',
    'ios apps',
    'mobile development',
    'ios portfolio',
    'app development',
    'ios engineer',
    'software engineer',
    'desarrollador ios',
    'desarrollador swift'
  ],
  authors: [{ name: 'Martí Espinosa' }],
  creator: 'Martí Espinosa',
  openGraph: {
    type: 'website',
    locale: 'en',
    alternateLocale: 'es',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    creator: '@pepeqint',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
