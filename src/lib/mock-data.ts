export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string; // e.g. "Full-time", "Part-time"
  workload: string; // e.g. "80-100%"
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  datePosted: string;
  isUrgent?: boolean;
  isNew?: boolean;
}

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Spengler EFZ (m/w/d)",
    company: "DachTech AG",
    location: "Zürich, ZH",
    type: "Full-time",
    workload: "100%",
    description: "Wir suchen einen engagierten Spengler für spannende Neubau- und Sanierungsprojekte im Raum Zürich.",
    responsibilities: [
      "Anfertigung und Montage von Dachrinnen und Blechabdeckungen",
      "Erstellen von Kamineinfassungen und Blechanschlüssen",
      "Verarbeitung von Kupfer-, Zink- und Aluminiumblechen",
      "Dokumentation der ausgeführten Arbeiten"
    ],
    requirements: [
      "Abgeschlossene Lehre als Spengler EFZ",
      "Einige Jahre Berufserfahrung von Vorteil",
      "Gute Deutschkenntnisse",
      "Führerausweis Kategorie B"
    ],
    benefits: [
      "Überdurchschnittliches Gehalt",
      "Modernes Firmenfahrzeug",
      "5 Wochen Ferien",
      "Weiterbildungsmöglichkeiten"
    ],
    datePosted: "2026-02-24",
    isNew: true,
  },
  {
    id: "2",
    title: "Bauspengler",
    company: "Blech & Dach GmbH",
    location: "Bern, BE",
    type: "Full-time",
    workload: "80-100%",
    description: "Unterstützen Sie unser Team bei der Umsetzung von Blecharbeiten an Dächern und Fassaden.",
    responsibilities: [
      "Montage von Dachrinnen und Fallrohren",
      "Erstellen von Blechabdeckungen und Verkleidungen",
      "Abdichtungsarbeiten an Flachdächern",
      "Allgemeine Spenglerarbeiten auf der Baustelle"
    ],
    requirements: [
      "Abgeschlossene Ausbildung als Spengler EFZ oder gleichwertig",
      "Handwerkliches Geschick und Zuverlässigkeit",
      "Teamfähigkeit und genaue Arbeitsweise"
    ],
    benefits: [
      "Junges und dynamisches Team",
      "Flache Hierarchien",
      "Gute Sozialleistungen"
    ],
    datePosted: "2026-02-20",
  },
  {
    id: "3",
    title: "Projektleiter Gebäudehülle (w/m)",
    company: "Hülle & Dach Systems AG",
    location: "Basel, BS",
    type: "Full-time",
    workload: "100%",
    description: "Leiten Sie innovative Gebäudehüllen-Projekte von der Planung bis zur Übergabe.",
    responsibilities: [
      "Projektleitung von A bis Z inklusive Kostenkontrolle",
      "Kundenberatung und Offertenerstellung",
      "Führung der Montageequipen",
      "Qualitätssicherung und Abnahme"
    ],
    requirements: [
      "Weiterbildung zum Spenglermeister oder Projektleiter Gebäudehülle",
      "Führungserfahrung in einer ähnlichen Position",
      "Kenntnisse in verschiedenen Dach- und Fassadensystemen",
      "Verhandlungsgeschick und souveränes Auftreten"
    ],
    benefits: [
      "Attraktives Bonusmodell",
      "Geschäftsauto auch zur privaten Nutzung",
      "Flexible Arbeitszeiten"
    ],
    datePosted: "2026-02-23",
    isUrgent: true,
  },
  {
    id: "4",
    title: "Flachdachspengler / Abdichter",
    company: "Polybau Solutions GmbH",
    location: "Luzern, LU",
    type: "Full-time",
    workload: "100%",
    description: "Sie führen Abdichtungsarbeiten an Flachdächern und Terrassen aus und montieren Entwässerungssysteme.",
    responsibilities: [
      "Verlegen von Abdichtungsbahnen auf Flachdächern",
      "Montage von Dachrandabschlüssen und Entwässerungen",
      "Erstellen von Dampfsperren und Wärmedämmungen",
      "Qualitätsprüfung und Dokumentation"
    ],
    requirements: [
      "Berufsabschluss als Spengler EFZ oder Abdichter EFZ",
      "Erfahrung mit verschiedenen Abdichtungssystemen",
      "Selbständige und präzise Arbeitsweise"
    ],
    benefits: [
      "Moderne Werkstatt und Werkzeuge",
      "Geregelte Arbeitszeiten",
      "Gute Anbindung an den ÖV"
    ],
    datePosted: "2026-02-18",
  },
  {
    id: "5",
    title: "Fassadenspengler",
    company: "MetallFassade AG",
    location: "St. Gallen, SG",
    type: "Part-time",
    workload: "60-80%",
    description: "Als Fassadenspengler gestalten und montieren Sie Metallverkleidungen an modernen Gebäudefassaden.",
    responsibilities: [
      "Montage von Fassadenverkleidungen aus Metall",
      "Verarbeitung von Verbundplatten und Metallkassetten",
      "Erstellen von Blechanschlüssen und Abdeckungen",
      "Zusammenarbeit mit Architekten und Bauleitung"
    ],
    requirements: [
      "Ausbildung als Spengler EFZ",
      "Erfahrung im Fassadenbau von Vorteil",
      "Schwindelfreiheit und körperliche Fitness",
      "Gültiger Fahrausweis"
    ],
    benefits: [
      "Hohe Selbständigkeit",
      "Abwechslungsreiche Projekte",
      "Leistungsgerechte Entlöhnung"
    ],
    datePosted: "2026-02-25",
    isNew: true,
  }
];
