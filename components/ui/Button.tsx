import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "onDark";
type Size = "md" | "lg";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-gold text-charcoal hover:bg-gold-dark hover:text-cream shadow-sm shadow-terracotta-dark/10",
  secondary:
    "bg-transparent text-charcoal border border-charcoal/20 hover:border-charcoal/40 hover:bg-charcoal/5",
  ghost: "bg-white/70 text-charcoal backdrop-blur-md hover:bg-white/90",
  onDark: "bg-white text-charcoal hover:bg-cream",
};

const sizeStyles: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-[52px] px-7 text-[15px]",
};

function buttonClasses(variant: Variant, size: Size, className: string) {
  return `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold tracking-tight transition-all duration-300 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta cursor-pointer ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
}) {
  return (
    <button className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
}) {
  return (
    <a className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </a>
  );
}
