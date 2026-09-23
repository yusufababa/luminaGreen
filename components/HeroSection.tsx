"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

const whatsappUrl =
  "https://wa.me/2347079100046?text=Hello%20Lumina%20Green%20360%2C%20I%20have%20waste%20I%20would%20like%20to%20sell%20or%20donate."

export function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="w-full py-5 sm:py-8">
      <div className="overflow-hidden rounded-[1.5rem] border border-[#173c2a]/10 bg-white shadow-[0_24px_80px_rgba(31,78,51,0.10)] lg:rounded-[2rem]">
        <div className="grid min-w-0 lg:min-h-[560px] lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-w-0 flex-col justify-center px-5 py-10 sm:px-9 sm:py-12 lg:px-12 xl:px-16"
          >
            <h1 className="max-w-[620px] text-[clamp(2rem,9.2vw,4rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-[#112b1d]">
              <span className="block whitespace-nowrap">Sell it.</span>
              <span className="block whitespace-nowrap">Donate it.</span>
              <span className="block whitespace-nowrap text-[#257447]">We&apos;ll pick it up.</span>
            </h1>

            <p className="mt-5 max-w-[560px] text-[0.98rem] leading-7 text-[#52675a] sm:text-[1.06rem]">
              Sell recyclable waste, donate what you no longer need, or book
              affordable pickup and cleaning anywhere in Maiduguri.
            </p>

            <div className="mt-7 flex w-full flex-col gap-3 min-[480px]:flex-row">
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full items-center justify-center whitespace-nowrap rounded-full bg-[#173f2a] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(23,63,42,0.2)] transition hover:-translate-y-0.5 hover:bg-[#0e301d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173f2a] focus-visible:ring-offset-2 min-[480px]:w-auto"
              >
                Sell or donate
              </Link>
              <button
                type="button"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex min-h-11 w-full items-center justify-center whitespace-nowrap rounded-full border border-[#173f2a]/20 bg-white/65 px-5 py-3 text-sm font-semibold text-[#173f2a] transition hover:border-[#173f2a]/40 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173f2a] min-[480px]:w-auto"
              >
                View services
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.025 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.025 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[320px] min-w-0 overflow-hidden sm:min-h-[400px] lg:min-h-0"
          >
            <Image
              src="/highlight/upholstery-cleaning-enhanced.png"
              alt="Lumina Green 360 team professionally cleaning upholstery"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-[center_52%] transition duration-700 hover:scale-[1.02]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
