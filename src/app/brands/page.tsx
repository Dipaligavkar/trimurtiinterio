import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { getHomeData } from "@/lib/content/homeData";

export const metadata: Metadata = {
  title: "Brands",
  description:
    "Trimurti Interio stocks trusted brands for CP fittings, sanitaryware, construction chemicals, pipes, and more.",
};

export default function BrandsPage() {
  const data = getHomeData();
  const brands = data.brands?.length ? data.brands : [];

  return (
    <div>
      <PageHero
        eyebrow="Brands"
        title="Brands customers trust—available locally."
        subtitle="Trusted brands we work with. Visit the store for the latest range and pricing."
      />

      <section className="container-page pb-20">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((b) => (
            <div
              key={b.name}
              className="glass flex items-center justify-center rounded-3xl p-6 text-center text-sm font-semibold tracking-tight"
            >
              {b.name}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

