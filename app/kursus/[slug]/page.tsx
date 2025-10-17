import { Button } from "@/components/ui/button";

type Props = { params: { slug: string } };

const COURSE_CONTENT: Record<
  string,
  { name: string; description: string; mainTopics: string[] }
> = {
  "ui-ux-design": {
    name: "UI/UX Design",
    description:
      "Belajar riset pengguna, wireframe, prototyping, hingga usability testing untuk menciptakan pengalaman digital yang optimal.",
    mainTopics: [
      "Riset Pengguna & Persona",
      "Arsitektur Informasi",
      "Wireframe & Prototyping",
      "UI Design System",
      "Usability Testing",
      "Interaction Design",
      "Visual Design Principles",
      "Design Thinking",
    ],
  },
  "full-stack-developer": {
    name: "Full-Stack Developer",
    description:
      "Bangun aplikasi end-to-end dari frontend hingga backend, termasuk database dan deployment.",
    mainTopics: [
      "Frontend Modern (React/Next.js)",
      "Backend Development (Node.js/Express)",
      "REST & GraphQL API",
      "Database & ORM",
      "Autentikasi & Otorisasi",
      "Deployment & CI/CD",
      "Testing & Debugging",
      "Performance Optimization",
    ],
  },
  "backend-programming": {
    name: "Backend Programming",
    description:
      "Kuasai API, database, arsitektur, dan performa backend modern untuk sistem yang scalable.",
    mainTopics: [
      "API Design & Development",
      "Database Design & Indexing",
      "Caching & Queue Systems",
      "Microservices Architecture",
      "Security Best Practices",
      "Pengujian & Observabilitas",
      "Skalabilitas & Load Balancing",
      "DevOps Fundamentals",
    ],
  },
  "frontend-programming": {
    name: "Frontend Programming",
    description:
      "Ciptakan UI modern dengan komponen, state management, dan aksesibilitas terbaik.",
    mainTopics: [
      "HTML5 & CSS3 Advanced",
      "JavaScript ES6+",
      "React & Component Architecture",
      "State Management (Redux/Zustand)",
      "Responsive & Mobile-First Design",
      "Aksesibilitas & UX",
      "Data Fetching & API Integration",
      "Optimasi & Performance",
      "Testing UI (Jest/Testing Library)",
    ],
  },
  "artificial-intelligence": {
    name: "Artificial Intelligence",
    description:
      "Pelajari dasar machine learning, model, evaluasi, dan penerapan AI dalam proyek praktis.",
    mainTopics: [
      "Dasar Machine Learning & Data Science",
      "Supervised & Unsupervised Learning",
      "Model Klasifikasi & Regresi",
      "Neural Networks & Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Evaluasi & Tuning Model",
      "Penerapan AI dalam Produk",
      "Etika AI & Bias",
    ],
  },
  "web3-blockchain": {
    name: "Web3 & Blockchain",
    description:
      "Pahami smart contract, dApp, dan ekosistem blockchain untuk masa depan teknologi terdesentralisasi.",
    mainTopics: [
      "Dasar Blockchain & Cryptocurrency",
      "Smart Contract Development (Solidity)",
      "Ethereum & EVM",
      "dApp Development",
      "Web3.js & Ethers.js",
      "Wallet Integration",
      "NFT & Token Standards",
      "DeFi Fundamentals",
      "Keamanan Smart Contract",
      "Ekosistem & Use Cases",
    ],
  },
  robotic: {
    name: "Robotic",
    description:
      "Dasar robotika, sensor, kontrol, dan proyek mini untuk membangun sistem robotik.",
    mainTopics: [
      "Dasar Mekatronika & Elektronika",
      "Sensor & Aktuator",
      "Microcontroller Programming (Arduino/ESP32)",
      "Kontrol & Pemrograman Robot",
      "Navigasi & Path Planning",
      "Computer Vision untuk Robotik",
      "ROS (Robot Operating System)",
      "Proyek Mini Robotik",
    ],
  },
  "full-stack-digital-marketing": {
    name: "Full-Stack Digital Marketing",
    description:
      "Strategi akuisisi, konten, SEO, ads, dan analitik untuk pertumbuhan bisnis digital.",
    mainTopics: [
      "Riset Pasar & Segmentasi",
      "Content Marketing & Copywriting",
      "SEO & SEM",
      "Social Media Marketing",
      "Google Ads & Facebook Ads",
      "Email Marketing & Automation",
      "Analytics & Data-Driven Marketing",
      "Conversion Funnel & Retensi",
      "Growth Hacking",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(COURSE_CONTENT).map((slug) => ({ slug }));
}

export default function CourseDetailPage({ params }: Props) {
  const data = COURSE_CONTENT[params.slug];
  if (!data) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-2xl font-semibold">Kelas tidak ditemukan</h1>
        <p className="mt-2 text-muted-foreground">
          Silakan kembali ke daftar kelas.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">{data.name}</h1>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        {data.description}
      </p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Main Topics</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {data.mainTopics.map((topic) => (
            <li key={topic} className="rounded-lg border bg-card p-4 text-sm">
              {topic}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-8">
        <Button
          asChild
          className="bg-accent text-accent-foreground hover:opacity-90"
        >
          <a
            href="https://bit.ly/DaftarStepUp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daftar Sekarang
          </a>
        </Button>
      </div>
    </main>
  );
}
