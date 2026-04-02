"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function BrandCarousel({ brands }: { brands: string[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
  });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-3xl border border-border bg-background/60" ref={emblaRef}>
        <div className="flex">
          {brands.map((b) => (
            <div
              key={b}
              className="min-w-0 flex-[0_0_70%] p-4 sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_22%]"
            >
              <div className="glass flex h-20 items-center justify-center rounded-2xl px-6 text-sm font-semibold tracking-tight">
                {b}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        {brands.slice(0, Math.min(6, brands.length)).map((_, idx) => (
          <button
            key={idx}
            className={cn(
              "h-2 w-2 rounded-full transition",
              idx === selected ? "bg-brand" : "bg-foreground/15",
            )}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => emblaApi?.scrollTo(idx)}
          />
        ))}
      </div>
    </div>
  );
}

