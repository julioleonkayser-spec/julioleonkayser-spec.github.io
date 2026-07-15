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
  title: 'Julio León - Backend AI Engineer - Interactive Resume',
  description:
    "Hi, I'm a Backend AI Engineer building agentic AI pipelines, production RAG systems and API integrations. Founder of Auditix and ReWarm.",
  authors: [{ name: 'Julio León' }],
  keywords: [
    'Julio León',
    'Backend AI Engineer',
    'Interactive Resume',
    'AI agents',
    'RAG',
    'Auditix',
    'ReWarm',
  ],
  openGraph: {
    url: 'https://julio-portfolio.vercel.app/',
    type: 'website',
    title: 'Julio León - Interactive Resume',
    description:
      "Hi, I'm a Backend AI Engineer building agentic AI pipelines, production RAG systems and API integrations.",
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
