"use client"

import { useState } from "react"
import { ChevronDownIcon } from "lucide-react"

type Product = {
  name: string
  description: string
}

const PRODUCTS: Product[] = [
  {
    name: "FRAUDTECTOR",
    description: "Sistem manajemen fraud untuk mendeteksi dan mencegah transaksi mencurigakan secara real-time.",
  },
  {
    name: "ARQA",
    description: "Simulator testing tools untuk otomasi pengujian aplikasi dengan berbagai skenario.",
  },
  {
    name: "CRM Track",
    description: "Customer Relationship Management untuk mengelola interaksi pelanggan dan meningkatkan retensi.",
  },
  {
    name: "Learning Management System",
    description: "Platform pembelajaran online lengkap dengan manajemen kursus, tugas, dan evaluasi.",
  },
  {
    name: "Hexa Suite",
    description: "Human Resource System untuk payroll, absensi, rekrutmen, dan manajemen karyawan.",
  },
]

export function ProductDropdown() {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-lg border bg-card">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold">Product Hasil Siswa</span>
        <ChevronDownIcon className={`size-5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="border-t p-4 space-y-4">
          {PRODUCTS.map((p) => (
            <div key={p.name}>
              <h4 className="font-medium text-primary">{p.name}</h4>
              <p className="text-sm text-muted-foreground mt-1">{p.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
