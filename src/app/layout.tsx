import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";
import PasswordProtection from "@/components/PasswordProtection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: '#335495',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: '%s | PENTA Uniformes',
    default: 'PENTA Uniformes - Catálogos y Cotizaciones',
  },
  description: 'Catálogos de uniformes empresariales de las mejores marcas. Cotiza uniformes para tu empresa con más de 20 años de experiencia en el mercado.',
  keywords: 'uniformes empresariales, catálogos de uniformes, cotización de uniformes, uniformes corporativos, uniformes de trabajo',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://pentamx.com/',
    siteName: 'PENTA Uniformes',
    title: 'PENTA Uniformes - Catálogos y Cotizaciones',
    description: 'Catálogos de uniformes empresariales de las mejores marcas. Cotiza uniformes para tu empresa con más de 20 años de experiencia en el mercado.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PENTA Uniformes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PENTA Uniformes - Catálogos y Cotizaciones',
    description: 'Catálogos de uniformes empresariales de las mejores marcas. Cotiza uniformes para tu empresa con más de 20 años de experiencia en el mercado.',
    images: ['/og-image.jpg'],
    creator: '@penta',
    site: '@penta',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#335495',
      },
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'PENTA Uniformes',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/vke1rxw.css" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#335495" />
        <meta name="msapplication-TileColor" content="#335495" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <PasswordProtection>
            {children}
          </PasswordProtection>
        </Providers>
      </body>
    </html>
  );
}
