import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
  compact?: boolean;
}

export function Logo({ className, variant = "dark", compact = false }: LogoProps) {
  const ink = variant === "dark" ? "#4A3A35" : "#FAF6F1";
  const rose = "#B76E79";
  const gold = "#D4A574";
  const mark = (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-9 w-9", className)}
      aria-hidden="true"
    >
      <circle
        cx="20"
        cy="20"
        r="17"
        stroke={ink}
        strokeWidth="2"
        fill="none"
      />
      <circle cx="20" cy="20" r="7" fill={variant === "dark" ? "#D4A574" : "#B76E79"} opacity="0.35" />
      <circle cx="20" cy="20" r="3.5" fill={ink} />
      <circle cx="27" cy="12" r="3" fill={rose} />
    </svg>
  );

  if (compact) {
    return <span className="inline-flex items-center">{mark}</span>;
  }

  return (
    <span className="inline-flex items-center gap-2.5">
      {mark}
      <span
        className={cn(
          "font-heading text-xl font-semibold uppercase tracking-[0.28em]",
          "hidden min-[420px]:inline",
          variant === "dark" ? "text-obsidian" : "text-ivory"
        )}
      >
        Corals<span className="text-champagne">by Tabassum</span>
      </span>
    </span>
  );
}