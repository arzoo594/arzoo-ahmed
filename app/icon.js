import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 7,
          background: "#a3e635",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#0d1117",
          fontSize: 14,
          fontWeight: 800,
          fontFamily: "sans-serif",
        }}
      >
        AA
      </div>
    ),
    { ...size }
  );
}
