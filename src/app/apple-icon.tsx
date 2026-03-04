import { ImageResponse } from "next/og";

// SEO-DECISION: Apple Touch Icon generated from code to match the brand roof mark.
// This satisfies the Seobility "missing apple-touch-icon" warning.

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#4A5568",
          borderRadius: "36px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="120"
          height="120"
        >
          <path
            d="M4 40 L24 6 L44 40 L35 40 L24 16 L13 40 Z"
            fill="white"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
