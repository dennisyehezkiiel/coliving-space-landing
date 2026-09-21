"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logomark } from "@/components/ui/Logomark";
import { Button } from "@/components/ui/Button";
import { useModal } from "@/context/modal-context";

const links = [
  { href: "#rooms", label: "Rooms" },
  { href: "#amenities", label: "Amenities" },
  { href: "#location", label: "Location" },
  { href: "#pricing", label: "Pricing" },
  { href: "#reviews", label: "Reviews" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { openBooking } = useModal();

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[72px] lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <Logomark className="h-8 w-8 text-terracotta" />
          <span className="text-[17px] font-bold tracking-tight text-charcoal">
            Kanaya Living
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal-soft transition-colors hover:text-charcoal"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button size="md" onClick={() => openBooking()}>
            <p className="text-white">Book a Tour</p>
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-charcoal lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line/70 bg-cream px-4 py-5 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-[15px] font-medium text-charcoal-soft transition-colors hover:bg-charcoal/5 hover:text-charcoal"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button
            className="mt-4 w-full"
            onClick={() => {
              setOpen(false);
              openBooking();
            }}
          >
            Book a Tour
          </Button>
        </div>
      )}
    </header>
  );
}
