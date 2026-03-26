import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from './providers';
import { Navbar } from '@/components/layout/Navbar';
import { Sidebar } from '@/components/layout/Sidebar';
import { Footer } from '@/components/layout/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Klarity | Shatter the Cycle",
  description: "A premium, privacy-first companion for overcoming addiction and reclaiming your potential.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-space-black text-white selection:bg-neon-emerald/30 selection:text-neon-emerald`}
      >
        <Providers>
          <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.05),transparent_100%)] pointer-events-none" />
          <Sidebar />
          <div className="min-h-screen lg:pl-24">
            <main>
              {children}
            </main>
            <Footer />
          </div>
          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Navbar />
          </div>
        </Providers>
      </body>
    </html>
  );
}
