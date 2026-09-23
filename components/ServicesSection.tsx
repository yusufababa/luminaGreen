"use client"

import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    title: "Waste pickup",
    className: "bg-[#e7f3e9]",
    items: [
      { name: "240L bin", price: "₦2,000" },
      { name: "360L bin", price: "₦3,000" },
      { name: "600L bin", price: "₦4,000" },
      { name: "1,100L bin", price: "₦5,000" },
    ],
  },
  {
    title: "Deep cleaning",
    className: "bg-[#f3f0dc]",
    items: [
      { name: "Self-contained", price: "₦30,000" },
      { name: "1-bedroom apartment", price: "₦40,000" },
      { name: "2-bedroom apartment", price: "₦55,000" },
      { name: "3-bedroom apartment", price: "₦65,000" },
      { name: "4-bedroom apartment", price: "₦75,000" },
      { name: "5-bedroom apartment", price: "₦85,000" },
      { name: "6-bedroom apartment", price: "₦98,000" },
    ],
  },
  {
    title: "Office cleaning",
    className: "bg-[#e8f1f4]",
    items: [
      { name: "Offices and workspaces", price: "Inspection" },
      { name: "Hotels and restaurants", price: "Inspection" },
      { name: "Retail and customer spaces", price: "Inspection" },
      { name: "One-off deep cleaning", price: "Inspection" },
      { name: "Recurring maintenance", price: "Inspection" },
      { name: "After-hours cleaning", price: "Inspection" },
    ],
  },
  {
    title: "Carpet, rug & upholstery",
    className: "bg-[#f5e9df]",
    items: [
      { name: "Wall-to-wall carpet", price: "₦25,000" },
      { name: "Small, medium, large or XL rugs", price: "Inspection" },
      { name: "Dining chairs and sets", price: "Inspection" },
      { name: "Sofas and full sets", price: "Inspection" },
      { name: "Mattresses", price: "Inspection" },
    ],
  },
  {
    title: "Fumigation",
    className: "bg-[#eeeaf3]",
    items: [
      { name: "Self-contained", price: "₦25,000" },
      { name: "1-bedroom apartment", price: "₦35,000" },
      { name: "2-bedroom apartment", price: "₦45,000" },
      { name: "3-bedroom apartment", price: "₦55,000" },
      { name: "4-bedroom apartment", price: "₦65,000" },
      { name: "5-bedroom apartment", price: "₦75,000" },
    ],
  },
  {
    title: "Training & consultancy",
    className: "bg-[#edf4df]",
    items: [
      { name: "Cleaning team training", price: "Custom quote" },
      { name: "Waste-handling guidance", price: "Custom quote" },
      { name: "Facility-care planning", price: "Custom quote" },
    ],
  },
] as const

function bookingUrl(service: string) {
  const message = `Hello Lumina Green 360, I would like to book or get a quote for ${service}.`
  return `https://wa.me/2347079100046?text=${encodeURIComponent(message)}`
}

export function ServicesSection() {
  const ref = useRef(null)
  const rowRefs = useRef<Array<HTMLDivElement | null>>([])
  const [rowTops, setRowTops] = useState(() =>
    Array.from({ length: Math.ceil(services.length / 2) }, (_, index) => 88 + index * 18),
  )
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  useEffect(() => {
    const updateRowTops = () => {
      const nextTops = rowRefs.current.map((row, index) => {
        const preferredTop = 88 + index * 18
        if (!row) return preferredTop

        return Math.min(preferredTop, window.innerHeight - row.offsetHeight - 28)
      })

      setRowTops((currentTops) =>
        currentTops.length === nextTops.length &&
        currentTops.every((top, index) => top === nextTops[index])
          ? currentTops
          : nextTops,
      )
    }

    updateRowTops()
    const resizeObserver = new ResizeObserver(updateRowTops)
    rowRefs.current.forEach((row) => row && resizeObserver.observe(row))
    window.addEventListener("resize", updateRowTops)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener("resize", updateRowTops)
    }
  }, [])

  return (
    <section ref={ref} className="w-full py-14 sm:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10 lg:mb-12"
      >
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#29794a]">
          Services & pricing
        </p>
        <h2 className="max-w-4xl text-[clamp(2.4rem,6vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#112b1d]">
          One trusted team for a cleaner space.
        </h2>
      </motion.div>

      <div className="relative flex flex-col gap-4 sm:gap-5 md:gap-[9vh] md:pb-10">
        {Array.from({ length: Math.ceil(services.length / 2) }, (_, rowIndex) => (
          <motion.div
            key={rowIndex}
            ref={(row) => {
              rowRefs.current[rowIndex] = row
            }}
            initial={{ opacity: 0, y: 84, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.12 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            style={{ top: rowTops[rowIndex] ?? 88 + rowIndex * 18, zIndex: rowIndex + 1 }}
            className="grid origin-top transform-gpu gap-4 will-change-transform sm:gap-5 md:sticky md:grid-cols-2"
          >
            {services.slice(rowIndex * 2, rowIndex * 2 + 2).map((service, cardIndex) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, x: cardIndex === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.16 }}
                transition={{
                  duration: 0.72,
                  delay: cardIndex * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative min-w-0 overflow-hidden rounded-[1.75rem] border border-[#153d29]/[0.08] p-6 text-[#153d29] shadow-[0_16px_45px_rgba(21,61,41,0.06)] sm:p-8 ${service.className}`}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.35]"
                  style={{
                    backgroundImage:
                      "repeating-radial-gradient(ellipse at -18% 110%, transparent 0, transparent 31px, rgba(21, 61, 41, 0.12) 32px, transparent 33px)",
                    WebkitMaskImage:
                      "linear-gradient(90deg, #000 0%, rgba(0,0,0,0.72) 50%, transparent 92%)",
                    maskImage:
                      "linear-gradient(90deg, #000 0%, rgba(0,0,0,0.72) 50%, transparent 92%)",
                  }}
                />

                <div className="relative">
                  <h3 className="text-[clamp(1.75rem,3.2vw,2.65rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
                    {service.title}
                  </h3>
                  <ul className="mt-7 border-y border-[#153d29]/10">
                    {service.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex min-w-0 items-center justify-between gap-5 border-b border-[#153d29]/10 py-3.5 last:border-b-0 sm:px-1"
                      >
                        <span className="min-w-0 text-sm leading-5 text-[#294636] sm:text-[0.95rem]">
                          {item.name}
                        </span>
                        <span className="shrink-0 text-sm font-bold text-[#173f2a]">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </motion.div>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-4 rounded-[1.5rem] border border-[#153d29]/10 bg-white px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <div>
          <p className="font-semibold text-[#153d29]">Need something tailored?</p>
          <p className="mt-1 text-sm text-[#65746b]">
            For offices, larger jobs or special requests, ask for a custom plan.
          </p>
        </div>
        <Link
          href={bookingUrl("a custom service plan")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full border border-[#153d29]/15 px-5 py-3 text-sm font-bold text-[#153d29] transition hover:bg-[#edf5ee] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#153d29]"
        >
          Request a custom quote
        </Link>
      </div>
    </section>
  )
}
