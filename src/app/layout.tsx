import type { Metadata } from "next";
import { Inter, Asap } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SuppressHydration from "@/components/SuppressHydration";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const asap = Asap({
  subsets: ["latin"],
  variable: "--font-asap",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Buxino Consulting",
  description: "The Art of the Ascent",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${asap.variable} scroll-smooth`}>
      <body
        className={`
          font-inter antialiased 
          bg-gray-50 text-gray-900 
          min-h-screen
          selection:bg-[#c5a059]/20 selection:text-[#001f3f]
        `}
      >
        {/* Suppress hydration warnings only around Navbar */}
        <SuppressHydration>
          <Navbar />
        </SuppressHydration>

        {/* Main content – pages can override bg if needed */}
        <main className="relative z-0 min-h-screen scroll-pt-20 md:scroll-pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}