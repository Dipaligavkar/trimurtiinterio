import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-x-0 top-0 -z-10 h-[320px] bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.14),transparent_60%)]" />
      <div className="container-page py-14 sm:py-16">
        {eyebrow ? (
          <div className="text-sm font-semibold text-brand">{eyebrow}</div>
        ) : null}
        <h1 className="mt-2 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-3xl text-pretty text-base leading-7 text-muted-foreground">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}

