import type React from "react"
import "../globals.css"
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { JetBrains_Mono } from 'next/font/google';
import { SITE_CONFIG } from '@/constants/config';
import { Locale, getTranslations, generateHreflang } from '@/lib/i18n';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale);
  const hreflangLinks = generateHreflang('');

  return {
    metadataBase: SITE_CONFIG.metadataBase,
    title: {
      default: t.title,
      template: `%s | Martí Espinosa - ITRAM`,
    },
    description: t.description,
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
        {
          rel: 'icon',
          type: 'image/svg+xml',
          url: '/favicon.svg',
        },
      ],
    },
    keywords: [
      'itram',
      'marti',
      'martí',
      'marti espinosa',
      'martí espinosa',
      'marti espinosa farran',
      'martí espinosa farran',
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
      'desarrollador swift',
      'desenvolupador ios',
      'pepeqint'
    ],
    authors: [{ name: 'Martí Espinosa' }],
    creator: 'Martí Espinosa',
    openGraph: {
      type: 'website',
      locale: locale,
      alternateLocale: ['en', 'es', 'ca'].filter(l => l !== locale),
      url: SITE_CONFIG.url,
      title: t.title,
      description: t.description,
      siteName: SITE_CONFIG.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      creator: '@pepeqint',
    },
    alternates: {
      languages: Object.fromEntries(
        hreflangLinks.map(link => [link.hreflang, `${SITE_CONFIG.url}${link.href}`])
      ),
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
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale);

  return (
    <html lang={locale}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="alternate" hrefLang="en" href={`${SITE_CONFIG.url}`} />
        <link rel="alternate" hrefLang="es" href={`${SITE_CONFIG.url}/es`} />
        <link rel="alternate" hrefLang="ca" href={`${SITE_CONFIG.url}/ca`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Martí Espinosa",
              "alternateName": [
                "Marti", 
                "Martí",
                "Marti Espinosa", 
                "Martí Espinosa Farran", 
                "Marti Espinosa Farran",
                "ITRAM"
              ],
              "jobTitle": t.jobTitle,
              "url": SITE_CONFIG.url,
              "sameAs": [
                "https://github.com/justmarti",
                "https://linkedin.com/in/martiespinosa",
                "https://x.com/pepeqint"
              ],
              "knowsAbout": ["iOS Development", "Swift", "SwiftUI", "Mobile Development"],
            })
          }}
        />
      </head>
      <body className={jetbrainsMono.variable}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}