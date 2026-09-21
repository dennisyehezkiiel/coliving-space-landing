import { Plus } from "lucide-react";
import { faqs } from "@/data/faqs";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function FAQAccordion() {
  return (
    <section className="bg-cream-alt py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">
            Questions, answered.
          </h2>
        </SectionReveal>

        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <SectionReveal key={faq.question} delay={i * 50}>
              <details className="group rounded-2xl border border-line bg-white px-5 py-4 open:pb-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-charcoal">
                  {faq.question}
                  <Plus
                    size={18}
                    strokeWidth={2}
                    className="shrink-0 text-terracotta transition-transform duration-300 group-open:rotate-45"
                  />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">
                  {faq.answer}
                </p>
              </details>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
