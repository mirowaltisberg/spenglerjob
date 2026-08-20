export interface SpenglerCity {
  slug: string;
  name: string;
  cantonAbbr: string;
  cantonSlug: string;
  region: string;
  nearbyPlaces: string[];
}

// Navigation helpers only. These records intentionally contain no invented
// demand, salary, population or commuting claims.
export const SPENGLER_CITIES: SpenglerCity[] = [
  {
    slug: "zuerich",
    name: "Zürich",
    cantonAbbr: "ZH",
    cantonSlug: "zuerich",
    region: "Grossraum Zürich",
    nearbyPlaces: ["Winterthur", "Uster", "Dübendorf", "Wetzikon", "Wädenswil", "Bülach"],
  },
  {
    slug: "basel",
    name: "Basel",
    cantonAbbr: "BS",
    cantonSlug: "basel-stadt",
    region: "Nordwestschweiz",
    nearbyPlaces: ["Liestal", "Allschwil", "Münchenstein", "Riehen", "Reinach", "Pratteln"],
  },
  {
    slug: "bern",
    name: "Bern",
    cantonAbbr: "BE",
    cantonSlug: "bern",
    region: "Mittelland",
    nearbyPlaces: ["Biel", "Thun", "Köniz", "Münsingen", "Burgdorf", "Lyss"],
  },
  {
    slug: "luzern",
    name: "Luzern",
    cantonAbbr: "LU",
    cantonSlug: "luzern",
    region: "Zentralschweiz",
    nearbyPlaces: ["Emmen", "Kriens", "Sursee", "Hochdorf", "Stans", "Zug"],
  },
  {
    slug: "st-gallen",
    name: "St. Gallen",
    cantonAbbr: "SG",
    cantonSlug: "st-gallen",
    region: "Ostschweiz",
    nearbyPlaces: ["Wil", "Rorschach", "Gossau", "Herisau", "Rapperswil", "Buchs SG"],
  },
];

export function findSpenglerCity(slug: string): SpenglerCity | null {
  return SPENGLER_CITIES.find((city) => city.slug === slug) ?? null;
}
