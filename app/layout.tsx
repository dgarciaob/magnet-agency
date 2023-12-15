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
  const fullImageUrl = `https://magnetperu.com/logos/logomagnet.png`;
  return (
    <html lang="en" className="h-full">
      <Head>
        <meta property="og:image" content={fullImageUrl} />
        <meta
          property="og:title"
          content={String(metadata.title) || 'Magnet'}
        />
        <meta
          property="og:description"
          content={metadata.description || 'Agencia de Diseño y Desarrollo Web'}
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
