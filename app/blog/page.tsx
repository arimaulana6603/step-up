"use client"

import useSWR from "swr"
import { useMemo, useState } from "react"
import { BlogCard } from "@/components/blog-card"

type WpPost = {
  id: number
  slug: string
  date: string
  title: { rendered: string }
  excerpt: { rendered: string }
  content: { rendered: string }
  _embedded?: {
    author?: Array<{ name?: string }>
    "wp:featuredmedia"?: Array<{ source_url?: string }>
  }
}

type ApiResponse = {
  posts: WpPost[]
  total: number
  totalPages: number
}

const fetcher = async (url: string): Promise<ApiResponse> => {
  const res = await fetch(url, { cache: "no-store" })
  if (!res.ok) throw new Error("Gagal memuat data")
  const total = Number(res.headers.get("X-WP-Total") || 0)
  const totalPages = Number(res.headers.get("X-WP-TotalPages") || 1)
  const posts: WpPost[] = await res.json()
  return { posts, total, totalPages }
}

type SortKey = "date_desc" | "date_asc" | "title_asc" | "title_desc"

export default function BlogPage() {
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState("")
  const [sort, setSort] = useState<SortKey>("date_desc")

  const orderBy = useMemo(() => {
    switch (sort) {
      case "date_asc":
        return { orderby: "date", order: "asc" }
      case "title_asc":
        return { orderby: "title", order: "asc" }
      case "title_desc":
        return { orderby: "title", order: "desc" }
      default:
        return { orderby: "date", order: "desc" }
    }
  }, [sort])

  const base = "https://stepup.lifetech.co.id/backend/wp-json/wp/v2/posts"
  const params = new URLSearchParams({
    _embed: "1",
    per_page: "10",
    page: String(page),
    orderby: orderBy.orderby,
    order: orderBy.order,
  })
  if (query.trim().length > 0) params.set("search", query.trim())

  const { data, error, isLoading } = useSWR<ApiResponse>(`${base}?${params.toString()}`, fetcher)

  const posts = data?.posts ?? []
  const totalPages = data?.totalPages ?? 1

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground text-balance">Blog</h1>
        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setPage(1)
              setQuery(e.target.value)
            }}
            placeholder="Cari berdasarkan judul..."
            className="w-full md:w-72 rounded-md border bg-background text-foreground px-3 py-2 text-sm outline-none"
            aria-label="Cari berdasarkan judul"
          />
          <select
            value={sort}
            onChange={(e) => {
              setPage(1)
              setSort(e.target.value as SortKey)
            }}
            className="w-full md:w-60 rounded-md border bg-background text-foreground px-3 py-2 text-sm"
            aria-label="Urutkan posting"
          >
            <option value="date_desc">Terbaru ke Terlama</option>
            <option value="date_asc">Terlama ke Terbaru</option>
            <option value="title_asc">Judul A–Z</option>
            <option value="title_desc">Judul Z–A</option>
          </select>
        </div>
      </header>

      {isLoading && <div className="py-10 text-center text-muted-foreground">Memuat posting...</div>}
      {error && <div className="py-10 text-center text-destructive">Terjadi kesalahan saat memuat posting.</div>}

      {!isLoading && !error && (
        <>
          {posts.length === 0 ? (
            <div className="py-10 text-center text-muted-foreground">Tidak ada posting ditemukan.</div>
          ) : (
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => {
                const img = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null
                const author = post._embedded?.author?.[0]?.name
                return (
                  <BlogCard
                    key={post.id}
                    slug={post.slug}
                    title={post.title.rendered}
                    excerpt={post.excerpt.rendered}
                    date={post.date}
                    author={author}
                    featuredImage={img}
                  />
                )
              })}
            </section>
          )}

          {/* Pagination */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              className="rounded-md border bg-background px-3 py-2 text-sm hover:bg-muted disabled:opacity-50"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page <= 1}
            >
              Sebelumnya
            </button>
            <span className="text-sm text-muted-foreground">
              Halaman {page} dari {totalPages}
            </span>
            <button
              className="rounded-md border bg-background px-3 py-2 text-sm hover:bg-muted disabled:opacity-50"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page >= totalPages}
            >
              Berikutnya
            </button>
          </div>
        </>
      )}
    </main>
  )
}
