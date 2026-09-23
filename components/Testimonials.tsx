"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Aisha M.",
    location: "Old GRA",
    text: "The team arrived on time and left the entire house feeling fresh. Booking on WhatsApp was easy.",
  },
  {
    name: "Ibrahim K.",
    location: "Maiduguri",
    text: "Our office cleanup was handled carefully and professionally. We now use them for regular service.",
  },
  {
    name: "Fatima A.",
    location: "Bulumkutu",
    text: "The sofa cleaning made a visible difference. The team explained the process and worked neatly.",
  },
  {
    name: "Mustapha B.",
    location: "GRA",
    text: "Reliable waste pickup and clear communication. I appreciate knowing exactly when they are coming.",
  },
  {
    name: "Maryam S.",
    location: "Maiduguri",
    text: "We booked fumigation for our apartment and the service was organised from start to finish.",
  },
  {
    name: "Abba H.",
    location: "Custom Area",
    text: "They cleaned our rugs and dining chairs with real attention to detail. Everything looked renewed.",
  },
  {
    name: "Zainab U.",
    location: "Polo",
    text: "Friendly staff, fair pricing and a very thorough deep clean. I would confidently book again.",
  },
  {
    name: "Sani M.",
    location: "Maiduguri",
    text: "Lumina Green helped us choose the right bin size and set up a practical pickup schedule.",
  },
]

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[number] }) {
  return (
    <article className="w-[300px] shrink-0 rounded-[1.4rem] border border-[#173c2a]/10 bg-white p-5 shadow-[0_14px_40px_rgba(28,55,39,0.06)] sm:w-[340px] sm:p-6">
      <Quote className="size-5 text-[#4d9860]" aria-hidden="true" />
      <p className="mt-4 text-sm leading-6 text-[#46564d]">“{testimonial.text}”</p>
      <div className="mt-5 flex items-center gap-3 border-t border-[#173c2a]/10 pt-4">
        <div className="grid size-9 place-items-center rounded-full bg-[#e7f3e9] text-sm font-bold text-[#17643a]">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-bold text-[#183225]">{testimonial.name}</p>
          <p className="text-xs text-[#778279]">{testimonial.location}</p>
        </div>
      </div>
    </article>
  )
}

export function Testimonials() {
  const firstRow = testimonials.slice(0, 4)
  const secondRow = testimonials.slice(4)

  return (
    <section className="w-full overflow-hidden py-14 sm:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65 }}
        className="mb-9 lg:mb-11"
      >
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#29794a]">
            What customers say
          </p>
          <h2 className="max-w-3xl text-[clamp(2.5rem,5vw,4.8rem)] font-semibold leading-[0.96] tracking-[-0.055em] text-[#102d20]">
            Trusted across Maiduguri.
          </h2>
        </div>
      </motion.div>

      <div className="relative -mx-[4vw] space-y-4 overflow-hidden py-2">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#f3f4f5] to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#f3f4f5] to-transparent sm:w-28" />

        <div className="testimonial-marquee flex w-max gap-4 pl-4 sm:gap-5">
          {[...firstRow, ...firstRow].map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
          ))}
        </div>
        <div className="testimonial-marquee-reverse flex w-max gap-4 pl-4 sm:gap-5">
          {[...secondRow, ...secondRow].map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
