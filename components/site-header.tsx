"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="w-full border-b bg-background">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/stepup-logo.png" alt="Step Up Bootcamp" width={120} height={38} priority />
          <span className="sr-only">Step Up Bootcamp</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link href="/kursus" className="text-sm font-medium hover:text-primary">
            Kelas
          </Link>
          <Link href="/kontak" className="text-sm font-medium hover:text-primary">
            Hubungi Kami
          </Link>
          <Button asChild className="bg-accent text-accent-foreground hover:opacity-90">
            <a href="https://bit.ly/DaftarStepUp" target="_blank" rel="noopener noreferrer">
              Daftar Sekarang
            </a>
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu" className="hover:bg-muted">
                <MenuIcon className="size-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0">
              <nav className="flex flex-col" role="navigation" aria-label="Mobile">
                <SheetClose asChild>
                  <Link href="/" className="px-4 py-3 text-base font-medium hover:text-primary">
                    Home
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/kursus" className="px-4 py-3 text-base font-medium hover:text-primary">
                    Kelas
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/kontak" className="px-4 py-3 text-base font-medium hover:text-primary">
                    Hubungi Kami
                  </Link>
                </SheetClose>
                <div className="p-4">
                  <Button asChild className="w-full bg-accent text-accent-foreground hover:opacity-90">
                    <a href="https://bit.ly/DaftarStepUp" target="_blank" rel="noopener noreferrer">
                      Daftar Sekarang
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
