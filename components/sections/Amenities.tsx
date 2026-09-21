import Image from "next/image";
import { amenities } from "@/data/amenities";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function Amenities() {
  return (
    <section id="amenities" className="bg-cream-alt py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <h2 className="max-w-lg text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">
            Living here is the amenity.
          </h2>
          <p className="mt-3 max-w-md text-charcoal-soft">
            Everything day-to-day comfort needs, handled, so you can focus on
            everything else.
          </p>
        </SectionReveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {amenities.map((amenity, i) => {
            const Icon = amenity.icon;

            if (amenity.photo) {
              return (
                <SectionReveal key={amenity.title} delay={i * 60}>
                  <div className="relative h-full min-h-[220px] overflow-hidden rounded-3xl">
                    <Image
                      src="https://picsum.photos/seed/kanaya-rooftop/700/700"
                      alt="Residents working and relaxing on the rooftop coworking deck at Kanaya Living"
                      fill
                      sizes="(max-width: 640px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/15 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-5">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-white backdrop-blur-sm">
                        <Icon size={18} strokeWidth={1.75} />
                      </span>
                      <h3 className="mt-3 font-bold text-white">{amenity.title}</h3>
                      <p className="mt-1 text-sm text-white/85">{amenity.description}</p>
                    </div>
                  </div>
                </SectionReveal>
              );
            }

            if (i === 2) {
              return (
                <SectionReveal key={amenity.title} delay={i * 60}>
                  <div className="h-full rounded-3xl bg-gradient-to-br from-terracotta to-gold p-6 text-white transition-transform duration-300 hover:-translate-y-1">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-4 font-bold">{amenity.title}</h3>
                    <p className="mt-1.5 text-sm text-white/85">{amenity.description}</p>
                  </div>
                </SectionReveal>
              );
            }

            const tint = i % 2 === 0 ? "bg-white" : "bg-sage-soft";
            return (
              <SectionReveal key={amenity.title} delay={i * 60}>
                <div
                  className={`h-full rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1 ${tint}`}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-terracotta-soft text-terracotta">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 font-bold text-charcoal">{amenity.title}</h3>
                  <p className="mt-1.5 text-sm text-charcoal-soft">{amenity.description}</p>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
