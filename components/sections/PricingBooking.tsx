"use client";

import { Check, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { useModal } from "@/context/modal-context";

const included = [
  "Weekly room cleaning & linen change",
  "High-speed fiber Wi-Fi",
  "Water for shower, sink, and laundry",
  "Full furnishings: bed, wardrobe, desk & chair",
];

export function PricingBooking() {
  const { openBooking } = useModal();

  return (
    <section id="pricing" className="bg-charcoal py-24 text-cream sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <SectionReveal>
            <h2 className="max-w-md text-3xl font-extrabold tracking-tight sm:text-4xl">
              One rent, almost nothing else to think about.
            </h2>
            <p className="mt-3 max-w-md text-cream/70">
              A single monthly payment covers nearly everything. Electricity
              is the only cost that scales with how you actually live.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {included.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 rounded-2xl bg-white/5 p-4"
                >
                  <Check size={18} strokeWidth={2} className="mt-0.5 shrink-0 text-gold" />
                  <span className="text-sm text-cream/90">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-3 flex items-start gap-2.5 rounded-2xl border border-dashed border-cream/25 p-4">
              <Zap size={18} strokeWidth={2} className="mt-0.5 shrink-0 text-cream/60" />
              <span className="text-sm text-cream/70">
                Electricity is billed separately through a prepaid token
                meter in every room, so you only pay for what you use.
              </span>
            </div>
          </SectionReveal>

          <SectionReveal delay={100}>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-gradient-to-br from-terracotta to-gold p-7 text-white sm:p-8">
              <div>
                <p className="text-sm font-medium text-white/80">Starting from</p>
                <p className="mt-1 text-4xl font-extrabold tracking-tight">
                  Rp 3.150.000
                  <span className="text-base font-medium text-white/80">/month</span>
                </p>
                <p className="mt-4 text-sm text-white/85">
                  Choose monthly flexibility or lock in a yearly plan for a
                  lower effective rate. A refundable deposit of one
                  month&rsquo;s rent applies to every booking.
                </p>
              </div>

              <Button
                variant="onDark"
                size="lg"
                className="mt-8 w-full"
                onClick={() => openBooking()}
              >
                Book a Tour
                <ArrowRight size={16} strokeWidth={2} />
              </Button>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
