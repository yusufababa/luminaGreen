"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface HeaderProps {
  onSectionSelect?: (section: string) => void;
  onPageSelect?: (page: string) => void;
}

const navItems = [
  { label: "Home", type: "section", target: "home" },
  { label: "About", type: "page", target: "about" },
  { label: "Services", type: "section", target: "services" },
  { label: "Products", type: "link", target: "/products" },
  { label: "Contact", type: "page", target: "contact" },
] as const

const whatsappUrl =
  "https://wa.me/2347079100046?text=Hello%20Lumina%20Green%20360%2C%20I%20want%20to%20sell%20or%20donate%20waste."

export function Header({ onSectionSelect, onPageSelect }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavigation = (type: "section" | "page", target: string) => {
    if (type === "section") {
      if (onSectionSelect) {
        onSectionSelect(target)
      } else {
        window.location.assign(target === "home" ? "/" : `/#${target}`)
      }
    } else {
      if (onPageSelect) {
        onPageSelect(target)
      } else {
        window.location.assign(`/?view=${target}`)
      }
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#173c2a]/10 bg-[#f3f4f5]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[70px] w-[92%] max-w-[1360px] items-center justify-between gap-4">
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17643a] focus-visible:ring-offset-4"
          aria-label="Go to home"
        >
          <Image
            src="/logo.png"
            alt="Lumina Green 360"
            width={408}
            height={270}
            priority
            className="h-auto w-[92px] object-contain sm:w-[100px]"
          />
        </Link>

        <nav className="hidden items-center gap-0.5 rounded-full border border-[#173c2a]/10 bg-white/80 p-1.5 shadow-[0_8px_30px_rgba(25,73,47,0.06)] lg:flex">
          {navItems.map((item) =>
            item.type === "link" ? (
              <Link
                key={item.label}
                href={item.target}
                className="rounded-full px-3.5 py-2 text-[0.88rem] font-medium text-[#405248] transition hover:bg-[#e8f5ea] hover:text-[#145c36] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17643a] xl:px-4"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavigation(item.type, item.target)}
                className="rounded-full px-3.5 py-2 text-[0.88rem] font-medium text-[#405248] transition hover:bg-[#e8f5ea] hover:text-[#145c36] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17643a] xl:px-4"
              >
                {item.label}
              </button>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2.5">
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden whitespace-nowrap rounded-full bg-[#163e2a] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(22,62,42,0.18)] transition hover:-translate-y-0.5 hover:bg-[#0f3120] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17643a] focus-visible:ring-offset-2 md:inline-flex"
          >
            Sell or donate
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="grid size-10 place-items-center rounded-full border border-[#173c2a]/15 bg-white text-[#173c2a] lg:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-full border-b border-[#173c2a]/10 bg-[#f3f4f5] p-4 shadow-xl lg:hidden"
          >
            <nav className="mx-auto flex max-w-lg flex-col rounded-3xl border border-[#173c2a]/10 bg-white p-3">
              {navItems.map((item) =>
                item.type === "link" ? (
                  <Link
                    key={item.label}
                    href={item.target}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-2xl px-4 py-3.5 text-left text-base font-medium text-[#263b30] hover:bg-[#eaf5eb]"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleNavigation(item.type, item.target)}
                    className="rounded-2xl px-4 py-3.5 text-left text-base font-medium text-[#263b30] hover:bg-[#eaf5eb]"
                  >
                    {item.label}
                  </button>
                ),
              )}
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-[#163e2a] px-5 py-3.5 font-semibold text-white"
              >
                Sell or donate
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
