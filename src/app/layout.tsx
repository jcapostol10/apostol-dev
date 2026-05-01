import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
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
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
