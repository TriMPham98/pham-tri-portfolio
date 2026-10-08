import { ogImage, ogSize } from "@/lib/og";

export const alt = "Tri Pham — front-end engineer, musician, and photographer";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    image: "images/TriGuitarHeadshot.jpg",
    round: true,
    title: "Tri Pham",
    subtitle:
      "Front-end engineer building interactive 3D web experiences with React and Three.js.",
  });
}
