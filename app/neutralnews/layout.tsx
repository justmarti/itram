import { Metadata } from "next"
import { SITE_CONFIG } from '@/constants/config';
import { JetBrains_Mono } from 'next/font/google';
import "../globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: SITE_CONFIG.metadataBase,
  title: "Neutral News",
  description: "Lee noticias neutrales basadas en múltiples fuentes",
  openGraph: {
    title: "Neutral News",
    description: "Lee noticias neutrales basadas en múltiples fuentes",
    images: [
      {
        url: "/neutral-news-logo.png",
        width: 400,
        height: 400,
        alt: "Neutral News",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Neutral News",
    description: "Lee noticias neutrales basadas en múltiples fuentes",
    images: ["/neutral-news-logo.png"],
  },
}

export default function NeutralNewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        {children}
      </body>
    </html>
  )
}