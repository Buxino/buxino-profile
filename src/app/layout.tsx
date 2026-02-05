import type { Metadata } from "next";
import { Inter, Asap } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const asap = Asap({
  subsets: ["latin"],
  variable: "--font-asap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Buxino Consulting",
  description: "The Art of the Ascent",
  icons: {
    icon: "/icon.png", // This points to public/icon.png or app/icon.png
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${asap.variable} font-asap antialiased bg-black text-white relative`}>
        {/* Navbar must have the highest z-index */}
        <Navbar />
        
        {/* main container handles the spacing for all pages */}
        <main className="relative z-0 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}