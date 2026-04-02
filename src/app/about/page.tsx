import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Trimurti Interio is a premium experience center in Baramati for CP fittings, sanitaryware, construction chemicals, and luxury sinks.",
};

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About"
        title="A premium experience center for modern spaces."
        subtitle="Trimurti Interio helps homeowners, contractors, and architects choose the right products with genuine brands, practical guidance, and local service."
      />

      <section className="container-page pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="glass rounded-3xl p-7 lg:col-span-2">
            <h2 className="text-xl font-semibold tracking-tight">
              What we offer
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              From premium faucets and sanitaryware to waterproofing, adhesives,
              and high-performance construction chemicals — we curate quality
              products that look refined and last longer.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "CP fittings & accessories",
                "Sanitaryware & fittings",
                "Construction chemicals",
                "Kitchen steel sinks",
                "Quartz sinks",
                "On-site requirement support",
              ].map((x) => (
                <div
                  key={x}
                  className="rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm font-medium"
                >
                  {x}
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-7">
            <div className="text-sm font-semibold text-brand">Contact</div>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <div>
                <div className="font-semibold text-foreground">Rohit Patel</div>
                <div>Owner</div>
              </div>
              <div>
                <div className="font-semibold text-foreground">Phone</div>
                <a className="hover:underline" href="tel:8698600990">
                  8698600990
                </a>
              </div>
              <div>
                <div className="font-semibold text-foreground">Email</div>
                <a className="hover:underline" href="mailto:trimurtiinterio@gmail.com">
                  trimurtiinterio@gmail.com
                </a>
              </div>
            </div>
            <div className="mt-6">
              <Button href="/contact#inquiry" className="w-full">
                Send Inquiry
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              t: "Premium guidance",
              d: "We help you select products that match budget, style, and durability.",
            },
            {
              t: "Genuine brands",
              d: "Stock from trusted manufacturers with reliable after-sales support.",
            },
            {
              t: "Local convenience",
              d: "Fast responses and easy pickup/coordination in Baramati and nearby areas.",
            },
          ].map((x) => (
            <div key={x.t} className="glass rounded-3xl p-7">
              <div className="text-base font-semibold">{x.t}</div>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

