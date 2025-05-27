import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photography Portfolio - Tri Pham",
  description:
    "Explore Tri Pham's photography portfolio featuring wedding, portrait, and music photography",
  keywords: [
    "photography",
    "portfolio",
    "wedding photography",
    "portrait photography",
    "music photography",
    "Tri Pham",
  ],
  openGraph: {
    title: "Photography Portfolio - Tri Pham",
    description:
      "Explore Tri Pham's photography portfolio featuring wedding, portrait, and music photography",
    type: "website",
  },
};

export default function PhotographyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
