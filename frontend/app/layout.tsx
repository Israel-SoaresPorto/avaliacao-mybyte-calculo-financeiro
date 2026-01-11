import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calculadora Financeira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh`}
      >
        <header className="flex justify-center p-4 bg-violet-600 text-white">
          <div className="w-full max-w-7xl flex justify-between items-center gap-4">
            <span className="text-2xl">Calculadora Financeira</span>
            <Link href="/" className="text-lg underline">
              Home
            </Link>
          </div>
        </header>
        <main className="flex flex-col items-center justify-center min-h-[calc(100dvh-4rem)] px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
