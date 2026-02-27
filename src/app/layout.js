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

export const metadata = {
  title: {
    default: "Sagar | Brand Identity & Design Studio",
    template: "%s | Sagar Design",
  },
  description:
    "Elevate your brand with custom identity and package design. Showcase your story through bold visuals and strategic design solutions that captivate and convert.",
  keywords: [
    "brand identity",
    "branding",
    "logo design",
    "packaging design",
    "mockup design",
    "visual identity",
    "brand design studio",
    "product design",
    "UX strategy",
  ],
  authors: [{ name: "Sagar" }],
  creator: "Sagar",
  metadataBase: new URL("https://sagar.design"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sagar.design",
    title: "Sagar | Brand Identity & Design Studio",
    description:
      "Elevate your brand with custom identity and package design. Bold visuals. Strategic solutions.",
    siteName: "Sagar Design",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sagar | Brand Identity & Design Studio",
    description:
      "Elevate your brand with custom identity and package design. Bold visuals. Strategic solutions.",
    creator: "@sagar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
