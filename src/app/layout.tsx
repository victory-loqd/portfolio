import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'Victory Chukwuma — Lead Product Designer + Systems Architect',
  description:
    'Victory Chukwuma ("Vee") brings structure to complex and early-stage products across platform systems, physical-digital custody, wealthtech, and interactive entertainment.',
  openGraph: {
    title: 'Victory Chukwuma — Lead Product Designer + Systems Architect',
    description:
      'Victory Chukwuma ("Vee") brings structure to complex and early-stage products across platform systems, physical-digital custody, wealthtech, and interactive entertainment.',
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
      <body className="bg-[#000000] text-[#ededed] min-h-screen flex flex-col font-sans selection:bg-neutral-800 selection:text-white">
        <Sidebar />
        <div className="lg:pl-[280px] xl:pl-[300px] min-h-screen flex flex-col">
          <main className="flex-1 w-full max-w-[880px] px-6 sm:px-12 md:px-16 py-12 md:py-20">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
