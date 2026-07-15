import type { Metadata } from 'next';
import { Work_Sans, Permanent_Marker } from 'next/font/google';
import './globals.css';

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-work-sans',
});

const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-marker',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://julio-portfolio-lake.vercel.app'),
  title: 'Julio León - AI Engineer & Product Builder - Interactive Resume',
  description:
    "Hi, I'm an AI Engineer & Product Builder creating agentic AI pipelines, production RAG systems and full-stack products. Founder of Auditix and ReWarm.",
  authors: [{ name: 'Julio León' }],
  keywords: [
    'Julio León',
    'AI Engineer',
    'Product Builder',
    'Interactive Resume',
    'AI agents',
    'RAG',
    'Full-stack',
    'Auditix',
    'ReWarm',
  ],
  openGraph: {
    url: 'https://julio-portfolio-lake.vercel.app/',
    type: 'website',
    title: 'Julio León - Interactive Resume',
    description:
      "Hi, I'm an AI Engineer & Product Builder creating agentic AI pipelines, production RAG systems and full-stack products.",
    images: ['/images/julio.jpeg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${workSans.variable} ${permanentMarker.variable}`}>
      <body>{children}</body>
    </html>
  );
}
