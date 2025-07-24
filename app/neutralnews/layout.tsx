import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Neutral News",
  description: "Lee noticias neutrales basadas en múltiples fuentes",
  openGraph: {
    title: "Neutral News",
    description: "Lee noticias neutrales basadas en múltiples fuentes",
    images: [
      {
        url: "/neutral-news-logo.png",
        width: 1200,
        height: 630,
        alt: "Neutral News",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
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
  return children
}