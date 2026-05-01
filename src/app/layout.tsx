import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const display = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apostol.dev — Websites & Mobile Apps for Philippine Businesses",
  description:
    "Fullstack development for Philippine businesses. SEO-optimized, high-performance websites and mobile apps. See your site live before you pay. ₱1,500/mo.",
  metadataBase: new URL("https://apostol.dev"),
  openGraph: {
    title: "Apostol.dev — Websites & Mobile Apps for Philippine Businesses",
    description:
      "Fullstack development for Philippine businesses. See your site live before you pay.",
    url: "https://apostol.dev",
    siteName: "Apostol.dev",
    locale: "en_PH",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f1e8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full`}
    >
      <body className="paper-grain min-h-full flex flex-col">{children}</body>
    </html>
  );
}
