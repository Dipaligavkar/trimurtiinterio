import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { BrandCarousel } from "@/components/home/BrandCarousel";
import { getHomeData } from "@/lib/content/homeData";

export default function Home() {
  const data = getHomeData();
  const brands = data.brands?.length ? data.brands.map((b) => b.name) : [];
  const categories = data.categories?.length ? data.categories : [];

  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 -z-10 h-[680px] bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.16),transparent_55%)]" />
      <div className="absolute inset-0 -z-20 grid-mask opacity-70 dark:opacity-40" />

      <section className="container-page pt-16 pb-14 sm:pt-20 sm:pb-18">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-brand" />
              Premium building material supplier in Baramati
            </div>

            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              <span className="font-[var(--font-geist-mono)] tracking-tight">
                {data.settings.heroTitle}
              </span>
              <span className="block text-xl font-medium text-muted-foreground sm:text-2xl">
                {data.settings.heroTagline}
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted-foreground">
              Explore premium CP fittings, sanitaryware, construction chemicals,
              kitchen steel sinks, and luxury quartz sinks — curated brands,
              transparent pricing, and quick local service.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact#inquiry" size="lg">
                Send Inquiry
              </Button>
              <Button href="/products" variant="ghost" size="lg">
                View Categories
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg">
              {[
                { k: "10+", v: "Top brands" },
                { k: "Fast", v: "Local service" },
                { k: "Premium", v: "Experience center" },
              ].map((s) => (
                <div key={s.v} className="glass rounded-2xl p-4">
                  <div className="text-lg font-semibold">{s.k}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative">
            <div className="glass relative overflow-hidden rounded-[28px] p-6">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/25 blur-3xl" />
              <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-foreground/10 blur-3xl" />

              <div className="relative rounded-3xl border border-border bg-background/40 p-6">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="text-sm font-semibold">Today’s Offers</div>
                    <div className="mt-2 text-sm text-muted-foreground">
                      Seasonal deals on sanitaryware and waterproofing solutions.
                    </div>
                  </div>
                  <div className="rounded-full bg-brand px-3 py-1 text-xs font-semibold text-black">
                    Limited
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  {[
                    "Waterproofing & chemicals",
                    "Kitchen sink bundles",
                    "Premium faucet upgrades",
                  ].map((x) => (
                    <div
                      key={x}
                      className="flex items-center justify-between rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm"
                    >
                      <div className="font-medium">{x}</div>
                      <Link
                        className="text-sm font-semibold text-brand hover:underline"
                        href="/contact#inquiry"
                      >
                        Ask Price
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-border bg-background/50 p-6">
                <div className="text-sm font-semibold">Festival Banner</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Seasonal offers and festival greetings — ask us in store or on
                  WhatsApp for the latest creative.
                </p>
                <div className="mt-4 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-foreground/5">
                  {data.festival?.url ? (
                    data.festival.type === "video" ? (
                      <video
                        src={data.festival.url}
                        controls
                        className="h-full w-full object-cover"
                        preload="metadata"
                      />
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={data.festival.url}
                        alt={data.festival.title || "Festival banner"}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    )
                  ) : null}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-14">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-sm font-semibold text-brand">Categories</div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                Everything you need to build & finish beautifully
              </h2>
            </div>
            <Button href="/products" variant="ghost" className="hidden sm:inline-flex">
              Explore all
            </Button>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Reveal key={c.name}>
              <div className="glass group rounded-3xl p-6 transition hover:-translate-y-0.5 hover:bg-foreground/3">
                <div className="flex items-center justify-between">
                  <div className="text-base font-semibold">{c.name}</div>
                  <div className="h-9 w-9 rounded-full border border-border bg-background/50 transition group-hover:bg-brand group-hover:border-transparent" />
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {c.description}
                </p>
                <div className="mt-5">
                  <Link
                    href="/contact#inquiry"
                    className="text-sm font-semibold text-brand hover:underline"
                  >
                    Request quotation
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page py-14">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-sm font-semibold text-brand">Brands</div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                Trusted brands. Authentic products.
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                We stock the brands customers ask for — and help you choose the right
                fit for budget, durability, and finish.
              </p>
            </div>
            <Button href="/brands" variant="ghost" className="hidden sm:inline-flex">
              View all brands
            </Button>
          </div>
        </Reveal>

        <div className="mt-8">
          <BrandCarousel brands={brands} />
        </div>
      </section>

      <section className="container-page pb-20 pt-6">
        <Reveal>
          <div className="glass rounded-[32px] p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <div className="text-sm font-semibold text-brand">
                  Need a quick quote?
                </div>
                <h3 className="mt-2 text-3xl font-semibold tracking-tight">
                  Send your requirement and get a call back.
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Share your category and a short message. We’ll respond with pricing,
                  options, and availability.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button href="/contact#inquiry" size="lg">
                  Submit Inquiry
                </Button>
                <Button href="/contact" variant="ghost" size="lg">
                  Visit Store & Map
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
