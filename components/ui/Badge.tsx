import type { ReactNode } from "react";

type Tone = "terracotta" | "sage" | "charcoal";

const toneStyles: Record<Tone, string> = {
  terracotta: "bg-terracotta-soft text-terracotta-dark",
  sage: "bg-sage-soft text-sage",
  charcoal: "bg-charcoal/[0.06] text-charcoal-soft",
};

export function Badge({
  children,
  tone = "charcoal",
  icon,
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${toneStyles[tone]} ${className}`}
    >
      {icon}
      {children}
    </span>
  );
}
