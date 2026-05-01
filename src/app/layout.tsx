import type { Metadata, Viewport } from "next";
import { Inter, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Inter({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
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
  themeColor: "#0a0806",
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
