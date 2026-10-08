import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

async function publicImage(file: string) {
  const data = await readFile(path.join(process.cwd(), "public", file));
  return `data:image/jpeg;base64,${data.toString("base64")}`;
}

// Social preview card: a photo on the left half, name and tagline on the right.
export async function ogImage({
  image,
  round,
  title,
  subtitle,
}: {
  image: string;
  round?: boolean;
  title: string;
  subtitle: string;
}) {
  const src = await publicImage(image);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: 80,
          background: "linear-gradient(135deg, #111827 0%, #000000 100%)",
          color: "white",
        }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          width={round ? 360 : 420}
          height={round ? 360 : 470}
          style={{
            objectFit: "cover",
            borderRadius: round ? 9999 : 24,
            border: round ? "8px solid white" : "none",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>
            {title}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 34,
              lineHeight: 1.35,
              color: "#d1d5db",
            }}>
            {subtitle}
          </div>
        </div>
      </div>
    ),
    ogSize
  );
}
