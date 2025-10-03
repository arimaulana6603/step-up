import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteFooter() {
  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Column 1: Logo and tagline */}
          <div className="flex flex-col gap-3">
            <Image src="/images/stepup-logo-white-arrow.png" alt="Step Up Bootcamp" width={140} height={44} />
            <p className="text-sm max-w-xs">Upgrade Skill dan Karir Kamu Sekarang</p>
          </div>

          {/* Column 2: Kontak */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-base">Kontak</h3>
            <div className="text-sm space-y-1">
              <p>Email: bootcamp.stepup@gmail.com</p>
              <p>Instagram: @stepup.bootcamp</p>
              <p>Telepon: 0851 3383 4350</p>
            </div>
          </div>

          {/* Column 3: Alamat */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-base">Alamat</h3>
            <p className="text-sm">Green Lake City, Neo Soho Residence, Alam Sutera</p>
          </div>

          {/* Column 4: Menu */}
          <nav className="flex flex-col gap-4 items-start">
            <Link href="/kursus" className="text-sm hover:opacity-80 transition-opacity">
              Kelas
            </Link>
            <Link href="/kontak" className="text-sm hover:opacity-80 transition-opacity">
              Kontak Kami
            </Link>
            <Button asChild size="sm" className="bg-accent text-accent-foreground hover:opacity-90">
              <a href="https://bit.ly/DaftarStepUp" target="_blank" rel="noopener noreferrer">
                Daftar Sekarang
              </a>
            </Button>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-center text-sm">
          © 2025 Step Up Bootcamp
        </div>
      </div>
    </footer>
  )
}
