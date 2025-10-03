"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDownIcon } from "lucide-react"

type Product = {
  name: string
  description: string
  image: string
}

const PRODUCTS: Product[] = [
  {
    name: "FRAUDTECTOR",
    description: "Sistem manajemen fraud untuk mendeteksi dan mencegah transaksi mencurigakan secara real-time.",
    image: "/images/produk-fraudtector.jpeg",
  },
  {
    name: "ARQA",
    description: "Simulator testing tools untuk otomasi pengujian aplikasi dengan berbagai skenario.",
    image: "/images/produk-arqa.png",
  },
  {
    name: "CRM Track",
    description: "Customer Relationship Management untuk mengelola interaksi pelanggan dan meningkatkan retensi.",
    image: "/images/produk-crmtrack.png",
  },
  {
    name: "Learning Management System",
    description: "Platform pembelajaran online lengkap dengan manajemen kursus, tugas, dan evaluasi.",
    image: "/images/produk-lms.png",
  },
  {
    name: "Hexa Suite",
    description: "Human Resource System untuk payroll, absensi, rekrutmen, dan manajemen karyawan.",
    image: "/images/produk-hexa-suite.png",
  },
]

export function ProductDropdown() {
  const [openProduct, setOpenProduct] = useState<string | null>(null)

  const toggleProduct = (productName: string) => {
    setOpenProduct(openProduct === productName ? null : productName)
  }

  return (
    <div className="space-y-4">
      {PRODUCTS.map((product) => (
        <div key={product.name} className="rounded-lg border bg-card overflow-hidden">
          <button
            onClick={() => toggleProduct(product.name)}
            className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
            aria-expanded={openProduct === product.name}
          >
            <span className="font-semibold">{product.name}</span>
            <ChevronDownIcon
              className={`size-5 transition-transform ${openProduct === product.name ? "rotate-180" : ""}`}
            />
          </button>
          {openProduct === product.name && (
            <div className="border-t p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/3 flex-shrink-0">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
