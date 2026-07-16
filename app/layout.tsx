import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Barkword Adventures: Jabby's Nightmare",
  description: "A mobile-first word-based combat game.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-950 text-slate-100 flex items-center justify-center font-sans">
        <div className="w-full max-w-md mx-auto min-h-dvh overflow-y-auto shadow-2xl bg-slate-900 border-x border-slate-800/50 relative flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
