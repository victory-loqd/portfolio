import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Victory Chukwuma — Lead Product Designer',
  description:
    'Product Designer who brings structure to complex and early-stage products. Lead Product Designer at Skydd, building LOQD, former co-founder at Juju Games.',
  openGraph: {
    title: 'Victory Chukwuma — Lead Product Designer',
    description:
      'Bringing structure to complex and early-stage products. Shipped systems across insurtech, physical custody, fintech, and game development.',
    url: 'https://designwithvee.com',
    siteName: 'Victory Chukwuma Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-background text-zinc-100 min-h-screen flex flex-col selection:bg-zinc-800 selection:text-white">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
