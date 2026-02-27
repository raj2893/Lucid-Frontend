import type { Metadata } from 'next';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lucidpharmatech.com'),
  title: {
    default: 'Lucid Pharmatech LLP | Quality Pharma at Affordable Prices',
    template: '%s | Lucid Pharmatech LLP',
  },
  description:
    'Lucid Pharmatech LLP — delivering quality pharmaceutical products at affordable prices to the ailing humanity.',
  keywords: [
    'Lucid Pharmatech',
    'pharmaceutical company India',
    'affordable medicines',
    'quality pharma',
    'generic medicines',
    'healthcare India',
    'pharmaceutical manufacturing',
  ],
  authors: [{ name: 'Lucid Pharmatech LLP' }],
  creator: 'Lucid Pharmatech LLP',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.lucidpharmatech.com',
    siteName: 'Lucid Pharmatech LLP',
    title: 'Lucid Pharmatech LLP | Quality Pharma at Affordable Prices',
    description:
      'Delivering quality pharmaceutical products at affordable prices to the ailing humanity.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Lucid Pharmatech LLP' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucid Pharmatech LLP | Quality Pharma at Affordable Prices',
    description:
      'Quality pharmaceutical products at affordable prices for the ailing humanity.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: 'https://www.lucidpharmatech.com' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#003366" />
      </head>
      <body>
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}