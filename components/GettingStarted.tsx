"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const steps = [
  {
    image: "/calen.png",
    imageAlt: "Calendar illustration representing a scheduled pickup or cleanup",
    title: "Book a Pickup or Cleanup",
    description: "Choose your service, set your time, and confirm your booking in minutes.",
    cardClass: "lg:-rotate-[0.7deg]",
  },
  {
    image: "/van2.png",
    imageAlt: "Green waste collection truck arriving for service",
    title: "Our Team Shows Up",
    description: "Our professional team comes to your location right on time.",
    cardClass: "lg:translate-y-4",
  },
  {
    image: "/dustbin.png",
    imageAlt: "Recycling bin illustration representing cleaning and recycling",
    title: "We Clean & Recycle",
    description: "We clean and sort the waste, collecting plastic waste for recycling.",
    cardClass: "lg:rotate-[0.7deg]",
  },
] as const

export function GettingStarted() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="w-full py-14 sm:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="mb-9 lg:mb-11"
      >
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#29794a]">
          How it works
        </p>
        <h2 className="max-w-4xl text-[clamp(2.4rem,6vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#112b1d]">
          Simple from booking to a cleaner space.
        </h2>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3 lg:gap-5 lg:pb-4">
        {steps.map((step, index) => (
          <motion.article
            key={step.title}
            initial={{ opacity: 0, y: 42 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 42 }}
            transition={{
              duration: 0.72,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -6, rotate: 0 }}
            className={`flex min-h-[470px] flex-col overflow-hidden rounded-[1.65rem] border border-[#173c2a]/10 bg-white p-6 shadow-[0_16px_45px_rgba(28,55,39,0.05)] transition-transform sm:p-7 ${step.cardClass}`}
          >
            <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[#173126]">
              {step.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-[#637067]">
              {step.description}
            </p>

            <div className="relative mt-auto aspect-square w-full overflow-hidden pt-6">
              <Image
                src={step.image}
                alt={step.imageAlt}
                fill
                sizes="(max-width: 768px) 85vw, 31vw"
                className="object-contain object-bottom"
              />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
