import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trimurtiinterio.com"),
  title: {
    default: "Trimurti Interio | Building Material Supplier in Baramati",
    template: "%s | Trimurti Interio",
  },
  description:
    "Premium experience center for CP fittings, sanitaryware, construction chemicals, kitchen sinks & quartz sinks in Baramati. Visit Trimurti Interio at Jalochi, Baramati.",
  applicationName: "Trimurti Interio",
  keywords: [
    "Trimurti Interio",
    "CP fittings Baramati",
    "sanitaryware Baramati",
    "construction chemicals Baramati",
    "kitchen sink Baramati",
    "quartz sink Baramati",
    "building material supplier Baramati",
    "Jaquar Baramati",
    "Hindware Baramati",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Trimurti Interio",
    description:
      "The Perfect Experience Center | Build Your Perfect Heaven. CP fittings, sanitaryware, construction chemicals, kitchen sinks & quartz sinks.",
    url: "/",
    siteName: "Trimurti Interio",
    locale: "en_IN",
    images: [{ url: "/trimurti-logo.png", width: 512, height: 512, alt: "Trimurti Interio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trimurti Interio",
    description:
      "Premium experience center for CP fittings, sanitaryware, construction chemicals, kitchen sinks & quartz sinks in Baramati.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/trimurti-logo.png",
    apple: "/trimurti-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
