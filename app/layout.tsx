import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['700', '900'],
  variable: '--font-display',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://serveforsmiles.nl'

const title = 'Serve for Smiles Padel · Music · Purpose'
const description =
  'A charity padel event in Zwijndrecht on 28 June 2025. Sport, music and community come together to support Stichting Jarige Job. Register now at Winkelhaak 11.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    'padel event Zwijndrecht',
    'Serve for Smiles',
    'charity padel',
    'Stichting Jarige Job',
    'Winkelhaak Zwijndrecht',
  ],
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Serve for Smiles',
    title,
    description,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Serve for Smiles Padel · Music · Purpose · 28 June Zwijndrecht',
      },
    ],
    locale: 'en_NL',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [{ url: '/logo.png', type: 'image/png' }],
    apple: '/logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
