import type { Metadata } from "next";
import { Playfair_Display, Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lumore - Premium Skincare for Radiant Skin",
  description: "Scientifically formulated, dermatologist-tested skincare products. Shop our collection of cleansers, serums, moisturizers, and sun protection.",
  keywords: "skincare, premium skincare, natural skincare, skincare products, beauty, cosmetics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: 'light', overscrollBehavior: 'none' }}>
      <body
        className={`${playfair.variable} ${inter.variable} ${dancingScript.variable} antialiased`}
        style={{ overscrollBehavior: 'none', fontFamily: 'var(--font-inter)' }}
      >
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
