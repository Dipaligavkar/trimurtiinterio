import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Trimurti Interio website.",
};

export default function PrivacyPage() {
  return (
    <div>
      <PageHero
        eyebrow="Privacy"
        title="Privacy policy"
        subtitle="This site is informational. We do not store form submissions on our servers."
      />
      <section className="container-page pb-20">
        <div className="glass rounded-3xl p-7 text-sm leading-7 text-muted-foreground">
          <p>
            The contact section may show a simple form to help you structure your
            message. It does not send data to this website&apos;s servers. Please
            call or WhatsApp us directly using the numbers on the site.
          </p>
          <p className="mt-4">
            Standard browsing may involve cookies or analytics from your hosting
            provider if enabled. For questions, email{" "}
            <a className="text-brand hover:underline" href="mailto:trimurtiinterio@gmail.com">
              trimurtiinterio@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
