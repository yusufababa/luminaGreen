"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const highlights = [
  {
    src: "/highlight/team-kitchen-cleaning.jpeg",
    alt: "Lumina Green team deep-cleaning a kitchen",
    label: "Deep cleaning",
    className: "md:col-span-7 md:row-span-2 min-h-[430px] md:min-h-[620px]",
  },
  {
    src: "/highlight/fumigation-specialist.jpeg",
    alt: "Lumina Green fumigation specialist in protective equipment",
    label: "Fumigation",
    className: "md:col-span-5 min-h-[430px] md:min-h-0",
  },
  {
    src: "/highlight/upholstery-cleaning.jpeg",
    alt: "Lumina Green team cleaning upholstery",
    label: "Upholstery care",
    className: "md:col-span-5 min-h-[430px] md:min-h-0",
  },
  {
    src: "/highlight/carpet-cleaning.jpeg",
    alt: "Lumina Green professional cleaning a large carpet",
    label: "Carpet care",
    className: "md:col-span-5 min-h-[430px]",
  },
  {
    src: "/highlight/detail-cleaning.jpeg",
    alt: "Lumina Green team member detail-cleaning a chandelier",
    label: "Detailed care",
    className: "md:col-span-3 min-h-[430px]",
  },
  {
    src: "/highlight/exterior-cleaning.jpeg",
    alt: "Lumina Green team cleaning an exterior staircase",
    label: "Outdoor cleaning",
    className: "md:col-span-4 min-h-[430px]",
  },
]

const values = ["Sustainability", "Integrity", "Reliable service", "Affordability"]

export default function AboutUsView() {
  return (
    <div className="w-full py-14 sm:py-16 lg:py-20">
      <section className="border-b border-[#173c2a]/10 pb-14 sm:pb-16 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#29794a]">
            About Lumina Green 360
          </p>
          <h1 className="max-w-4xl text-[clamp(3rem,7vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-[#102d20]">
            Cleaner spaces. Better habits. A greener city.
          </h1>
        </motion.div>
      </section>

      <section className="grid gap-5 py-14 md:grid-cols-2 sm:py-16 lg:py-20">
        {[
          {
            title: "Our mission",
            text: "To make dependable waste and cleaning services easier to access while helping people handle reusable materials more responsibly.",
            tone: "bg-[#e7f3e9]",
          },
          {
            title: "Our vision",
            text: "A cleaner, healthier Maiduguri where homes, organisations and local teams work together to reduce waste and protect shared spaces.",
            tone: "bg-[#f3f0dc]",
          },
        ].map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
            className={`rounded-[1.75rem] border border-[#173c2a]/10 p-7 sm:p-9 lg:p-11 ${item.tone}`}
          >
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#133124] sm:text-4xl">
              {item.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#526158] sm:text-lg sm:leading-8">
              {item.text}
            </p>
          </motion.article>
        ))}
      </section>

      <section className="border-y border-[#173c2a]/10 py-10">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="flex min-h-24 items-center justify-center rounded-2xl border border-[#173c2a]/10 bg-white px-4 text-center font-display text-lg font-semibold text-[#173126] shadow-[0_12px_35px_rgba(28,55,39,0.04)]"
            >
              {value}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mb-9 lg:mb-11">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#29794a]">
              Our work in action
            </p>
            <h2 className="max-w-3xl text-[clamp(2.5rem,5vw,4.8rem)] font-semibold leading-[0.96] tracking-[-0.055em] text-[#102d20]">
              Real people. Real work. Visible care.
            </h2>
        </div>

        <div className="grid gap-4 md:auto-rows-[300px] md:grid-cols-12">
          {highlights.map((highlight, index) => (
            <motion.figure
              key={highlight.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.65, delay: Math.min(index * 0.06, 0.24) }}
              className={`group relative overflow-hidden rounded-[1.5rem] bg-[#e8ede9] ${highlight.className}`}
            >
              <Image
                src={highlight.src}
                alt={highlight.alt}
                fill
                sizes="(max-width: 768px) 92vw, 60vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c281b]/55 via-transparent to-transparent" />
              <figcaption className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-[#102d20]/75 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                {highlight.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

    </div>
  )
}
