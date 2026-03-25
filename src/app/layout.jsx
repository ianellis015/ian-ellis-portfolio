import { Space_Grotesk, Inter } from 'next/font/google';
import '@/styles/globals.css';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/ui/Footer';
import SmoothScroll from '@/components/ui/SmoothScroll';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: 'Ian Ellis — Full-Stack Engineer & AI Specialist',
  description:
    'Full-stack software engineer specializing in AI integrations. I build and ship intelligent products with React, Next.js, Node.js, and modern AI APIs.',
  openGraph: {
    title: 'Ian Ellis — Full-Stack Engineer & AI Specialist',
    description:
      'Full-stack software engineer specializing in AI integrations.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <SmoothScroll>
          <Nav />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
