import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Spengler Ausbildung Schweiz | EFZ & EBA",
  description:
    "Offizielle Grundlagen zur Ausbildung Spengler EFZ und Spenglerpraktiker/in EBA in der Schweiz.",
  alternates: { canonical: "/spengler-ausbildung" },
  openGraph: {
    title: "Spengler Ausbildung Schweiz | EFZ & EBA",
    description:
      "Offizielle Grundlagen zur Ausbildung Spengler EFZ und Spenglerpraktiker/in EBA in der Schweiz.",
    url: "/spengler-ausbildung",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spengler Ausbildung Schweiz | EFZ & EBA",
    description:
      "Offizielle Grundlagen zur Ausbildung Spengler EFZ und Spenglerpraktiker/in EBA in der Schweiz.",
  },
};

export const revalidate = 86400;

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://spenglerjob.ch";
const REVIEW_DATE = "20. August 2026";

const FAQS = [
  {
    question: "Wie lange dauert die Lehre Spengler EFZ?",
    answer:
      "Das offizielle Berufsprofil von berufsberatung.ch nennt eine Dauer von vier Jahren. Der Abschluss ist das eidgenössische Fähigkeitszeugnis EFZ.",
  },
  {
    question: "Welche schulische Voraussetzung gilt?",
    answer:
      "berufsberatung.ch nennt als Zulassung die abgeschlossene obligatorische Schule. Lehrbetriebe können im Auswahlverfahren zusätzliche Anforderungen stellen; diese sind nicht schweizweit einheitlich zugesichert.",
  },
  {
    question: "Wie ist die Ausbildung organisiert?",
    answer:
      "Laut Berufsprofil findet die praktische Ausbildung in einem Spenglerbetrieb oder einem gemischten Betrieb statt. Genannt werden vier Tage pro Woche im Betrieb, ein Tag pro Woche an der Berufsfachschule sowie überbetriebliche Kurse. Die konkrete Organisation kann kantonal und betrieblich ausgestaltet sein.",
  },
  {
    question: "Gibt es eine EBA-Ausbildung im Spenglerbereich?",
    answer:
      "Ja. Das offizielle Profil Spenglerpraktiker/in EBA nennt eine zweijährige Grundbildung. Nach dem EBA ist in der Regel eine verkürzte Lehre als Spengler EFZ möglich; die konkrete Anrechnung ist mit der zuständigen Stelle zu klären.",
  },
  {
    question: "Welche Weiterbildungen nennt das offizielle Berufsprofil?",
    answer:
      "berufsberatung.ch nennt Kurse von suissetec, die Berufsprüfung Spenglerpolier/in BP, die höhere Fachprüfung Spenglermeister/in HFP sowie weitere Bildungsgänge. Für jeden Weg gelten eigene Zulassungsbedingungen.",
  },
  {
    question: "Wo finde ich Lehrstellen?",
    answer:
      "Die offizielle Lehrstellensuche von berufsberatung.ch listet Lehrstellen nach Beruf und Region. Zusätzlich können Lehrbetriebe eigene Ausschreibungen publizieren. spenglerjob.ch verspricht keine vollständige Lehrstellenabdeckung.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Spengler Ausbildung",
      item: `${SITE_URL}/spengler-ausbildung`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function AusbildungPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <main id="main-content" className="bg-background">
        <section className="trade-hero">
          <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-4xl">
            <nav className="text-sm text-slate-500 mb-3" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-primary">Startseite</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-700">Spengler Ausbildung</span>
            </nav>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight mb-4">
              Ausbildung <span className="text-primary">Spengler EFZ</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
              Dauer, Organisation und Anschlusswege auf Basis offizieller
              Schweizer Berufsbildungsquellen.
            </p>
            <p className="mt-4 text-sm text-slate-500">Quellen geprüft am {REVIEW_DATE}.</p>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 py-10 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Die EFZ-Grundbildung</h2>
          <p className="text-slate-600 mb-3 leading-relaxed">
            Die berufliche Grundbildung Spengler EFZ dauert vier
            Jahre. berufsberatung.ch nennt als Zulassung die abgeschlossene
            obligatorische Schule und als Abschluss das eidgenössische
            Fähigkeitszeugnis EFZ.
          </p>
          <p className="text-slate-600 mb-3 leading-relaxed">
            Das Berufsprofil beschreibt die Ausbildung an drei Lernorten: im
            Lehrbetrieb, an der Berufsfachschule und in überbetrieblichen Kursen.
            Als Richtaufteilung werden vier Tage pro Woche im Betrieb und ein Tag
            pro Woche an der Schule genannt.
          </p>
          <a
            href="https://www.berufsberatung.ch/de/berufe/spengler-in-efz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Quelle: berufsberatung.ch – Spengler EFZ
          </a>
        </section>

        <section className="editorial-surface border-y">
          <div className="container mx-auto px-4 sm:px-6 py-10 max-w-4xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">EBA und Anschluss an das EFZ</h2>
            <p className="text-slate-600 mb-3 leading-relaxed">
              Die Grundbildung Spenglerpraktiker/in EBA dauert zwei Jahre. Nach
              dem Abschluss ist laut offiziellem Berufsprofil in der Regel eine
              verkürzte Lehre als Spengler EFZ möglich. Ob und wie
              eine Verkürzung im Einzelfall erfolgt, klären Lernende mit der
              zuständigen Berufsbildungsstelle.
            </p>
            <a
              href="https://www.berufsberatung.ch/de/berufe/spenglerpraktiker-in-eba"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              Quelle: berufsberatung.ch – Spenglerpraktiker/in EBA
            </a>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 py-10 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Weiterbildung nach dem EFZ</h2>
          <ul className="space-y-3 text-slate-700 mb-5">
            <li className="trade-panel p-4">
              <strong className="text-slate-900">Kurse</strong> — Angebote des Branchenverbands suissetec; Inhalt und Zulassung unterscheiden sich je nach Kurs.
            </li>
            <li className="trade-panel p-4">
              <strong className="text-slate-900">Berufsprüfung</strong> — Spenglerpolier/in BP gemäss offiziellem Berufsprofil.
            </li>
            <li className="trade-panel p-4">
              <strong className="text-slate-900">Höhere Fachprüfung</strong> — Spenglermeister/in HFP gemäss offiziellem Berufsprofil.
            </li>
          </ul>
          <a
            href="https://suissetec.ch/de/spengler-in-efz.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Berufsbild und Ausbildungsgrundlagen von suissetec
          </a>
        </section>

        <section className="editorial-surface border-y">
          <div className="container mx-auto px-4 sm:px-6 py-10 max-w-4xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Lehrlingslohn</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Das am Prüfdatum aktuelle Berufsprofil nennt monatliche
              Empfehlungen von CHF 850 im ersten, CHF 1’200 im zweiten, CHF
              1’400 im dritten und CHF 1’600 im vierten Lehrjahr. Das sind
              Empfehlungen und keine Zusicherung für jeden Lehrvertrag.
            </p>
            <Link href="/lohn-spengler-schweiz" className="text-primary underline">
              Lohnquellen und Methodik ansehen
            </Link>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 py-10 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">Häufig gestellte Fragen</h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details key={faq.question} className="faq-item group overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
                  {faq.question}
                  <span className="ml-2 shrink-0 text-slate-400 transition-transform group-open:rotate-180" aria-hidden>▾</span>
                </summary>
                <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-primary/5 border-t">
          <div className="container mx-auto px-4 sm:px-6 py-10 max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Nach dem Abschluss Stellen suchen</h2>
            <p className="text-slate-600 mb-5">
              Durchsuche den aktuell verfügbaren Inseratebestand nach
              Spenglerstellen.
            </p>
            <Button asChild>
              <Link href="/">Stellen durchsuchen</Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
