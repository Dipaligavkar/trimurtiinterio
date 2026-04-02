import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { getHomeData } from "@/lib/content/homeData";

export const metadata: Metadata = {
  title: "Products & Categories",
  description:
    "Explore CP fittings, sanitaryware, construction chemicals, kitchen steel sinks, and quartz sinks at Trimurti Interio, Baramati.",
};

export default function ProductsPage() {
  const data = getHomeData();
  const categories = data.categories?.length ? data.categories : [];

  return (
    <div>
      <PageHero
        eyebrow="Products"
        title="Categories designed for quality and finish."
        subtitle="Browse our core categories. For exact models, brands, and pricing—send an inquiry and we’ll respond quickly."
      />

      <section className="container-page pb-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <div key={c.name} className="glass rounded-3xl p-7">
              <div className="text-base font-semibold tracking-tight">{c.name}</div>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {c.description}
              </p>
              <div className="mt-5 flex items-center justify-between">
                <Link
                  className="text-sm font-semibold text-brand hover:underline"
                  href="/contact#inquiry"
                >
                  Ask for quotation
                </Link>
                <div className="text-xs text-muted-foreground">
                  Ask in store
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

