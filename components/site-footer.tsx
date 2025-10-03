import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteFooter() {
  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left side: Logo and tagline */}
          <div className="flex flex-col gap-3">
            <Image src="/images/stepup-logo-white-arrow.png" alt="Step Up Bootcamp" width={140} height={44} />
            <p className="text-sm max-w-xs">Upgrade Skill dan Karir Kamu Sekarang</p>
          </div>

          {/* Right side: Navigation links */}
          <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
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
          © 2025 Step Up Bootcamp. Hak cipta dilindungi.
        </div>
      </div>
    </footer>
  )
}
