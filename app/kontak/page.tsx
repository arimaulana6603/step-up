"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    try {
      const form = e.currentTarget
      const data = {
        name: (form.elements.namedItem("name") as HTMLInputElement).value,
        email: (form.elements.namedItem("email") as HTMLInputElement).value,
        message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      }
      console.log("[v0] Contact form submitted:", data)
      alert("Terima kasih! Pesanmu telah tercatat.")
      form.reset()
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Kontak Kami</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-2">
          <p className="text-sm">
            Email:{" "}
            <a href="mailto:bootcamp.stepup@gmail.com" className="underline">
              bootcamp.stepup@gmail.com
            </a>
          </p>
          <p className="text-sm">
            Instagram:{" "}
            <a
              href="https://instagram.com/stepup.bootcamp"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              @stepup.bootcamp
            </a>
          </p>
          <p className="text-sm">Telepon: 0851 3383 4350</p>
          <p className="text-sm">Alamat: Green Lake City, Neo Soho Residence, Alam Sutera</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 rounded-lg border bg-card p-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Nama
            </label>
            <Input id="name" name="name" required placeholder="Nama lengkap" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input id="email" name="email" type="email" required placeholder="Alamat Email" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium">
              Pesan
            </label>
            <Textarea id="message" name="message" required placeholder="Tulis pesanmu di sini..." />
          </div>
          <Button type="submit" disabled={loading} className="bg-primary text-primary-foreground hover:opacity-90">
            {loading ? "Mengirim..." : "Kirim Pesan"}
          </Button>
        </form>
      </div>
    </main>
  )
}
