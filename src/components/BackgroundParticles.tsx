"use client";

import dynamic from "next/dynamic";

const ParticleLinks = dynamic(() => import("@/components/ui/particle-links"), {
  ssr: false,
});

// One fixed particle field behind the whole page, with a soft vignette so the
// edges recede and section text stays readable over it.
export function BackgroundParticles({
  id,
  count,
  density,
}: {
  id: string;
  count?: number;
  density?: boolean;
}) {
  return (
    <div aria-hidden="true" className="fixed inset-0 z-0">
      <ParticleLinks
        id={id}
        count={count}
        density={density}
        className="absolute inset-0"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.75)_100%)]" />
    </div>
  );
}
