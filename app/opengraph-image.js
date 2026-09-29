import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Arzoo Ahmed — Junior MERN Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#0d1117",
          padding: "60px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background grid accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(163,230,53,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Top label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: "#a3e635",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0d1117",
              fontWeight: 800,
              fontSize: 16,
            }}
          >
            AA
          </div>
          <span style={{ color: "#a3e635", fontSize: 16, fontWeight: 600 }}>
            arzooahmed01.netlify.app
          </span>
        </div>

        {/* Main name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#e6edf3",
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          Arzoo Ahmed
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 30,
            color: "#8b949e",
            fontWeight: 500,
            marginBottom: 40,
            lineHeight: 1.3,
          }}
        >
          Junior MERN Stack Developer &amp; Full-Stack Web Developer
        </div>

        {/* Tech badges */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {["React", "Next.js", "Node.js", "MongoDB", "Express.js"].map((tech) => (
            <div
              key={tech}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                background: "rgba(163,230,53,0.12)",
                border: "1px solid rgba(163,230,53,0.3)",
                color: "#a3e635",
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Location */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 80,
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: "#6e7681",
            fontSize: 16,
          }}
        >
          📍 Dhaka, Bangladesh
        </div>
      </div>
    ),
    { ...size }
  );
}
