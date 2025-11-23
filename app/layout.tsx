import type { Metadata } from "next";
import { Geist, Geist_Mono, Dosis } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dosis = Dosis({
  variable: "--font-dosis",
  subsets: ["latin"],
  weight: ["400", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cie-datura.fr"),
  title: {
    default: "Compagnie Datura - Lakmé",
    template: "%s | Compagnie Datura",
  },
  description:
    "La Compagnie Datura présente Lakmé, un opéra accessible et moderne. Découvrez notre production.",
  keywords: [
    "Compagnie Datura",
    "Lakmé",
    "opéra",
    "Albi",
    "théâtre",
    "musique classique",
    "opéra-comique",
    "spectacle lyrique",
    "Théâtre municipal Albi",
    "production lyrique",
    "Timothée Hudrisier",
    "Mathilde Bellin",
    "Guillemette Daboval",
    "Bastien Rimondi,"
  ],
  authors: [{ name: "Compagnie Datura" }],
  creator: "Compagnie Datura",
  publisher: "Compagnie Datura",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Compagnie Datura - Lakmé",
    description:
      "La Compagnie Datura présente Lakmé, un opéra accessible et moderne.",
    url: "https://www.cie-datura.fr",
    siteName: "Compagnie Datura",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/hero-poster.webp",
        width: 1280,
        height: 720,
        alt: "Compagnie Datura - Lakmé, opéra au Théâtre d'Albi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compagnie Datura - Lakmé",
    description:
      "La Compagnie Datura présente Lakmé, un opéra accessible et moderne.",
    images: ["/hero-poster.webp"],
    creator: "@CompagnieDatura", // Ajouter handle Twitter si vous en avez un
  },
  alternates: {
    canonical: "https://www.cie-datura.fr",
  },
  verification: {
    // Ajouter codes de vérification Google Search Console, etc.
    // google: 'code-google',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dosis.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
