import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PricingCard } from "@/components/pricing-card"
import { ProductDropdown } from "@/components/product-dropdown"
import { CheckIcon, UsersIcon, BriefcaseIcon, GraduationCapIcon } from "lucide-react"

const CLASSES = [
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Belajar riset pengguna, wireframe, prototyping, hingga usability testing untuk menciptakan pengalaman digital yang optimal.",
  },
  {
    slug: "full-stack-developer",
    title: "Full-Stack Developer",
    description: "Bangun aplikasi end-to-end dari frontend hingga backend, termasuk database dan deployment.",
  },
  {
    slug: "backend-programming",
    title: "Backend Programming",
    description: "Kuasai API, database, arsitektur, dan performa backend modern untuk sistem yang scalable.",
  },
  {
    slug: "frontend-programming",
    title: "Frontend Programming",
    description: "Ciptakan UI modern dengan komponen, state management, dan aksesibilitas terbaik.",
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    description: "Pelajari dasar machine learning, model, evaluasi, dan penerapan AI dalam proyek praktis.",
  },
  {
    slug: "web3-blockchain",
    title: "Web3 & Blockchain",
    description: "Pahami smart contract, dApp, dan ekosistem blockchain untuk masa depan teknologi terdesentralisasi.",
  },
  {
    slug: "robotic",
    title: "Robotic",
    description: "Dasar robotika, sensor, kontrol, dan proyek mini untuk membangun sistem robotik.",
  },
  {
    slug: "full-stack-digital-marketing",
    title: "Full-Stack Digital Marketing",
    description: "Strategi akuisisi, konten, SEO, ads, dan analitik untuk pertumbuhan bisnis digital.",
  },
]

const FACILITIES = [
  "Kelas online dan tatap muka via Zoom",
  "Reading materials lengkap",
  "Latihan praktis terstruktur",
  "Problem solving kasus nyata",
  "Proyek akhir dengan klien",
  "Konsultasi mentor expert",
  "Program graduation",
  "Mentoring karir rutin",
  "Peluang internship & kerja",
]

const REGISTRATION_STEPS = [
  "Peserta mendaftar melalui link formulir",
  "Mendapatkan petunjuk skema pembayaran",
  "Setelah pembayaran, peserta mendapat tanda keikutsertaan bootcamp & masuk ke grup kelas",
  "Peserta menerima kalender akademik & mulai mengikuti program",
]

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-16 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-balance text-3xl md:text-5xl font-semibold">Step Up Bootcamp 2025</h1>
            <p className="mt-4 text-pretty text-base md:text-lg font-medium">Upgrade Skill dan Karir Kamu Sekarang</p>
            <p className="mt-4 text-pretty text-sm md:text-base opacity-90">
              Mengatasi tantangan mencari kerja, mismatch skill, dan membuka peluang kerja baru melalui program intensif
              berbasis proyek nyata.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Button asChild className="bg-accent text-accent-foreground hover:opacity-90">
                <a href="https://bit.ly/DaftarStepUp" target="_blank" rel="noopener noreferrer">
                  Daftar Sekarang
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/kursus">Lihat Kelas</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image src="/images/stepup-logo.png" alt="Logo Step Up Bootcamp" width={240} height={76} priority />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-accent text-accent-foreground">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="text-center">
            <p className="text-4xl font-bold">20+</p>
            <p className="text-sm mt-1">Projects</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">100+</p>
            <p className="text-sm mt-1">Job Roles</p>
          </div>
        </div>
      </section>

      {/* Kurikulum & Pilihan Kelas */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-balance">
            Seperti apa kurikulum dan pilihan kelas yang disiapkan?
          </h2>
          <p className="mt-2 text-muted-foreground">
            Kami menyediakan 8 pilihan kelas yang dirancang sesuai kebutuhan industri.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CLASSES.map((c) => (
              <div key={c.slug} className="rounded-lg border bg-card p-5 flex flex-col">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 flex-1">{c.description}</p>
                <Button asChild variant="outline" className="mt-4 bg-transparent">
                  <Link href={`/kursus/${c.slug}`}>Lihat Detail</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Ditujukan Kepada */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-balance">Program ini ditujukan kepada</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border bg-card p-6">
              <UsersIcon className="size-8 text-primary" />
              <h3 className="text-lg font-semibold mt-3">Individu yang ingin mengembangkan karir</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Pemula, fresh graduate, atau profesional yang ingin switch career dan meningkatkan skill.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <BriefcaseIcon className="size-8 text-primary" />
              <h3 className="text-lg font-semibold mt-3">Pemilik bisnis dan perusahaan</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Yang ingin memperkuat tim melalui mentoring atau pelatihan intensif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Peserta yang Bisa Bergabung */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-balance">Peserta yang bisa bergabung</h2>
          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            {["Switch Career", "Fresh Graduate", "Pemula"].map((type) => (
              <div key={type} className="rounded-lg border bg-card p-6 text-center">
                <GraduationCapIcon className="size-10 text-accent mx-auto" />
                <p className="font-semibold mt-3">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tujuan */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-balance">Tujuan Program</h2>
          <ul className="mt-6 space-y-3">
            {[
              "Menyusun program sesuai kebutuhan industri",
              "Menyalurkan peserta ke industri setelah program selesai",
              "Mendorong inovasi dan pengembangan produk",
            ].map((goal) => (
              <li key={goal} className="flex items-start gap-3">
                <CheckIcon className="size-5 text-accent shrink-0 mt-0.5" />
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Fasilitas */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-balance">Fasilitas yang didapatkan</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FACILITIES.map((f) => (
              <div key={f} className="flex items-start gap-3 rounded-lg border bg-card p-4">
                <CheckIcon className="size-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sertifikat & Peluang Kerja */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-balance">Sertifikat & Transkrip Kelulusan</h2>
          <p className="mt-3 text-pretty opacity-90">
            Setelah lulus, peserta mendapatkan sertifikat resmi dan peluang bekerja di perusahaan mitra.
          </p>
        </div>
      </section>

      {/* Product Hasil Siswa */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-balance mb-6">Product Hasil Siswa</h2>
          <ProductDropdown />
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-balance text-center">
            Upgrade Skill dan Karir Kamu Sekarang
          </h2>
          <p className="text-center text-muted-foreground mt-2">Pilih paket yang sesuai dengan kebutuhanmu</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <PricingCard
              title="Standar"
              originalPrice="Rp30.000.000"
              discountedPrice="Rp15.000.000"
              badge="Diskon 50%"
              features={[
                "10 pendaftar pertama",
                "Akses semua materi",
                "Mentoring rutin",
                "Proyek akhir",
                "Sertifikat & transkrip",
                "Job placement",
              ]}
              cta="Daftar Standar"
            />
            <PricingCard
              title="Private Batch"
              originalPrice="Rp40.000.000"
              discountedPrice="Rp20.000.000"
              badge="Diskon 50%"
              features={[
                "2–3 orang per kelas",
                "Jadwal fleksibel",
                "Mentoring intensif",
                "Proyek custom",
                "Sertifikat & transkrip",
                "Job placement",
              ]}
              cta="Daftar Private"
            />
            <PricingCard
              title="Enterprise Business Partner"
              originalPrice="Hubungi Kami"
              discountedPrice="Custom"
              features={[
                "Mentoring tim perusahaan",
                "Upgrade skill karyawan",
                "Program custom",
                "Konsultasi bisnis",
                "Sertifikat & transkrip",
                "Partnership jangka panjang",
              ]}
              cta="Hubungi Kami"
            />
          </div>
        </div>
      </section>

      {/* Alur Pendaftaran */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-balance">Alur Pendaftaran</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REGISTRATION_STEPS.map((step, i) => (
              <div key={i} className="rounded-lg border bg-card p-5">
                <div className="size-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg">
                  {i + 1}
                </div>
                <p className="text-sm mt-3">{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:opacity-90">
              <a href="https://bit.ly/DaftarStepUp" target="_blank" rel="noopener noreferrer">
                Daftar Sekarang
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Partner logos */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h3 className="text-center text-sm text-muted-foreground">Didukung oleh partner</h3>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex justify-center">
                <Image
                  src={`/placeholder.svg?height=48&width=120&query=partner%20logo`}
                  alt={`Logo partner ${i}`}
                  width={120}
                  height={48}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
