"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

type LogoCarouselProps = {
  logos: { src: string; alt: string }[]
}

export function LogoCarousel({ logos }: LogoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const logosPerSlide = 4
  const totalSlides = Math.ceil(logos.length / logosPerSlide)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }, 3000)
    return () => clearInterval(interval)
  }, [totalSlides])

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
          <div key={slideIndex} className="min-w-full flex justify-center items-center gap-8 py-16 px-4">
            {logos.slice(slideIndex * logosPerSlide, slideIndex * logosPerSlide + logosPerSlide).map((logo, i) => (
              <div key={i} className="flex justify-center items-center w-[180px] h-auto">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={180}
                  height={80}
                  className="object-contain w-full h-auto max-h-[80px]"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4 pb-6">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`size-2.5 rounded-full transition-colors ${i === currentIndex ? "bg-[#1e40af]" : "bg-gray-300"}`}
            aria-label={`Pergi ke slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
