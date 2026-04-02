"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/brands", label: "Brands" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = useMemo(() => pathname ?? "/", [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur">
      <div className="container-page">
        <div className="flex h-16 items-center justify-between gap-3">
          <Link href="/" className="group inline-flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-background ring-1 ring-border">
              <Image
                src="/trimurti-logo.png"
                alt="Trimurti Interio logo"
                width={72}
                height={72}
                className="h-full w-full object-contain p-1"
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="font-semibold tracking-tight">Trimurti</div>
              <div className="text-xs text-muted-foreground">Interio</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm transition hover:bg-foreground/5",
                    isActive && "bg-foreground/5",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Button variant="ghost" href="/contact">
              Inquiry
            </Button>
            <Button href="/contact#inquiry">Get Quote</Button>
          </div>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60 text-sm md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-foreground" />
              <span className="block h-0.5 w-5 bg-foreground" />
            </div>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background/95 backdrop-blur md:hidden">
          <div className="container-page py-3">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = active === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-xl px-4 py-3 text-sm transition hover:bg-foreground/5",
                      isActive && "bg-foreground/5",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <Button variant="ghost" href="/contact">
                  Inquiry
                </Button>
                <Button href="/contact#inquiry">Get Quote</Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

