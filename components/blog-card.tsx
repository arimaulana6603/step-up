"use client"

import Image from "next/image"
import Link from "next/link"

type BlogCardProps = {
  slug: string
  title: string
  excerpt: string
  date?: string
  author?: string
  featuredImage?: string | null
}

export function BlogCard({ slug, title, excerpt, date, author, featuredImage }: BlogCardProps) {
  const formattedDate = date
    ? new Date(date).toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : undefined

  return (
    <article className="rounded-lg border bg-card text-card-foreground overflow-hidden flex flex-col">
      {featuredImage ? (
        <div className="relative w-full h-48 overflow-hidden bg-muted">
          <Image
            src={featuredImage || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ) : (
        <div className="relative w-full h-48 bg-muted flex items-center justify-center text-muted-foreground">
          Tidak ada gambar
        </div>
      )}
      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-lg font-semibold leading-snug text-foreground">{title}</h3>
        <div className="text-sm text-muted-foreground flex gap-2 flex-wrap">
          {formattedDate && <span>{formattedDate}</span>}
          {author && <span>• {author}</span>}
        </div>
        <p className="text-sm text-foreground/80 line-clamp-3" dangerouslySetInnerHTML={{ __html: excerpt }} />
        <div className="mt-2">
          <Link
            href={`/blog/${slug}`}
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-3 py-2 text-sm font-medium hover:opacity-90"
            aria-label={`Baca selengkapnya: ${title}`}
          >
            Baca Selengkapnya
          </Link>
        </div>
      </div>
    </article>
  )
}
