import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <h2 className="max-w-lg text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">
            What it&rsquo;s actually like to live here.
          </h2>
        </SectionReveal>
      </div>

      <SectionReveal delay={100}>
        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:max-w-[76rem] mx-auto">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex w-[300px] shrink-0 snap-start flex-col justify-between rounded-3xl border border-line bg-white p-6 sm:w-[340px]"
            >
              <div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      strokeWidth={1.5}
                      className={
                        i < t.rating
                          ? "fill-gold text-gold"
                          : "text-charcoal/15"
                      }
                    />
                  ))}
                </div>
                <blockquote className="mt-3 text-[15px] leading-relaxed text-charcoal">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>
              <figcaption className="mt-5 flex items-center gap-3">
                <Image
                  src={t.avatar}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-semibold text-charcoal">
                    {t.name}
                  </div>
                  <div className="text-xs text-charcoal-soft">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
