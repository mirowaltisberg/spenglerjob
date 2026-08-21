import type { Metadata, Viewport } from "next";
import { JsonLd } from "@/components/json-ld";
import { HapticProvider } from "@/components/haptic-provider";
import { PrivacyAnalytics } from "@/components/privacy-analytics";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://spenglerjob.ch";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Spengler Jobs Schweiz | Stellen für Spengler-Fachkräfte",
    template: "%s | spenglerjob.ch",
  },
  description:
    "Finde Stellen für Spengler, Bauspenglerei, Flachdach, Gebäudehülle, AVOR, Service und Projektleitung in der Schweiz.",
  keywords: [
    "Spenglerjobs",
    "Spenglerjobs Schweiz",
    "Spengler Jobs",
    "Projektleiter Spenglerei",
    "Bauspengler",
    "AVOR Spenglerei Jobs",
    "Servicemonteur Spenglerei",
    "Stellen Spenglerbranche Schweiz",
    "Spengler Job Schweiz",
    "Spengler Stellen Schweiz",
    "Spengler Stellenangebote",
    "Bauspengler Jobs Schweiz",
    "Spengler Temporär",
    "Spengler Festanstellung",
    "Spengler Lohn Schweiz",
  ],
  openGraph: {
    title: "Spengler Jobs Schweiz | Stellenangebote",
    description:
      "Finde Stellenangebote für Spengler EFZ, Bauspenglerei, Flachdach, AVOR, Service und Projektleitung Spenglerei.",
    type: "website",
    url: "/",
    siteName: "spenglerjob.ch",
    locale: "de_CH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spengler Jobs Schweiz | Stellenangebote",
    description:
      "Finde Stellenangebote für Spengler EFZ, Bauspenglerei, Flachdach, AVOR, Service und Projektleitung Spenglerei.",
  },
  alternates: {
    canonical: "/",
    languages: {
      "de-CH": "/",
      "x-default": "/",
    },
  },
  verification: {
    google: "el7V2RsquLlGsWyjTfpIu0taGlVTafpyDuinuMxx_Tc",
  },
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "spenglerjob.ch",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  description:
    "spenglerjob.ch bündelt Stellenangebote mit klarem Bezug zum Spenglergewerk in der Schweiz.",
  areaServed: {
    "@type": "Country",
    name: "Switzerland",
    alternateName: "Schweiz",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "German",
    url: `${SITE_URL}/kontakt`,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "spenglerjob.ch",
  url: SITE_URL,
  description:
    "Die spezialisierte Jobbörse für Spengler-Fachkräfte in der Schweiz.",
  inLanguage: "de-CH",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH">
      <body lang="de-CH" className="antialiased font-sans">
        <a className="skip-link" href="#main-content">
          Zum Inhalt
        </a>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <HapticProvider>{children}</HapticProvider>
        <PrivacyAnalytics />
      </body>
    </html>
  );
}
