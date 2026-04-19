import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = "https://fomo-widget.netlify.app";

export const metadata: Metadata = {
  title: "Fomo-Widget | Social Proof & FOMO That Increase Website Stickiness",
  description:
    "Fomo-Widget: Add real-time social proof and FOMO notifications to your website. Increase stickiness, trust, and conversions with one simple integration.",
  keywords: [
    "social proof widget",
    "FOMO notifications",
    "website stickiness",
    "conversion optimization",
    "live notifications",
    "trust widget",
    "marketing widget",
  ],
  authors: [{ name: "Fomo-Widget" }],
  robots: { index: true, follow: true },
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Fomo-Widget | Social Proof & FOMO for Your Website",
    description:
      "Increase stickiness, trust, and conversions with real-time social proof and FOMO notifications. One widget, one integration.",
    url: siteUrl,
    siteName: "Fomo-Widget",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fomo-Widget | Social Proof & FOMO for Your Website",
    description:
      "Increase stickiness, trust, and conversions with real-time social proof and FOMO notifications.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  other: {
    "application-name": "Fomo-Widget",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Fomo-Widget",
  applicationCategory: "MarketingApplication",
  description:
    "Social proof and FOMO widget that integrates into your website to increase stickiness, trust, and conversions.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
