// SEO-DECISION: Comprehensive landing page matrix covering 12 roles × 8 cantons = 96 combinations.
// Each page has unique title, description, intro text, and FAQs for content depth and
// geographic targeting without keyword cannibalization.

export interface LandingFaq {
  question: string;
  answer: string;
}

export interface LandingPageConfig {
  role: string;
  canton: string;
  title: string;
  description: string;
  intro: string;
  faqs: LandingFaq[];
}

// --- Role-specific content templates ---
// Used to generate unique content per role × canton combination.

interface RoleContent {
  /** Short role label for titles */
  label: string;
  /** Longer description of what this role does */
  roleDescription: string;
  /** Typical salary range string */
  salaryRange: string;
  /** Key requirements */
  requirements: string;
  /** Career progression options */
  career: string;
  /** Related roles */
  related: string[];
}

const ROLE_CONTENT: Record<string, RoleContent> = {
  "Spengler EFZ": {
    label: "Spengler EFZ",
    roleDescription:
      "Spengler EFZ verarbeiten Bleche zu Dachrinnen, Kamineinfassungen, Fassadenverkleidungen und Dachabschlüssen. Sie arbeiten auf Baustellen und in der Werkstatt mit Kupfer, Zink, Aluminium und Chromstahl.",
    salaryRange: "CHF 65'000 – 80'000",
    requirements:
      "Abgeschlossene 4-jährige Lehre als Spengler EFZ, handwerkliches Geschick, Schwindelfreiheit, Fahrausweis Kategorie B.",
    career:
      "Weiterbildung zum Spenglermeister, Polybau-Spezialist oder Projektleiter Gebäudehülle.",
    related: ["Bauspengler", "Dachdecker / Spengler", "Fassadenspengler"],
  },
  "Bauspengler": {
    label: "Bauspengler",
    roleDescription:
      "Bauspengler erstellen und montieren Blecharbeiten an Gebäudehüllen — von Dachrinnen und Fallrohren über Blechabdeckungen bis zu Fassadenverkleidungen. Sie arbeiten vorwiegend auf Baustellen.",
    salaryRange: "CHF 65'000 – 78'000",
    requirements:
      "Ausbildung als Spengler EFZ, körperliche Fitness, Erfahrung mit Blechbearbeitung, Teamfähigkeit.",
    career:
      "Aufstieg zum Vorarbeiter, Polier oder Weiterbildung zum Spenglermeister.",
    related: ["Spengler EFZ", "Flachdachspengler", "Spengler-Monteur"],
  },
  "Flachdachspengler": {
    label: "Flachdachspengler",
    roleDescription:
      "Flachdachspengler sind spezialisiert auf die Abdichtung und Entwässerung von Flachdächern. Sie verlegen Abdichtungsbahnen, montieren Dachrandabschlüsse und sorgen für fachgerechte Entwässerungslösungen.",
    salaryRange: "CHF 68'000 – 82'000",
    requirements:
      "Ausbildung als Spengler EFZ oder Abdichter EFZ, Erfahrung mit Flachdachsystemen, Kenntnisse in Abdichtungstechnik.",
    career:
      "Spezialisierung auf begrünte Dächer, Photovoltaik-Integration oder Weiterbildung zum Polybau-Spezialisten.",
    related: ["Abdichter", "Spengler EFZ", "Bauspengler"],
  },
  "Dachdecker / Spengler": {
    label: "Dachdecker / Spengler",
    roleDescription:
      "Dachdecker/Spengler kombinieren Kompetenzen im Dachbau und in der Spenglerarbeit. Sie decken Steildächer ein, erstellen Blechanschlüsse und sorgen für die komplette Dachhülle — von der Unterkonstruktion bis zur Entwässerung.",
    salaryRange: "CHF 65'000 – 82'000",
    requirements:
      "Ausbildung als Spengler EFZ oder Dachdecker EFZ, Schwindelfreiheit, Erfahrung mit verschiedenen Dachsystemen.",
    career:
      "Spezialisierung auf historische Dächer, Metalldächer oder Weiterbildung zum Polier/Vorarbeiter.",
    related: ["Spengler EFZ", "Flachdachspengler", "Bauspengler"],
  },
  "Fassadenspengler": {
    label: "Fassadenspengler",
    roleDescription:
      "Fassadenspengler gestalten und montieren Fassadenverkleidungen aus Metall. Sie arbeiten mit vorgehängten hinterlüfteten Fassaden, Verbundplatten und Metallkassetten — sowohl bei Neubauten als auch Sanierungen.",
    salaryRange: "CHF 68'000 – 85'000",
    requirements:
      "Ausbildung als Spengler EFZ, Erfahrung im Fassadenbau, Kenntnisse in Fassadensystemen und Metallverarbeitung.",
    career:
      "Spezialisierung auf architektonische Fassaden, Aufstieg zum Fassadenbau-Projektleiter.",
    related: ["Spengler EFZ", "Gebäudehüllenspezialist", "Polybau-Spengler"],
  },
  "Polybau-Spengler": {
    label: "Polybau-Spengler",
    roleDescription:
      "Polybau-Spengler sind Allrounder in der Gebäudehülle und beherrschen Spenglerarbeiten, Abdichtung und Dachbegrünung. Sie arbeiten an komplexen Gebäudehüllenprojekten mit verschiedenen Materialien und Systemen.",
    salaryRange: "CHF 68'000 – 85'000",
    requirements:
      "Polybau-Ausbildung oder Spengler EFZ mit Zusatzqualifikation, vielseitige Materialkenntnisse.",
    career:
      "Weiterbildung zum Polybau-Meister, Spezialisierung auf Gebäudehüllensanierung oder Energieberatung.",
    related: ["Spengler EFZ", "Flachdachspengler", "Abdichter"],
  },
  "Spengler-Vorarbeiter": {
    label: "Spengler-Vorarbeiter",
    roleDescription:
      "Spengler-Vorarbeiter leiten kleine Teams auf der Baustelle, koordinieren Arbeitsabläufe, kontrollieren die Qualität der Spenglerarbeiten und sind Ansprechpartner für Bauleitung und Projektleitung.",
    salaryRange: "CHF 75'000 – 92'000",
    requirements:
      "Ausbildung als Spengler EFZ, mehrjährige Berufserfahrung, Führungskompetenz, organisatorisches Talent.",
    career:
      "Aufstieg zum Polier, Projektleiter Gebäudehülle oder Weiterbildung zum Spenglermeister.",
    related: ["Spengler EFZ", "Bauleiter Gebäudehülle", "Projektleiter Gebäudehülle"],
  },
  "Spengler-Monteur": {
    label: "Spengler-Monteur",
    roleDescription:
      "Spengler-Monteure führen Montagearbeiten an Dächern und Fassaden aus. Sie montieren vorgefertigte Blechteile, Dachrinnen und Verkleidungen vor Ort und arbeiten eng mit dem Werkstatt-Team zusammen.",
    salaryRange: "CHF 62'000 – 76'000",
    requirements:
      "Ausbildung im Spenglerbereich, handwerkliches Geschick, körperliche Fitness, Teamfähigkeit.",
    career:
      "Weiterbildung zum Spengler EFZ, Aufstieg zum Vorarbeiter oder Spezialisierung auf einen Fachbereich.",
    related: ["Spengler EFZ", "Bauspengler", "Dachdecker / Spengler"],
  },
  "Projektleiter Gebäudehülle": {
    label: "Projektleiter Gebäudehülle",
    roleDescription:
      "Projektleiter Gebäudehülle leiten Spengler- und Dachprojekte von der Offerte über die Planung bis zur Übergabe. Sie führen Teams, kontrollieren Kosten und Termine und beraten Bauherren und Architekten.",
    salaryRange: "CHF 85'000 – 110'000",
    requirements:
      "Weiterbildung zum Projektleiter Gebäudehülle oder Spenglermeister, Führungserfahrung, Verhandlungsgeschick.",
    career:
      "Aufstieg zum Bereichsleiter, Geschäftsführer oder Gründung eines eigenen Spenglerbetriebs.",
    related: ["Bauleiter Gebäudehülle", "Spengler-Vorarbeiter", "Spengler EFZ"],
  },
  "Bauleiter Gebäudehülle": {
    label: "Bauleiter Gebäudehülle",
    roleDescription:
      "Bauleiter Gebäudehülle koordinieren und überwachen Spengler- und Dacharbeiten auf Grossbaustellen. Sie sind verantwortlich für Terminplanung, Kostenkontrolle, Qualitätssicherung und die Führung von Subunternehmern.",
    salaryRange: "CHF 90'000 – 115'000",
    requirements:
      "Weiterbildung zum Bauleiter oder Spenglermeister, mehrjährige Berufserfahrung, Führungskompetenz.",
    career:
      "Aufstieg zum Gesamtprojektleiter, Niederlassungsleiter oder Geschäftsführer eines Spenglerbetriebs.",
    related: ["Projektleiter Gebäudehülle", "Spengler-Vorarbeiter", "Spengler EFZ"],
  },
  "Abdichter": {
    label: "Abdichter",
    roleDescription:
      "Abdichter sind Spezialisten für die Abdichtung von Flachdächern, Terrassen, Balkonen und erdberührten Bauteilen. Sie verarbeiten Bitumen-, Kunststoff- und Flüssigabdichtungen und sorgen für langfristigen Schutz vor Feuchtigkeit.",
    salaryRange: "CHF 65'000 – 80'000",
    requirements:
      "Ausbildung als Abdichter EFZ oder Spengler EFZ, Kenntnisse in Abdichtungssystemen, körperliche Fitness.",
    career:
      "Spezialisierung auf Spezialabdichtungen, begrünte Dächer oder Weiterbildung zum Polybau-Spezialisten.",
    related: ["Flachdachspengler", "Polybau-Spengler", "Spengler EFZ"],
  },
  "Gebäudehüllenspezialist": {
    label: "Gebäudehüllenspezialist",
    roleDescription:
      "Gebäudehüllenspezialisten beraten und planen ganzheitliche Lösungen für die Gebäudehülle — von der energetischen Sanierung über Fassadensysteme bis zur Dachkonstruktion. Sie kombinieren technisches Wissen mit Beratungskompetenz.",
    salaryRange: "CHF 80'000 – 100'000",
    requirements:
      "Ausbildung im Bereich Gebäudehülle oder Spengler, Weiterbildung zum Gebäudehüllenspezialist, Beratungskompetenz.",
    career:
      "Spezialisierung auf Energieberatung, nachhaltiges Bauen oder Aufstieg in die Geschäftsleitung.",
    related: ["Fassadenspengler", "Projektleiter Gebäudehülle", "Polybau-Spengler"],
  },
};

// --- Canton-specific content ---

interface CantonContent {
  /** Full canton name for titles */
  name: string;
  /** Short canton abbreviation */
  abbr: string;
  /** Brief economic context for the electrical industry */
  context: string;
}

const CANTON_CONTENT: Record<string, CantonContent> = {
  ZH: {
    name: "Zürich",
    abbr: "ZH",
    context:
      "Der Kanton Zürich ist der grösste Baumarkt der Schweiz mit einem anhaltenden Bauboom, zahlreichen Dach- und Fassadensanierungen und einer hohen Dichte an Spenglerinstallationsfirmen.",
  },
  BE: {
    name: "Bern",
    abbr: "BE",
    context:
      "Im Kanton Bern gibt es eine starke Nachfrage nach Spengler-Fachkräften — der grosse Bestand an älteren Gebäuden in der Bundesstadt und im Berner Oberland treibt Dachsanierungen und Gebäudehüllenprojekte voran.",
  },
  BS: {
    name: "Basel",
    abbr: "BS",
    context:
      "Basel-Stadt und die Region Nordwestschweiz bieten attraktive Arbeitsbedingungen für Spengler-Fachkräfte, mit zahlreichen Sanierungsprojekten, Industriebauten und anspruchsvollen Fassadenarbeiten.",
  },
  AG: {
    name: "Aargau",
    abbr: "AG",
    context:
      "Der Kanton Aargau verzeichnet rege Bautätigkeit und eine hohe Nachfrage nach Spengler-Fachkräften — sowohl im Wohnungsbau als auch bei der Sanierung von Gewerbe- und Industriedächern.",
  },
  SG: {
    name: "St. Gallen",
    abbr: "SG",
    context:
      "Die Ostschweiz mit dem Kanton St. Gallen bietet vielfältige Möglichkeiten für Spengler-Fachkräfte — von KMU-Spenglerinstallationsfirmen bis zu grossen Gebäudehülle-Unternehmen mit anspruchsvollen Dach- und Fassadenprojekten.",
  },
  LU: {
    name: "Luzern",
    abbr: "LU",
    context:
      "Im Kanton Luzern wächst die Nachfrage nach Spengler-Fachkräften stetig — getrieben durch Neubauprojekte, energetische Dachsanierungen und die Erneuerung von Gebäudehüllen in der Tourismusregion.",
  },
  SO: {
    name: "Solothurn",
    abbr: "SO",
    context:
      "Der Kanton Solothurn bietet als Baustandort zwischen Bern und Basel gute Karrierechancen für Spengler-Fachkräfte — mit aktiver Bautätigkeit in Wohnsiedlungen, Gewerbebauten und Dachsanierungsprojekten.",
  },
  ZG: {
    name: "Zug",
    abbr: "ZG",
    context:
      "Der Kanton Zug bietet als wirtschaftsstarker Standort überdurchschnittliche Löhne und anspruchsvolle Projekte für Spengler-Fachkräfte — von hochwertigen Metallfassaden bis zu komplexen Dachkonstruktionen.",
  },
  TG: {
    name: "Thurgau",
    abbr: "TG",
    context:
      "Der Kanton Thurgau bietet als wachsender Wirtschaftsstandort in der Ostschweiz zunehmend Chancen für Spengler-Fachkräfte — besonders in der Sanierung von Landwirtschaftsgebäuden, Wohnbauten und Gewerbedächern.",
  },
  GR: {
    name: "Graubünden",
    abbr: "GR",
    context:
      "Im Kanton Graubünden sind Spengler-Fachkräfte gefragt — alpine Witterungsbedingungen stellen hohe Anforderungen an Dach- und Fassadenkonstruktionen, von Feriendörfern über Bergbahnanlagen bis zu Neubauten in den Tourismusorten.",
  },
  SH: {
    name: "Schaffhausen",
    abbr: "SH",
    context:
      "Der Kanton Schaffhausen bietet als kompakter Baustandort attraktive Stellen für Spengler-Fachkräfte, insbesondere bei Spenglerinstallationsfirmen, die Industrie- und Gewerbedächer sowie Wohnbauten betreuen.",
  },
  FR: {
    name: "Fribourg",
    abbr: "FR",
    context:
      "Der zweisprachige Kanton Fribourg wächst dynamisch und bietet Spengler-Fachkräften vielfältige Möglichkeiten — von Neubauprojekten über Dachsanierungen bis zu Fassadenarbeiten bei Spenglerinstallationsfirmen in der ganzen Region.",
  },
};

// --- All role keys ---
const ALL_ROLES = Object.keys(ROLE_CONTENT);
const ALL_CANTONS = Object.keys(CANTON_CONTENT);

// --- Content generation ---

function buildLandingConfig(roleKey: string, cantonKey: string): LandingPageConfig {
  const role = ROLE_CONTENT[roleKey];
  const canton = CANTON_CONTENT[cantonKey];

  if (!role || !canton) {
    throw new Error(`Invalid role "${roleKey}" or canton "${cantonKey}"`);
  }

  const relatedRolesList = role.related.join(", ");

  return {
    role: roleKey,
    canton: cantonKey,
    title: `${role.label} Jobs in ${canton.name}`,
    description: `Aktuelle ${role.label} Stellen im Kanton ${canton.name}. ${role.roleDescription.split(".")[0]}. Jetzt bewerben auf spenglerjob.ch.`,
    intro: `Als ${role.label} in ${canton.name} findest du auf spenglerjob.ch alle aktuellen Stellenangebote in deiner Region. ${role.roleDescription} ${canton.context} Die Nachfrage nach qualifizierten ${role.label}-Fachkräften im Kanton ${canton.name} ist hoch — Arbeitgeber suchen gezielt nach Kandidaten mit ${role.requirements.split(",")[0].toLowerCase()}. Das durchschnittliche Jahresgehalt für ${role.label} in der Schweiz liegt bei ${role.salaryRange}. Verwandte Berufe wie ${relatedRolesList} bieten zusätzliche Karrieremöglichkeiten in der Spenglerbranche. ${role.career} Nutze unsere smarte Filterung nach Pensum, Umkreis und Anstellungsart, um die passende Stelle zu finden. Bewirb dich direkt online und lade deinen Lebenslauf hoch.`,
    faqs: [
      {
        question: `Was verdient ein ${role.label} im Kanton ${canton.name}?`,
        answer: `Ein ${role.label} verdient in der Schweiz durchschnittlich ${role.salaryRange} pro Jahr. Im Kanton ${canton.name} können die Löhne je nach Arbeitgeber, Erfahrung und Spezialisierung variieren.`,
      },
      {
        question: `Welche Voraussetzungen braucht man als ${role.label}?`,
        answer: role.requirements,
      },
      {
        question: `Welche Karrieremöglichkeiten hat ein ${role.label}?`,
        answer: role.career,
      },
      {
        question: `Wie viele ${role.label} Jobs gibt es in ${canton.name}?`,
        answer: `Auf spenglerjob.ch findest du aktuelle ${role.label} Stellen im Kanton ${canton.name}. Die Anzahl verfügbarer Jobs variiert — nutze unsere Suche für die aktuellsten Ergebnisse.`,
      },
    ],
  };
}

// --- Build full matrix ---
export const TOP_LANDING_PAGES: LandingPageConfig[] = ALL_ROLES.flatMap((roleKey) =>
  ALL_CANTONS.map((cantonKey) => buildLandingConfig(roleKey, cantonKey))
);

// --- Slug helpers ---

function normalizeSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function toRoleSlug(role: string): string {
  return normalizeSlug(role);
}

export function toCantonSlug(canton: string): string {
  return normalizeSlug(canton);
}

export function getLandingPath(config: LandingPageConfig): string {
  return `/spenglerjobs/${toRoleSlug(config.role)}/${toCantonSlug(config.canton)}`;
}

export function findLandingPageBySlug(roleSlug: string, cantonSlug: string): LandingPageConfig | null {
  return (
    TOP_LANDING_PAGES.find(
      (item) => toRoleSlug(item.role) === roleSlug && toCantonSlug(item.canton) === cantonSlug
    ) ?? null
  );
}

/**
 * Get landing pages for the same canton (different roles) or same role (different cantons).
 * Used for cross-linking on landing pages.
 */
export function getRelatedLandingPages(config: LandingPageConfig, limit = 8): LandingPageConfig[] {
  const sameCantonDifferentRole = TOP_LANDING_PAGES.filter(
    (p) => p.canton === config.canton && p.role !== config.role
  );
  const sameRoleDifferentCanton = TOP_LANDING_PAGES.filter(
    (p) => p.role === config.role && p.canton !== config.canton
  );

  // Mix: take some from same canton, some from same role
  const mixed: LandingPageConfig[] = [];
  const maxPerGroup = Math.ceil(limit / 2);
  mixed.push(...sameCantonDifferentRole.slice(0, maxPerGroup));
  mixed.push(...sameRoleDifferentCanton.slice(0, maxPerGroup));
  return mixed.slice(0, limit);
}
