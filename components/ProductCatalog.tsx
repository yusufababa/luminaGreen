"use client"

import { AnimatePresence, motion } from "framer-motion"
import { MessageCircle, PackageCheck, ShieldCheck, Store, Truck } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const categories = ["All", "Cleaning", "Waste & bins", "Safety"] as const

type Category = (typeof categories)[number]

const products = [
  {
    name: "Cotton Work Gloves",
    price: "₦2,500",
    category: "Safety",
    image: "/products/cotton-work-gloves.png",
    imageAlt: "A pair of white cotton work gloves",
  },
  {
    name: "Blue Spin Mop Set",
    price: "₦18,500",
    category: "Cleaning",
    image: "/products/blue-spin-mop.png",
    imageAlt: "Blue spin mop and bucket set",
  },
  {
    name: "Outdoor Wheelie Bin",
    price: "From ₦38,000",
    category: "Waste & bins",
    image: "/products/wheelie-bins.png",
    imageAlt: "Green, red, yellow and black wheelie bins",
  },
  {
    name: "Red Spin Mop Set",
    price: "₦18,500",
    category: "Cleaning",
    image: "/products/red-spin-mop.png",
    imageAlt: "Red spin mop and bucket set",
  },
  {
    name: "Disposable Latex Gloves",
    price: "₦7,500",
    category: "Safety",
    image: "/products/disposable-gloves.png",
    imageAlt: "Box of white disposable latex gloves",
  },
  {
    name: "Lumina Toilet & Tile Cleaner",
    price: "₦3,500",
    category: "Cleaning",
    image: "/products/lumina-toilet-cleaner.jpeg",
    imageAlt: "Lumina Green toilet and tile cleaner bottles",
  },
  {
    name: "Heavy-Duty Refuse Sacks",
    price: "₦4,000",
    category: "Waste & bins",
    image: "/products/refuse-sacks.png",
    imageAlt: "Three rolls of heavy-duty black refuse sacks",
  },
  {
    name: "Safety Rain Boots",
    price: "₦18,000",
    category: "Safety",
    image: "/products/safety-boots.jpeg",
    imageAlt: "Pair of black safety rain boots",
  },
  {
    name: "Protective Safety Helmet",
    price: "₦6,500",
    category: "Safety",
    image: "/products/safety-helmet.jpeg",
    imageAlt: "Blue protective safety helmet",
  },
] as const

const orderUrl = (productName: string, imageUrl: string) =>
  `https://wa.me/2347079100046?text=${encodeURIComponent(
    `Hello Lumina Green 360, I want to buy the ${productName}. Please confirm availability.\n\nProduct photo: ${imageUrl}`,
  )}`

export function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState<Category>("All")

  const visibleProducts = products.filter(
    (product) => activeCategory === "All" || product.category === activeCategory,
  )

  const openWhatsAppOrder = (productName: string, imagePath: string) => {
    const imageUrl = new URL(imagePath, window.location.origin).toString()
    window.open(orderUrl(productName, imageUrl), "_blank", "noopener,noreferrer")
  }

  return (
    <>
      <section className="pb-20 pt-16 sm:pt-20 lg:pb-28 lg:pt-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#1f7a49]">
            The Lumina shop
          </p>
          <h1 className="font-display text-[clamp(2.8rem,7vw,5.6rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-[#102d20]">
            Useful products,
            <br />
            ready to work.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#526158] sm:text-lg">
            Cleaning, waste-handling and safety essentials for homes and businesses in Maiduguri.
          </p>
        </div>

        <div
          className="mt-9 flex flex-wrap items-center justify-center gap-2.5"
          role="group"
          aria-label="Filter products by category"
        >
          {categories.map((category) => {
            const selected = category === activeCategory
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={selected}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f7a49] focus-visible:ring-offset-2 ${
                  selected
                    ? "border-[#153f2b] bg-[#153f2b] text-white"
                    : "border-[#173c2a]/15 bg-white text-[#405248] hover:border-[#1f7a49]/45 hover:bg-[#edf7ef]"
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        <motion.div layout className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          <AnimatePresence mode="popLayout">
            {visibleProducts.map((product, index) => (
              <motion.article
                layout
                key={product.name}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.98 }}
                transition={{ duration: 0.32, delay: Math.min(index * 0.035, 0.18) }}
                className="group flex min-h-[430px] flex-col overflow-hidden rounded-[1.7rem] border border-[#173c2a]/10 bg-[#f0f2ef] p-3 shadow-[0_18px_55px_rgba(28,55,39,0.06)] sm:min-h-[460px]"
              >
                <div className="relative min-h-0 flex-1 overflow-hidden rounded-[1.25rem] bg-[#fafaf8]">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-contain p-4 transition duration-500 ease-out group-hover:scale-[1.035] sm:p-6"
                    priority={index < 3 && activeCategory === "All"}
                  />
                </div>

                <div className="flex items-end justify-between gap-4 px-2 pb-2 pt-5">
                  <div className="min-w-0">
                    <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#6a766e]">
                      {product.category}
                    </p>
                    <h2 className="font-display text-[1.35rem] font-semibold leading-tight tracking-[-0.03em] text-[#14291e]">
                      {product.name}
                    </h2>
                    <p className="mt-2 text-base font-semibold text-[#237d4a]">{product.price}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => openWhatsAppOrder(product.name, product.image)}
                    aria-label={`Buy ${product.name} on WhatsApp`}
                    className="inline-flex shrink-0 items-center rounded-full bg-[#153f2b] px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0f3120] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f7a49] focus-visible:ring-offset-2"
                  >
                    Buy
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="border-y border-[#173c2a]/10 py-20 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f7a49]">Why shop with us</p>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[0.96] tracking-[-0.055em] text-[#102d20]">
              Supplies you can put to work today.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-[#59675f] sm:text-lg">
              Order practical cleaning and safety products directly from a local team that understands the job.
            </p>

            <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {[
                [Truck, "Maiduguri delivery", "Quick local delivery arranged on WhatsApp."],
                [MessageCircle, "Easy ordering", "Ask questions and confirm your order in one chat."],
                [PackageCheck, "Practical products", "Selected for everyday homes and professional teams."],
                [Store, "Local support", "Buy from the same team that cleans and collects."],
              ].map(([Icon, title, description]) => (
                <div key={title as string} className="flex gap-3.5">
                  <div className="grid size-10 shrink-0 place-items-center rounded-full bg-[#e6f3e9] text-[#17643a]">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[#173126]">{title as string}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#637067]">{description as string}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[500px] overflow-hidden rounded-[2rem] bg-[#e7eee8] sm:min-h-[610px]">
            <Image
              src="/products/lumina-toilet-cleaner.jpeg"
              alt="Lumina Green toilet and tile cleaner"
              fill
              sizes="(max-width: 1024px) 92vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-x-5 bottom-5 rounded-[1.4rem] border border-white/35 bg-[#102d20]/88 p-5 text-white backdrop-blur-md sm:inset-x-7 sm:bottom-7 sm:p-6">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#c7f075]">
                <ShieldCheck className="size-4" aria-hidden="true" />
                Made in Maiduguri
              </div>
              <p className="mt-2 max-w-md font-display text-2xl font-semibold leading-tight">
                Lumina Toilet & Tile Cleaner
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14 lg:py-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#153f2b] px-6 py-14 text-center text-white sm:px-10 sm:py-20 lg:px-20 lg:py-24">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "repeating-radial-gradient(ellipse at 10% 90%, transparent 0 34px, #c7f075 35px 36px, transparent 37px 54px)",
            }}
          />
          <div className="relative mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c7f075]">Need help choosing?</p>
            <h2 className="mt-4 font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.055em]">
              Tell us what the job needs.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/72 sm:text-lg">
              We’ll recommend the right cleaning, waste or safety product for your space.
            </p>
            <a
              href="https://wa.me/2347079100046?text=Hello%20Lumina%20Green%20360%2C%20I%20need%20help%20choosing%20a%20product."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center rounded-full bg-[#c7f075] px-6 py-3.5 font-semibold text-[#123321] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#153f2b]"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
