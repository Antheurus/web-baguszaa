import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Miranha — Hong Kong Advertising Agency',
  description: 'Bagusaz Limited. Performance advertising & brand amplification from the heart of Hong Kong.',
  metadataBase: new URL('https://miranha.com'),
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Miranha — Hong Kong Advertising Agency',
    description: 'Performance advertising & brand amplification from the heart of Hong Kong.',
    siteName: 'Miranha',
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
