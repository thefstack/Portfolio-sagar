"use client"

import { useRef, useState, useEffect } from "react"

export default function Carousel() {
  const scrollContainerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener("resize", checkScroll)
    return () => window.removeEventListener("resize", checkScroll)
  }, [])

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector(".carousel-card").offsetWidth
      const gap = 24 // 1.5rem = 24px
      const scrollAmount = cardWidth + gap

      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const caseStudies = [
    { id: 1, alt: "Product packaging case study", query: "elegant product packaging with natural lighting and shadow", imgSrc: "cat.jpg" },
    {
      id: 2,
      alt: "Product photography case study",
      query: "minimalist product photography with black bottle and natural rock",
      imgSrc: "cat.jpg"
    },
    { id: 3, alt: "Branding case study", query: "white branded tote bag hanging on wooden shelf", imgSrc: "lemon.jpg" },
    { id: 4, alt: "Packaging design case study", query: "luxury cosmetic tube on minimalist background", imgSrc: "cat.jpg" },
    { id: 5, alt: "Brand identity case study", query: "brand identity materials and stationery" ,imgSrc: "cat.jpg"},
    { id: 6, alt: "Luxury packaging case study", query: "premium luxury packaging design", imgSrc: "lemon.jpg" },
  ]

  return (
    <div className=" bg-[#060010] text-white p-6 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="mt-6 md:mt-4">
          <div className="relative">
            {canScrollLeft && (
              <button
                onClick={() => scroll("left")}
                className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 -translate-x-16 z-10 w-12 h-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
                aria-label="Previous"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            <div
              ref={scrollContainerRef}
              onScroll={checkScroll}
              className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="carousel-card group relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] snap-start"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                    <img
                      src={`/${study.imgSrc}?height=450&width=360&query=${encodeURIComponent(study.query)}`}
                      alt={study.alt}
                      className="w-full h-full object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <button className="flex items-center gap-2 text-white text-sm font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                        View Casestudy
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {canScrollRight && (
              <button
                onClick={() => scroll("right")}
                className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 translate-x-16 z-10 w-12 h-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
                aria-label="Next"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
