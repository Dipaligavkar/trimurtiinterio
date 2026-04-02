import Link from "next/link";
import { cn } from "@/lib/utils";
import type React from "react";

type CommonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-60";

const variants: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary:
    "bg-brand text-black hover:bg-brand-2 shadow-[0_12px_40px_rgba(249,115,22,0.22)]",
  secondary:
    "bg-foreground text-background hover:bg-foreground/90 border border-border",
  ghost:
    "bg-transparent text-foreground hover:bg-foreground/5 border border-border",
};

const sizes: Record<NonNullable<CommonProps["size"]>, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm",
  lg: "h-14 px-6 text-base",
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type ButtonAsLink = CommonProps &
  { href: string } & Omit<React.ComponentProps<typeof Link>, "href" | "className"> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button(props: ButtonAsButton): React.ReactElement;
export function Button(props: ButtonAsLink): React.ReactElement;
export function Button(props: ButtonAsButton | ButtonAsLink) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";
  const classes = cn(base, variants[variant], sizes[size], props.className);

  if ("href" in props && typeof props.href === "string") {
    const {
      href,
      children,
      className: _className,
      variant: _variant,
      size: _size,
      ...rest
    } = props;
    void _className;
    void _variant;
    void _size;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const {
    children,
    className: _className,
    variant: _variant,
    size: _size,
    ...rest
  } = props;
  void _className;
  void _variant;
  void _size;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

