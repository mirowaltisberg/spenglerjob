import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
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
          background: "#12243d",
          borderRadius: "6px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="33"
          height="33"
        >
          <path d="M6 8h22l8 8v18H14l-8-8z" fill="#e9eff3" stroke="#f07832" strokeWidth="3" />
          <path d="M28 8v8h8M6 26h8v8M13 15h11l5 5v8H18l-5-5z" fill="none" stroke="#315b7a" strokeWidth="2" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
