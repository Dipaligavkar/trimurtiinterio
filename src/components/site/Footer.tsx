import Link from "next/link";

const business = {
  name: "Trimurti Interio",
  tagline: "The Perfect Experience Center | Build Your Perfect Heaven",
  phone: "8698600990",
  email: "trimurtiinterio@gmail.com",
  address:
    "Shree Ram Chowk, Godown No. 2, Gat No. 124, Bhigwan Road, Jalochi, Baramati, Maharashtra - 413102",
  maps: "https://maps.app.goo.gl/hynYVvbMGGN3N2hw8",
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <div className="font-semibold tracking-tight">{business.name}</div>
            <p className="text-sm text-muted-foreground">{business.tagline}</p>
            <p className="text-sm text-muted-foreground">{business.address}</p>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold">Quick Links</div>
            <div className="grid gap-2 text-sm text-muted-foreground">
              <Link href="/products" className="hover:text-foreground">
                Products / Categories
              </Link>
              <Link href="/brands" className="hover:text-foreground">
                Brands
              </Link>
              <Link href="/gallery" className="hover:text-foreground">
                Gallery
              </Link>
              <Link href="/contact" className="hover:text-foreground">
                Contact / Inquiry
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold">Contact</div>
            <div className="grid gap-2 text-sm text-muted-foreground">
              <a className="hover:text-foreground" href={`tel:${business.phone}`}>
                {business.phone}
              </a>
              <a
                className="hover:text-foreground"
                href={`mailto:${business.email}`}
              >
                {business.email}
              </a>
              <a
                className="hover:text-foreground"
                href={business.maps}
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </div>
          <div className="flex gap-3">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

