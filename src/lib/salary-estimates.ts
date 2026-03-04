/**
 * Approximate annual CHF salary ranges for Swiss Spengler / roofing trade roles.
 * Used when no salary data is available from the job source.
 */

export interface SalaryRange {
  min: number;
  max: number;
}

/**
 * Pattern → salary range mapping.
 * Checked top-to-bottom; first match wins, so put specific roles before generic ones.
 */
const ROLE_SALARY_MAP: { patterns: string[]; range: SalaryRange }[] = [
  // Leadership / senior roles
  {
    patterns: ["bauleiter"],
    range: { min: 90_000, max: 115_000 },
  },
  {
    patterns: ["projektleiter"],
    range: { min: 85_000, max: 110_000 },
  },
  // Specialists
  {
    patterns: ["gebäudehüllenspezialist", "gebaeudehuellenspezialist"],
    range: { min: 80_000, max: 100_000 },
  },
  {
    patterns: ["vorarbeiter", "polier"],
    range: { min: 75_000, max: 92_000 },
  },
  // Core Spengler trades
  {
    patterns: ["fassadenspengler"],
    range: { min: 68_000, max: 85_000 },
  },
  {
    patterns: ["flachdachspengler"],
    range: { min: 68_000, max: 82_000 },
  },
  {
    patterns: ["polybau"],
    range: { min: 68_000, max: 85_000 },
  },
  {
    patterns: ["spengler efz", "spengler"],
    range: { min: 65_000, max: 80_000 },
  },
  {
    patterns: ["bauspengler"],
    range: { min: 65_000, max: 78_000 },
  },
  {
    patterns: ["dachdecker"],
    range: { min: 65_000, max: 82_000 },
  },
  {
    patterns: ["abdichter"],
    range: { min: 65_000, max: 80_000 },
  },
  {
    patterns: ["spengler-monteur", "spenglermonteur"],
    range: { min: 62_000, max: 76_000 },
  },
  // Related trades
  {
    patterns: ["gebäudehülle", "gebaeudehulle"],
    range: { min: 70_000, max: 90_000 },
  },
  {
    patterns: ["dach", "bedachung"],
    range: { min: 65_000, max: 82_000 },
  },
  // Broad fallbacks (keep last)
  {
    patterns: ["monteur"],
    range: { min: 62_000, max: 78_000 },
  },
  {
    patterns: ["techniker"],
    range: { min: 68_000, max: 88_000 },
  },
  {
    patterns: ["fassade", "fassaden"],
    range: { min: 68_000, max: 85_000 },
  },
];

/**
 * Estimate an annual CHF salary range from a job title.
 * Returns `null` when no pattern matches.
 */
export function estimateSalary(title: string): SalaryRange | null {
  const lower = title.toLowerCase();

  for (const entry of ROLE_SALARY_MAP) {
    for (const pattern of entry.patterns) {
      if (lower.includes(pattern)) {
        return entry.range;
      }
    }
  }

  return null;
}

/**
 * Format a salary range as a Swiss-locale string, e.g. "75'000 – 95'000".
 */
export function formatSalaryRange(range: SalaryRange): string {
  const fmt = (n: number) =>
    n.toLocaleString("de-CH", { maximumFractionDigits: 0 });
  return `${fmt(range.min)} – ${fmt(range.max)}`;
}
