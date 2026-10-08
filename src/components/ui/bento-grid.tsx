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
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}>
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 can-hover:group-hover:-translate-y-10 can-hover:group-focus-within:-translate-y-10">
      <Icon className="h-12 w-12 origin-left transform-gpu text-white transition-all duration-300 ease-in-out can-hover:group-hover:scale-75 can-hover:group-focus-within:scale-75" />
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <p className="max-w-lg text-white">{description}</p>
    </div>

    <div
      className={cn(
        // Always visible on touch screens; fades in on hover or keyboard focus
        // where a hover pointer exists. No offscreen translate here: focusing a
        // link outside the card would scroll the overflow-hidden card itself.
        "pointer-events-none z-10 flex w-full flex-row flex-wrap items-center p-4 pt-0 transition-opacity duration-300",
        "can-hover:absolute can-hover:bottom-0 can-hover:pt-4 can-hover:opacity-0",
        "group-hover:opacity-100 group-focus-within:opacity-100"
      )}>
      {links.map((link) => (
        <Button
          key={link.href}
          variant="ghost"
          asChild
          size="sm"
          className="pointer-events-auto">
          <a href={link.href} target={target} rel={rel}>
            {link.label}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
        </Button>
      ))}
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
