import { CourseCard } from "@/components/course-card"

const COURSES = [
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

export default function CoursesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Kelas</h1>
      <p className="mt-2 text-muted-foreground">Pilih kelas sesuai minat dan tujuan karirmu.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {COURSES.map((c) => (
          <CourseCard key={c.slug} slug={c.slug} title={c.title} description={c.description} />
        ))}
      </div>
    </main>
  )
}
