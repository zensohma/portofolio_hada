import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { RevealObserver } from "@/components/layout/RevealObserver";
import { profile } from "@/data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteName = profile.name;

export const metadata: Metadata = {
  metadataBase: new URL("https://portofolio-hada.vercel.app"),
  title: {
    default: `${siteName} | Portfolio`,
    template: `%s · ${siteName}`,
  },
  description: profile.intro,
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  keywords: [
    "Muhammad Asy Syuhada",
    "portfolio",
    "matematika",
    "machine learning",
    "data mining",
    "analisis data",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName,
    title: `${siteName} | Portfolio`,
    description: profile.intro,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Portfolio`,
    description: profile.intro,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
