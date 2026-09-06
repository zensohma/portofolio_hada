import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "80px",
        background: "#ffffff",
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
        color: "#18181b",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "56px",
          height: "56px",
          borderRadius: "12px",
          background: "#4f46e5",
          color: "#ffffff",
          fontSize: "28px",
          fontWeight: 800,
          fontFamily: "ui-monospace, SFMono-Regular, monospace",
          marginBottom: "32px",
        }}
      >
        MS
      </div>
      <div
        style={{
          fontSize: "72px",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
        }}
      >
        {profile.name}
      </div>
      <div
        style={{
          marginTop: "20px",
          fontSize: "32px",
          color: "#4f46e5",
          fontWeight: 600,
        }}
      >
        {profile.role}
      </div>
      <div
        style={{
          marginTop: "40px",
          width: "72px",
          height: "8px",
          borderRadius: "9999px",
          background: "#4f46e5",
        }}
      />
    </div>,
    { ...size }
  );
}
