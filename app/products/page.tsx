import type { Metadata } from "next"

import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { ProductCatalog } from "@/components/ProductCatalog"

export const metadata: Metadata = {
  title: "Products | Lumina Green 360",
  description:
    "Shop cleaning supplies, waste bins and safety products from Lumina Green 360 in Maiduguri.",
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#f3f4f5]">
      <Header />
      <main className="mx-auto w-[92%] max-w-[1360px]">
        <ProductCatalog />
      </main>
      <Footer />
    </div>
  )
}
