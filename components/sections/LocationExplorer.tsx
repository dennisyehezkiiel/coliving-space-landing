"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Footprints, Car, MapPin } from "lucide-react";
import { landmarkCategories, landmarks, type LandmarkCategory } from "@/data/landmarks";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function LocationExplorer() {
  const [active, setActive] = useState<LandmarkCategory>("Universities");

  const filtered = useMemo(
    () => landmarks.filter((l) => l.category === active),
    [active]
  );

  return (
    <section id="location" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <h2 className="max-w-lg text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">
            Set in the middle of Fatmawati.
          </h2>
          <p className="mt-3 max-w-md text-charcoal-soft">
            Campuses, transit, and everyday errands are all a short walk or a
            quick ride away.
          </p>
        </SectionReveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <SectionReveal delay={80}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl lg:aspect-auto lg:h-full">
              <Image
                src="https://picsum.photos/seed/kanaya-neighborhood/900/900"
                alt="Aerial view of the Fatmawati neighborhood in South Jakarta near Kanaya Living"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-charcoal/10" />
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-terracotta text-white shadow-lg">
                  <MapPin size={20} strokeWidth={2} />
                </span>
                <span className="mt-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-charcoal shadow-sm backdrop-blur-sm">
                  Kanaya Living
                </span>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={140}>
            <div className="flex h-full flex-col rounded-3xl border border-line bg-white p-5 sm:p-6">
              <div className="flex flex-wrap gap-2">
                {landmarkCategories.map(({ key, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => setActive(key)}
                    className={`flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-medium transition-colors cursor-pointer ${
                      active === key
                        ? "border-terracotta bg-terracotta text-white"
                        : "border-line text-charcoal-soft hover:border-charcoal/30"
                    }`}
                  >
                    <Icon size={15} strokeWidth={1.75} />
                    {key}
                  </button>
                ))}
              </div>

              <ul className="mt-5 flex flex-1 flex-col gap-2">
                {filtered.map((landmark) => (
                  <li
                    key={landmark.name}
                    className="flex items-center justify-between gap-3 rounded-2xl bg-cream-alt px-4 py-3"
                  >
                    <span className="text-sm font-medium text-charcoal">
                      {landmark.name}
                    </span>
                    <span className="flex shrink-0 items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-charcoal-soft">
                      {landmark.mode === "walk" ? (
                        <Footprints size={13} strokeWidth={1.75} />
                      ) : (
                        <Car size={13} strokeWidth={1.75} />
                      )}
                      {landmark.distance}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
