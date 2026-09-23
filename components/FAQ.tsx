import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I book a pickup, cleaning or fumigation service?",
    answer:
      "Send us a message on WhatsApp with the service you need, your location and your preferred date. Our team will confirm availability and any details required before the booking.",
  },
  {
    question: "Do you only serve Maiduguri?",
    answer:
      "Maiduguri is our primary service area. If your location is outside the city, contact us on WhatsApp and we will confirm whether the team can cover it.",
  },
  {
    question: "Are the prices on the website final?",
    answer:
      "Fixed rates apply to the listed apartment sizes and standard waste bins. Office cleaning, upholstery work and unusual or larger jobs may require a quick inspection before we confirm the final amount.",
  },
  {
    question: "What should I do before fumigation?",
    answer:
      "We will send preparation and re-entry instructions when your booking is confirmed. This may include protecting food, moving pets and giving the treatment enough time to work safely.",
  },
  {
    question: "Can I arrange regular waste pickup or cleaning?",
    answer:
      "Yes. Weekly, monthly and recurring service schedules can be arranged for homes, offices and businesses. Tell us how often you need the service and we will recommend a suitable plan.",
  },
  {
    question: "Can I order cleaning products directly?",
    answer:
      "Yes. Visit the Lumina Shop, select a product and tap Buy. WhatsApp will open with the product already identified so you can confirm availability and delivery.",
  },
]

export function FAQSection() {
  return (
    <section className="w-full border-t border-[#173c2a]/10 py-14 sm:py-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#29794a]">
            Frequently asked
          </p>
          <h2 className="max-w-xl text-[clamp(2.5rem,5vw,4.8rem)] font-semibold leading-[0.96] tracking-[-0.055em] text-[#102d20]">
            Clear answers before you book.
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-[#637067]">
            Still unsure? Send us a message and we’ll help you choose the right service.
          </p>
        </div>

        <Accordion type="single" collapsible className="border-t border-[#173c2a]/12">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`item-${index}`}
              className="border-b border-[#173c2a]/12 px-0"
            >
              <AccordionTrigger className="py-6 text-left font-display text-lg font-semibold leading-6 text-[#173126] hover:no-underline sm:text-xl">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="max-w-2xl pb-6 pr-8 text-base leading-7 text-[#637067]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
