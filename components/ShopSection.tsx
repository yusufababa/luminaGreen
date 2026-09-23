"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function ShopSection() {
  return (
    <section className="w-full py-14 sm:py-16 lg:py-20">
      <div className="grid overflow-hidden rounded-[2rem] border border-[#173c2a]/10 bg-white lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#29794a]">
            Lumina Shop
          </p>
          <h2 className="mt-4 max-w-xl text-[clamp(2.5rem,5vw,4.7rem)] font-semibold leading-[0.96] tracking-[-0.055em] text-[#112b1d]">
            The right tools for a cleaner job.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-[#526158] sm:text-lg">
            Shop practical cleaning supplies, waste bins and safety essentials selected for homes and professional teams.
          </p>
          <Link
            href="/products"
            className="mt-8 inline-flex min-h-12 w-fit items-center rounded-full bg-[#153f2b] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0f3120] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#153f2b] focus-visible:ring-offset-2"
          >
            Visit the shop
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[360px] overflow-hidden sm:min-h-[480px] lg:min-h-[620px]"
        >
          <Image
            src="/lumina-shop-display.png"
            alt="Cleaning, waste-handling and safety products available from Lumina Shop"
            fill
            sizes="(max-width: 1024px) 92vw, 58vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#102d20]/20 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
