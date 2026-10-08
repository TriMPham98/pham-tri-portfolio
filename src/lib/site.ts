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
