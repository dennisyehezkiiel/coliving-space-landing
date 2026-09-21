import { MapPin, MessageCircle, Phone } from "lucide-react";
import { Logomark } from "@/components/ui/Logomark";

function SocialIcon({ slug, className = "" }: { slug: string; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.simpleicons.org/${slug}/6B6153`}
      alt=""
      width={16}
      height={16}
      className={className}
    />
  );
}

const quickLinks = [
  { href: "#rooms", label: "Rooms" },
  { href: "#amenities", label: "Amenities" },
  { href: "#location", label: "Location" },
  { href: "#pricing", label: "Pricing" },
  { href: "#reviews", label: "Reviews" },
];

const WHATSAPP_NUMBER = "6281234567890";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Kanaya Living, I'd like to ask about room availability."
);

export function Footer() {
  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.7fr_0.7fr_1fr] lg:gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <Logomark className="h-8 w-8 text-terracotta" />
              <span className="text-[17px] font-bold text-charcoal">Kanaya Living</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-charcoal-soft">
              Premium co-living studios and suites in Fatmawati, South
              Jakarta, built for students and young professionals.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://instagram.com"
                aria-label="Kanaya Living on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-charcoal/5 transition-colors hover:bg-terracotta-soft"
              >
                <SocialIcon slug="instagram" />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Kanaya Living on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-charcoal/5 transition-colors hover:bg-terracotta-soft"
              >
                <SocialIcon slug="facebook" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                aria-label="Chat with Kanaya Living on WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-charcoal/5 transition-colors hover:bg-terracotta-soft"
              >
                <SocialIcon slug="whatsapp" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-charcoal">Explore</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-charcoal-soft transition-colors hover:text-charcoal"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-charcoal">Contact</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-charcoal-soft">
              <li className="flex items-start gap-2">
                <MapPin size={16} strokeWidth={1.75} className="mt-0.5 shrink-0" />
                Jl. RS Fatmawati Raya, Jakarta Selatan
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} strokeWidth={1.75} className="mt-0.5 shrink-0" />
                +62 812-3456-7890
              </li>
              <li className="pt-1">
                <span className="font-medium text-charcoal">Front desk hours</span>
                <br />
                Daily, 08:00 - 20:00 WIB
                <br />
                Security on-site 24/7
              </li>
            </ul>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              className="mt-4 inline-flex h-10 items-center gap-2 rounded-full bg-terracotta px-4 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark"
            >
              <MessageCircle size={15} strokeWidth={2} />
              Chat on WhatsApp
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-charcoal">Find us</h3>
            <div className="mt-4 overflow-hidden rounded-2xl border border-line">
              <iframe
                title="Kanaya Living location map"
                src="https://www.google.com/maps?q=Fatmawati,Jakarta+Selatan&output=embed"
                className="h-48 w-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-xs text-charcoal-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kanaya Living. All rights reserved.</p>
          <p>Fatmawati, South Jakarta, Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
