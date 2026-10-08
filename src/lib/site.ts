// Vercel sets VERCEL_PROJECT_PRODUCTION_URL at build time to the production
// domain (a custom domain once one is attached). NEXT_PUBLIC_SITE_URL overrides it.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://pham-tri-portfolio.vercel.app");

export const siteName = "Tri Pham";

export const siteDescription =
  "Tri Pham is a front-end engineer building interactive 3D web experiences with React, Three.js, and TypeScript — and a musician and photographer.";

export const email = "trimpham98@gmail.com";

export const homeSections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/TriMPham98" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pham-tri/" },
  { label: "X", href: "https://x.com/Trizus" },
] as const;
