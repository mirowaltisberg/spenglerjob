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
  roleDescription: string;
  requirements: string;
  career: string;
  cantonContext: string;
  faqs: LandingFaq[];
}

interface RoleContent {
  label: string;
  roleDescription: string;
  requirements: string;
  career: string;
}

// Spengler-only search labels. Broad or neighbouring trades are deliberately
// excluded from public SEO navigation.
const ROLE_CONTENT: Record<string, RoleContent> = {
  "Spengler EFZ": {
    label: "Spengler EFZ",
    roleDescription:
      "Spenglerinnen und Spengler EFZ fertigen Blechteile für Dächer und Fassaden, montieren Bekleidungen und Anschlüsse und führen Abdichtungsarbeiten am Flachdach aus.",
    requirements:
      "Für Stellen mit dem geschützten EFZ-Titel ist in der Regel ein entsprechender Abschluss oder eine im Inserat als gleichwertig bezeichnete Qualifikation erforderlich.",
    career:
      "Suissetec führt unter anderem Spenglerpolier/in mit eidgenössischem Fachausweis und Spenglermeister/in mit eidgenössischem Diplom als höhere Berufsbildungen.",
  },
  Bauspengler: {
    label: "Bauspengler",
    roleDescription:
      "Bauspenglerinnen und Bauspengler bearbeiten Blech in der Werkstatt und montieren Dachrinnen, Einfassungen, Abdeckungen oder Fassadenelemente auf der Baustelle.",
    requirements:
      "Massgebend sind die verlangte Spenglergrundbildung, Praxis in Blechbearbeitung und Montage sowie die im Inserat genannten Anforderungen für Arbeiten in der Höhe.",
    career:
      "Weiterbildungen in Vorarbeit, Projektleitung oder höherer Berufsbildung hängen vom Abschluss und der Berufspraxis ab.",
  },
  "Spenglerpraktiker EBA": {
    label: "Spenglerpraktiker EBA",
    roleDescription:
      "Spenglerpraktikerinnen und Spenglerpraktiker EBA unterstützen bei einfachen Blech-, Abdichtungs- und Montagearbeiten an Dächern und Fassaden.",
    requirements:
      "Für Stellen mit EBA-Titel ist der entsprechende Abschluss oder eine im Inserat als gleichwertig bezeichnete Qualifikation massgebend.",
    career:
      "Eine verkürzte EFZ-Grundbildung kann je nach persönlicher Situation möglich sein; die Bedingungen sind mit Berufsberatung und Lehrbetrieb zu klären.",
  },
  "AVOR Spenglerei": {
    label: "AVOR Spenglerei",
    roleDescription:
      "AVOR- und Planungsstellen in der Spenglerei können Massaufnahmen, Werkstattzeichnungen, Materialauszüge und die Vorbereitung von Fertigung und Baustellenmontage umfassen.",
    requirements:
      "Massgebend sind die ausgeschriebene Grundbildung, Spenglerpraxis sowie Planungs-, CAD- und Kalkulationskenntnisse.",
    career:
      "Je nach Vorbildung kommen Weiterbildungen in Projektleitung, Gebäudehüllenplanung oder Betriebsführung infrage.",
  },
  "Projektleiter Spenglerei": {
    label: "Projektleiter Spenglerei",
    roleDescription:
      "Projektleitungsstellen in der Spenglerei können Kalkulation, Arbeitsvorbereitung, Termin- und Kostensteuerung sowie die Abstimmung zwischen Werkstatt und Baustelle umfassen.",
    requirements:
      "Ausbildung, Fachpraxis und Führungserfahrung sind je nach Inserat unterschiedlich gewichtet.",
    career:
      "Die Funktion ist keine pauschale Zusage für eine bestimmte Weiterbildung, Verantwortung oder Vergütung.",
  },
  "Spenglerpolier": {
    label: "Spenglerpolier",
    roleDescription:
      "Spenglerpolierinnen und Spenglerpoliere übernehmen fachliche und organisatorische Verantwortung in Werkstatt und auf Baustellen und koordinieren Teams und Ausführung.",
    requirements:
      "Massgebend sind die im Inserat verlangte Spenglergrundbildung, Berufspraxis und gegebenenfalls der eidgenössische Fachausweis.",
    career:
      "Spenglerpolier/in ist eine eidgenössische Berufsprüfung; suissetec führt Spenglermeister/in als anschliessende höhere Fachprüfung.",
  },
  "Servicemonteur Spenglerei": {
    label: "Servicemonteur Spenglerei",
    roleDescription:
      "Servicestellen in der Spenglerei können Zustandskontrollen, Reparaturen an Blechanschlüssen, Dachentwässerung und kleinere Abdichtungsarbeiten umfassen.",
    requirements:
      "Massgebend sind die verlangte Spenglerqualifikation, Erfahrung in Reparatur und Unterhalt sowie Mobilität und Sicherheitsanforderungen.",
    career:
      "Herstellerkurse und formale Weiterbildungen können je nach Funktion relevant sein; daraus folgt keine pauschale Aufstiegszusage.",
  },
};

interface CantonContent {
  name: string;
  abbr: string;
}

const CANTON_CONTENT: Record<string, CantonContent> = {
  ZH: { name: "Zürich", abbr: "ZH" },
  BE: { name: "Bern", abbr: "BE" },
  BS: { name: "Basel-Stadt", abbr: "BS" },
  AG: { name: "Aargau", abbr: "AG" },
  SG: { name: "St. Gallen", abbr: "SG" },
  LU: { name: "Luzern", abbr: "LU" },
  SO: { name: "Solothurn", abbr: "SO" },
  ZG: { name: "Zug", abbr: "ZG" },
  TG: { name: "Thurgau", abbr: "TG" },
  GR: { name: "Graubünden", abbr: "GR" },
  SH: { name: "Schaffhausen", abbr: "SH" },
  FR: { name: "Freiburg", abbr: "FR" },
};

const ALL_ROLES = Object.keys(ROLE_CONTENT);
const ALL_CANTONS = Object.keys(CANTON_CONTENT);

function buildLandingConfig(roleKey: string, cantonKey: string): LandingPageConfig {
  const role = ROLE_CONTENT[roleKey];
  const canton = CANTON_CONTENT[cantonKey];

  if (!role || !canton) {
    throw new Error(`Invalid role "${roleKey}" or canton "${cantonKey}"`);
  }

  const cantonContext = `Der Ortsfilter verwendet den Kanton ${canton.name} (${canton.abbr}). Der genaue Arbeitsort und ein allfälliger Einsatzradius ergeben sich aus dem jeweiligen Inserat.`;

  return {
    role: roleKey,
    canton: cantonKey,
    title: `${role.label} Jobs in ${canton.name}`,
    description: `Stelleninserate mit Bezug zu ${role.label} im Kanton ${canton.name}. Aufgaben, Anforderungen und Arbeitsort im jeweiligen Inserat prüfen.`,
    intro: `Diese Suchseite zeigt Treffer für ${role.label} mit Ortsbezug zum Kanton ${canton.name}. Sie erhebt keinen Anspruch auf Vollständigkeit. ${cantonContext}`,
    roleDescription: role.roleDescription,
    requirements: role.requirements,
    career: role.career,
    cantonContext,
    faqs: [
      {
        question: `Wie viele ${role.label} Stellen gibt es in ${canton.name}?`,
        answer: `Die Zahl der Treffer wird auf dieser Seite aus dem aktuellen öffentlichen Bestand berechnet und kann sich ändern. spenglerjob.ch verspricht keine vollständige Marktabdeckung.`,
      },
      {
        question: `Welche Voraussetzungen gelten für ${role.label}?`,
        answer: role.requirements,
      },
      {
        question: `Was verdient ein ${role.label} in ${canton.name}?`,
        answer: `Massgebend ist eine Lohnangabe im konkreten Inserat oder Arbeitsvertrag. Für statistische Vergleiche verweist spenglerjob.ch auf Salarium des Bundesamts für Statistik; eigene pauschale Lohnbänder werden nicht ergänzt.`,
      },
      {
        question: `Wo befindet sich die Stelle im Kanton ${canton.name}?`,
        answer: cantonContext,
      },
    ],
  };
}

export const TOP_LANDING_PAGES: LandingPageConfig[] = ALL_ROLES.flatMap((roleKey) =>
  ALL_CANTONS.map((cantonKey) => buildLandingConfig(roleKey, cantonKey))
);

function normalizeSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/\u00df/g, "ss")
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

export function getRelatedLandingPages(config: LandingPageConfig, limit = 8): LandingPageConfig[] {
  const sameCantonDifferentRole = TOP_LANDING_PAGES.filter(
    (page) => page.canton === config.canton && page.role !== config.role
  );
  const sameRoleDifferentCanton = TOP_LANDING_PAGES.filter(
    (page) => page.role === config.role && page.canton !== config.canton
  );
  const maxPerGroup = Math.ceil(limit / 2);
  return [
    ...sameCantonDifferentRole.slice(0, maxPerGroup),
    ...sameRoleDifferentCanton.slice(0, maxPerGroup),
  ].slice(0, limit);
}
