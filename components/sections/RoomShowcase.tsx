"use client";

import { useMemo, useState } from "react";
import { rooms, roomTagLabels, type RoomTag } from "@/data/rooms";
import { RoomCard } from "@/components/sections/RoomCard";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { useModal } from "@/context/modal-context";

type FilterKey = "all" | RoomTag;

const filters: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "balcony", label: roomTagLabels.balcony },
  { key: "private-bathroom", label: roomTagLabels["private-bathroom"] },
  { key: "workstation", label: roomTagLabels.workstation },
];

export function RoomShowcase() {
  const [active, setActive] = useState<FilterKey>("all");
  const { openBooking, openTour } = useModal();

  const filtered = useMemo(
    () =>
      active === "all" ? rooms : rooms.filter((room) => room.tags.includes(active)),
    [active]
  );

  return (
    <section id="rooms" className="pt-28 pb-24 sm:pt-32 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-lg text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">
              Rooms built for how you actually live.
            </h2>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActive(filter.key)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    active === filter.key
                      ? "border-terracotta bg-terracotta text-white"
                      : "border-line bg-white text-charcoal-soft hover:border-charcoal/30"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </SectionReveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((room, i) => (
            <SectionReveal
              key={room.id}
              delay={Math.min(i, 3) * 80}
              className={room.featured ? "sm:col-span-2" : ""}
            >
              <RoomCard
                room={room}
                featured={room.featured}
                onBook={() => openBooking(room.name)}
                onTour={() => openTour(room.name)}
              />
            </SectionReveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-charcoal-soft">
            No rooms match that filter right now. Try a different tag.
          </p>
        )}
      </div>
    </section>
  );
}
