import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mirahha — Hong Kong Advertising Agency',
  description: 'Bagusaz Limited. Performance advertising & brand amplification from the heart of Hong Kong.',
  metadataBase: new URL('https://mirahha.com'),
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.svg',          type: 'image/svg+xml' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },
  openGraph: {
    title: 'Mirahha — Hong Kong Advertising Agency',
    description: 'Performance advertising & brand amplification from the heart of Hong Kong.',
    siteName: 'Mirahha',
    locale: 'en_HK',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
