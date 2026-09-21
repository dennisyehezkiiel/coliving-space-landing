"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SearchWidget } from "@/components/sections/SearchWidget";
import { useModal } from "@/context/modal-context";

export function Hero() {
  const { openTour } = useModal();

  return (
    <section id="top" className="relative pt-10 lg:pt-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            Elevate your daily living, one room at a time.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-charcoal-soft sm:text-lg">
            Modern co-living studios and suites in South Jakarta, fully
            furnished and ready to move in.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              onClick={() =>
                document.getElementById("rooms")?.scrollIntoView({ block: "start" })
              }
            >
              <p className="text-white">Explore Rooms</p>
            </Button>
            <Button variant="secondary" size="lg" onClick={() => openTour()}>
              Schedule Virtual Tour
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="https://picsum.photos/seed/kanaya-hero-room/1000/1250"
              alt="Sunlit co-living studio at Kanaya Living with wooden furnishings and a reading nook"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
              preload
            />
          </div>

          <div className="absolute left-6 top-6 flex items-center gap-2 rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-lg shadow-charcoal/10 backdrop-blur-md sm:left-6">
            <div className="flex -space-x-2">
              {[14, 25, 8].map((n) => (
                <Image
                  key={n}
                  src={`https://i.pravatar.cc/64?img=${n}`}
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div className="text-xs">
              <div className="flex items-center gap-1 font-semibold text-charcoal">
                4.9 <Star size={12} className="fill-gold text-gold" />
              </div>
              <div className="text-charcoal-soft">from 120+ residents</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 lg:mt-14">
        <SearchWidget />
      </div>
    </section>
  );
}
