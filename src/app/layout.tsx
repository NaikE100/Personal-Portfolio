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
  metadataBase: new URL("https://unfilteredventures.com"),
  title: {
    default: "Unfiltered Ventures · Web Development Studio",
    template: "%s · Unfiltered Ventures",
  },
  description:
    "A portfolio of modern websites, SaaS dashboards, and e-commerce experiences built by Tiaan Saayman for ambitious brands.",
  keywords: [
    "web developer portfolio",
    "Next.js consultant",
    "South Africa web development",
    "ecommerce developer",
    "frontend engineer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Unfiltered Ventures · Web Development Studio",
    description:
      "High-converting marketing sites, SaaS dashboards, and commerce experiences delivered with transparent communication.",
    url: "https://unfilteredventures.com",
    siteName: "Unfiltered Ventures",
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "/logo_concept_29.png",
        width: 512,
        height: 512,
        alt: "Unfiltered Ventures monogram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unfiltered Ventures · Web Development Studio",
    description:
      "Partner with Tiaan Saayman to ship modern web experiences with Next.js, TypeScript, and Tailwind.",
    creator: "@unfiltered_web",
    images: ["/logo_concept_29.png"],
  },
};

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative mx-auto min-h-screen bg-transparent text-slate-100`}
      >
        <Navbar />
        <div className="pb-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Unfiltered Ventures portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unfiltered Ventures · Web Development Studio",
    description:
      "Partner with Tiaan Saayman to ship modern web experiences with Next.js, TypeScript, and Tailwind.",
    creator: "@unfiltered_web",
    images: ["/og-image.svg"],
  },
};

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative mx-auto min-h-screen bg-transparent text-slate-100`}
      >
        <Navbar />
        <div className="pb-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
