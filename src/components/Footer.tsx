import Link from "next/link";
import { SocialIcon } from "@/components/SocialIcon";
import { email, homeSections, socialLinks } from "@/lib/site";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/60 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <Link href="/" className="text-lg font-bold tracking-tight text-white">
            Tri Pham
          </Link>
          <p className="mt-1 text-sm text-gray-400">
            Front-end engineer, musician, photographer.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {homeSections.map((section) => (
              <li key={section.id}>
                <Link
                  href={`/#${section.id}`}
                  className="text-gray-400 transition-colors hover:text-white">
                  {section.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/photography"
                className="text-gray-400 transition-colors hover:text-white">
                Photography
              </Link>
            </li>
          </ul>
        </nav>

        <ul className="flex gap-2">
          {[{ label: "Email" as const, href: `mailto:${email}` }, ...socialLinks].map(
            (link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-label={link.label}
                  {...(link.label === "Email"
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-300 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white">
                  <SocialIcon label={link.label} className="h-[18px] w-[18px]" />
                </a>
              </li>
            )
          )}
        </ul>
      </div>
      <p className="border-t border-white/5 py-4 text-center text-xs text-gray-500">
        © {currentYear} Tri Pham. All rights reserved.
      </p>
    </footer>
  );
}
