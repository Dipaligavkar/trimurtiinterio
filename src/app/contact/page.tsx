import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact & Inquiry",
  description:
    "Contact Trimurti Interio in Baramati for CP fittings, sanitaryware, construction chemicals, and kitchen sinks. Submit an inquiry or get directions on Google Maps.",
};

const mapsLink = "https://maps.app.goo.gl/hynYVvbMGGN3N2hw8";
const address =
  "Shree Ram Chowk, Godown No. 2, Gat No. 124, Bhigwan Road, Jalochi, Baramati, Maharashtra - 413102";

export default function ContactPage() {
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    address,
  )}&output=embed`;

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Visit the experience center or send an inquiry."
        subtitle="We respond quickly with pricing, product options, and availability. You can also open directions in Google Maps."
      />

      <section className="container-page pb-20">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <div id="inquiry" className="scroll-mt-24">
            <InquiryForm />
          </div>

          <div className="space-y-6">
            <div className="glass rounded-3xl p-7">
              <div className="text-sm font-semibold text-brand">Store</div>
              <div className="mt-3 grid gap-3 text-sm text-muted-foreground">
                <div>
                  <div className="text-xs font-semibold">Address</div>
                  <div className="mt-1">{address}</div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs font-semibold">Phone</div>
                    <a className="mt-1 block hover:underline" href="tel:8698600990">
                      8698600990
                    </a>
                  </div>
                  <div>
                    <div className="text-xs font-semibold">Email</div>
                    <a
                      className="mt-1 block hover:underline"
                      href="mailto:trimurtiinterio@gmail.com"
                    >
                      trimurtiinterio@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href={mapsLink} target="_blank" rel="noreferrer">
                  Open Google Maps
                </Button>
                <Button variant="ghost" href="tel:8698600990">
                  Call Now
                </Button>
              </div>
            </div>

            <div className="glass overflow-hidden rounded-3xl">
              <div className="flex items-center justify-between gap-4 p-5">
                <div>
                  <div className="text-sm font-semibold">Map</div>
                  <div className="text-xs text-muted-foreground">
                    Tap to open directions
                  </div>
                </div>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-brand hover:underline"
                >
                  Open
                </a>
              </div>
              <div className="aspect-[16/10] w-full border-t border-border">
                <iframe
                  title="Trimurti Interio Map"
                  src={embedSrc}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

