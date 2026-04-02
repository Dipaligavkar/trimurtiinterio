import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos and videos of products, store displays, and festival banners at Trimurti Interio.",
};

const placeholders = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  type: i % 7 === 0 ? ("video" as const) : ("image" as const),
}));

export default function GalleryPage() {
  return (
    <div>
      <PageHero
        eyebrow="Gallery"
        title="Photos & videos"
        subtitle="Visit our experience center or contact us for recent project photos and product displays."
      />

      <section className="container-page pb-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((m) => (
            <div key={m.id} className="glass overflow-hidden rounded-3xl">
              <div className="aspect-[4/3] w-full bg-foreground/5" />
              <div className="flex items-center justify-between gap-3 p-5">
                <div className="text-sm font-semibold">
                  {m.type === "video" ? "Video" : "Photo"} #{m.id}
                </div>
                <div className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground">
                  Visit store
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
