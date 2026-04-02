"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const phone = "8698600990";
const whatsapp = "918698600990";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-50 flex flex-col gap-2 transition-all",
        show ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
      )}
    >
      <a
        href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
          "Hi Trimurti Interio, I’d like to inquire about products.",
        )}`}
        target="_blank"
        rel="noreferrer"
        className="glass inline-flex h-12 items-center justify-center gap-2 rounded-full px-4 text-sm font-medium text-foreground shadow-sm hover:bg-foreground/5"
        aria-label="WhatsApp"
      >
        <span className="h-2 w-2 rounded-full bg-brand" />
        WhatsApp
      </a>

      <a
        href={`tel:${phone}`}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-4 text-sm font-semibold text-black shadow-[0_16px_55px_rgba(249,115,22,0.28)] hover:bg-brand-2 md:hidden"
        aria-label="Call now"
      >
        Call Now
      </a>
    </div>
  );
}

