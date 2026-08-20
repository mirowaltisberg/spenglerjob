import { cn } from "@/lib/utils";

interface SiteBrandProps {
  className?: string;
  inverse?: boolean;
}

/** A compact folded-sheet lockup drawn in SVG; no external brand asset. */
export function SiteBrand({ className, inverse = false }: SiteBrandProps) {
  return (
    <span
      className={cn("site-brand", inverse && "site-brand--inverse", className)}
      role="img"
      aria-label="spenglerjob.ch"
    >
      <svg
        className="site-brand__mark"
        viewBox="0 0 42 42"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M6 8h22l8 8v18H14l-8-8z" />
        <path d="M28 8v8h8M6 26h8v8M13 15h11l5 5v8H18l-5-5z" />
      </svg>
      <span className="site-brand__type">
        <strong>spengler</strong>
        <span>job.ch</span>
      </span>
    </span>
  );
}
