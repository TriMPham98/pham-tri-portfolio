import { ogImage, ogSize } from "@/lib/og";

export const alt = "Tri Pham's photography portfolio";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    image: "images/wedding-background.jpg",
    title: "Photography",
    subtitle: "Wedding, portrait, and music photography by Tri Pham.",
  });
}
