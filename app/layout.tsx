import type { Metadata } from "next";
import { Livvic, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Shared/Header";
import Footer from "@/components/Shared/Footer";

const livvic = Livvic({
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-livvic",
});

const jost = Jost({
  weight: ["200", "400", "500", "600", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: {
    default:
      "FC Plomberie - Chauffage - Sanitaire | Artisan Région Centre & Île-de-France",
    template: "%s | FC Plomberie - Chauffage - Sanitaire",
  },
  description:
    "Artisan plombier-chauffagiste en région Centre et Île-de-France. Intervention 24h/24, devis gratuit. +30 ans d'expérience.",
  metadataBase: new URL("https://artisanat-fcplomberie.fr"),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "FC Plomberie" }],
  creator: "inTheGleam",
  publisher: "FC Plomberie",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
      </head>
      <body className={`${livvic.variable} ${jost.variable} font-two`}>
        <div className="fixed top-0 left-0 w-full z-30">
          <Header />
        </div>
        <main className="min-h-screen bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
