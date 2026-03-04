import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "7px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="22"
          height="22"
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
