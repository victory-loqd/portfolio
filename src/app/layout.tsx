import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'Victory Chukwuma — Lead Product Designer',
  description:
    'Product Designer who brings structure to complex and early-stage products. Lead Product Designer at Skydd, building LOQD, former co-founder at Juju Games.',
  openGraph: {
    title: 'Victory Chukwuma — Lead Product Designer',
    description:
      'Bringing structure to complex and early-stage products. Shipped systems across insurtech, physical custody, fintech, and game development.',
    url: 'https://designwithvee.com',
    siteName: 'Victory Chukwuma',
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
      <body className="bg-[#050505] text-[#ededed] min-h-screen flex flex-col font-sans selection:bg-zinc-800 selection:text-white">
        <Sidebar />
        <div className="lg:pl-[300px] xl:pl-[320px] min-h-screen flex flex-col">
          <main className="flex-1 w-full max-w-4xl px-6 sm:px-12 md:px-14 py-10 md:py-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
