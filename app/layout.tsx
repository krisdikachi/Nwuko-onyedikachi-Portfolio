import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from "@vercel/analytics/next"
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nwuko Onyedikachi - Senior Software Developer & Co-founder of Plancer',
  description: 'Nwuko Onyedikachi is a senior software developer and co-founder of Plancer, an innovative online event management web app. Expert in React, Node.js, AWS, and full-stack development. Based in Nigeria, serving clients worldwide.',
  keywords: [
    'Nwuko Onyedikachi',
    'AndroTechList',
    'Nigerian web developer',
    'best Nigerian web developer',
    'software developer Nigeria',
    'React developer',
    'Node.js developer',
    'full-stack developer',
    'Plancer co-founder',
    'event management web app',
    'AWS developer',
    'web development Nigeria',
    'senior software developer',
    'frontend developer',
    'backend developer',
    'mobile app developer',
    'UI/UX developer',
    'JavaScript developer',
    'TypeScript developer',
    'Next.js developer'
  ],
  authors: [{ name: 'Nwuko Onyedikachi' }],
  creator: 'Nwuko Onyedikachi',
  publisher: 'Nwuko Onyedikachi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nwuko-onyedikachi-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nwuko-onyedikachi-portfolio.vercel.app',
    title: 'Nwuko Onyedikachi - Senior Software Developer & Co-founder of Plancer',
    description: 'Nwuko Onyedikachi is a senior software developer and co-founder of Plancer, an innovative online event management web app. Expert in React, Node.js, AWS, and full-stack development.',
    siteName: 'Nwuko Onyedikachi Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nwuko Onyedikachi - Senior Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nwuko Onyedikachi - Senior Software Developer & Co-founder of Plancer',
    description: 'Nwuko Onyedikachi is a senior software developer and co-founder of Plancer, an innovative online event management web app.',
    images: ['/og-image.jpg'],
    creator: '@NwukoATL',
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
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Nwuko Onyedikachi",
              "alternateName": "AndroTechList",
              "jobTitle": "Senior Software Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Plancer"
              },
              "description": "Senior software developer and co-founder of Plancer, an innovative online event management web app",
              "url": "https://nwuko-onyedikachi-portfolio.vercel.app",
              "image": "https://nwuko-onyedikachi-portfolio.vercel.app/ATL.jpg",
              "sameAs": [
                "https://github.com/krisdikachi",
                "https://linkedin.com/in/nwuko-onyedikachi",
                "https://twitter.com/NwukoATL"
              ],
              "knowsAbout": [
                "React",
                "Node.js",
                "JavaScript",
                "TypeScript",
                "AWS",
                "Full-stack Development",
                "Web Development",
                "Event Management Software"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Nigeria"
              },
              "email": "andrewnwuko@gmail.com",
              "telephone": "+2348166382563"
            })
          }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Plancer",
              "description": "Innovative online event management web app",
              "url": "https://plancer.com",
              "founder": {
                "@type": "Person",
                "name": "Nwuko Onyedikachi"
              },
              "employee": {
                "@type": "Person",
                "name": "Nwuko Onyedikachi",
                "jobTitle": "Co-founder"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          <Analytics/>
        </ThemeProvider>
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </body>
    </html>
  );
}