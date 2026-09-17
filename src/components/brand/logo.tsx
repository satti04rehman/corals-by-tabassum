import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
  compact?: boolean;
}

export function Logo({ className, variant = "dark", compact = false }: LogoProps) {
  const cream = "#FAF6F1";
  const white = "#FFFFFF";
  const rose = "#B76E79";
  const petal = variant === "dark" ? white : cream;
  const shade = variant === "dark" ? "#F0E6DB" : "#FFFFFF";
  const mark = (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-8 w-8 min-[380px]:h-9 min-[380px]:w-9", className)}
      aria-hidden="true"
    >
      {variant === "dark" && <circle cx="20" cy="20" r="18" fill="#F2E7E0" />}
      <circle
        cx="20"
        cy="20"
        r="16.5"
        stroke={variant === "dark" ? cream : cream}
        strokeWidth="1.2"
        fill="none"
      />
      {/* Pearl */}
      <circle cx="20" cy="20" r="8.5" fill={white} />
      <circle cx="20" cy="20" r="8.5" stroke={cream} strokeWidth="0.8" />
      <path d="M20 11.5 a8.5 8.5 0 0 1 0 17 z" fill={shade} opacity="0.45" />
      {/* Coral blossom */}
      <g fill={petal} stroke={cream} strokeWidth="0.55">
        <circle cx="29.7" cy="11" r="2" />
        <circle cx="26.8" cy="7" r="2" />
        <circle cx="22.1" cy="8.5" r="2" />
        <circle cx="22.1" cy="13.5" r="2" />
        <circle cx="26.8" cy="15" r="2" />
        <circle cx="25.5" cy="11" r="1.9" />
      </g>
      {/* Coral seed */}
      <circle cx="10.5" cy="29.5" r="2.2" fill={rose} />
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
          "font-heading text-xl font-semibold uppercase tracking-[0.22em]",
          "hidden min-[420px]:inline",
          variant === "dark" ? "text-obsidian" : "text-ivory"
        )}
      >
        Corals<span className="ml-2 text-champagne">by Tabassum</span>
      </span>
    </span>
  );
}