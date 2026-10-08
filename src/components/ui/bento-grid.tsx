import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[minmax(22rem,auto)] grid-cols-3 gap-4",
        className
      )}>
      {children}
    </div>
  );
};

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  links,
  target,
  rel,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: IconComponent;
  description: string;
  links: { href: string; label: string }[];
  target?: string;
  rel?: string;
}) => (
  <div
    className={cn(
      "group relative col-span-3 flex flex-col justify-end overflow-hidden rounded-xl border border-white/10 bg-neutral-950",
      "transform-gpu transition-[border-color,box-shadow] duration-300 can-hover:hover:border-white/25 can-hover:hover:shadow-[0_0_40px_-12px_rgba(255,255,255,0.25)]",
      className
    )}>
    <div className="absolute inset-0">{background}</div>
    {/* Darken only behind the text so the demo footage stays visible above it. */}
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 via-45% to-black/0" />
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 can-hover:group-hover:-translate-y-10 can-hover:group-focus-within:-translate-y-10">
      <Icon className="h-10 w-10 origin-left transform-gpu text-white transition-all duration-300 ease-in-out can-hover:group-hover:scale-75 can-hover:group-focus-within:scale-75" />
      <h3 className="mt-2 text-xl font-semibold text-white">{name}</h3>
      <p className="max-w-lg text-sm leading-relaxed text-gray-200 md:text-base">
        {description}
      </p>
    </div>

    <div
      className={cn(
        // Always visible on touch screens; fades in on hover or keyboard focus
        // where a hover pointer exists. No offscreen translate here: focusing a
        // link outside the card would scroll the overflow-hidden card itself.
        "pointer-events-none z-10 flex w-full flex-row flex-wrap items-center gap-1 p-4 pt-0 transition-opacity duration-300",
        "can-hover:absolute can-hover:bottom-0 can-hover:pt-4 can-hover:opacity-0",
        "group-hover:opacity-100 group-focus-within:opacity-100"
      )}>
      {links.map((link) => (
        <Button
          key={link.href}
          variant="ghost"
          asChild
          size="sm"
          className="pointer-events-auto text-white">
          <a href={link.href} target={target} rel={rel}>
            {link.label}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
        </Button>
      ))}
    </div>
  </div>
);

export { BentoCard, BentoGrid };
