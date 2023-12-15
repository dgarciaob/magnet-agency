import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Magnet',
  description: 'Agencia de Diseño y Desarrollo Web.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fullImageUrl = `https://magnetperu.com/images/preview.png`;
  return (
    <html lang="en" className="h-full">
      <Head>
        <title>Magnet</title>
        <meta
          name="description"
          content="Agencia de Diseño y Desarrollo Web."
        />

        <meta property="og:url" content="https://magnetperu.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Magnet" />
        <meta
          property="og:description"
          content="Agencia de Diseño y Desarrollo Web."
        />
        <meta
          property="og:image"
          content="https://magnetperu.com/images/preview.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="magnetperu.com" />
        <meta property="twitter:url" content="https://magnetperu.com" />
        <meta name="twitter:title" content="Magnet" />
        <meta
          name="twitter:description"
          content="Agencia de Diseño y Desarrollo Web."
        />
        <meta
          name="twitter:image"
          content="https://magnetperu.com/images/preview.png"
        />
      </Head>
      <body
        className={cn('relative antialiased bg-[#F6F5FF] overflow-x-hidden')}
      >
        <main className="relative flex flex-col w-full min-h-screen">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
