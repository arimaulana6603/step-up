import Image from "next/image"
import Link from "next/link"

type WpPost = {
  id: number
  slug: string
  date: string
  title: { rendered: string }
  content: { rendered: string }
  _embedded?: {
    author?: Array<{ name?: string }>
    "wp:featuredmedia"?: Array<{ source_url?: string }>
  }
}

async function getPost(slug: string): Promise<WpPost | null> {
  const base = "https://stepup.lifetech.co.id/backend/wp-json/wp/v2/posts"
  const res = await fetch(`${base}?slug=${encodeURIComponent(slug)}&_embed=1`, {
    cache: "no-store",
  })
  if (!res.ok) return null
  const arr = (await res.json()) as WpPost[]
  return arr?.[0] ?? null
}

export async function generateStaticParams() {
  const res = await fetch("https://stepup.lifetech.co.id/backend/wp-json/wp/v2/posts")
  const posts = await res.json()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPost(params.slug)

  if (!post) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-bold text-foreground mb-4">Posting tidak ditemukan</h1>
        <Link
          href="/blog"
          className="inline-flex items-center rounded-md bg-primary text-primary-foreground px-3 py-2 text-sm"
        >
          Kembali ke Blog
        </Link>
      </main>
    )
  }

  const date = new Date(post.date).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
  const author = post._embedded?.author?.[0]?.name
  const img = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-foreground text-balance">{post.title.rendered}</h1>
        <div className="mt-2 text-sm text-muted-foreground flex gap-2 flex-wrap">
          <span>{date}</span>
          {author && <span>• {author}</span>}
        </div>
      </header>

      {img && (
        <div className="relative w-full aspect-[16/9] bg-muted mb-6 overflow-hidden">
          <Image src={img || "/placeholder.svg"} alt={post.title.rendered} fill className="object-contain" />
        </div>
      )}

      <article
        className="prose prose-neutral max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />

      <div className="mt-10">
        <Link
          href="/blog"
          className="inline-flex items-center rounded-md border bg-background px-3 py-2 text-sm hover:bg-muted"
        >
          Kembali ke Blog
        </Link>
      </div>
    </main>
  )
}
