"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

type LogoCarouselProps = {
  logos: { src: string; alt: string }[]
}

export function LogoCarousel({ logos }: LogoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [logos.length])

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
      >
        {logos.map((logo, i) => (
          <div key={i} className="min-w-[33.333%] flex justify-center items-center py-6 px-4">
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              width={150}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {logos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`size-2 rounded-full transition-colors ${
              i === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
