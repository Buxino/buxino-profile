import type { Metadata } from "next";
import { Inter, Asap } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const asap = Asap({
  subsets: ["latin"],
  variable: "--font-asap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Buxino | The Art of the Ascent",
  description: "Buxino Consulting & Wines - Strategic vision and meticulous craftsmanship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${asap.variable} font-asap antialiased bg-black text-white min-h-screen flex flex-col`}>
        <Navbar />
        {/* 'flex-grow' forces the main content to take up all available space */}
        <main className="relative z-0 flex-grow pt-24 md:pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}