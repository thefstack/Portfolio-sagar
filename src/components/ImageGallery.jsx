"use client"

import { useState } from "react"

function ImageCard({ image, caption, link }) {
  const [isHovered, setIsHovered] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    if (!link) {
      const rect = e.currentTarget.getBoundingClientRect()
      setCursorPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const content = (
    <div
      className="relative w-full h-90 overflow-hidden rounded-lg cursor-pointer group"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image */}
      <img
        src={image || "/placeholder.svg"}
        alt={caption}
        className={`w-full h-full object-cover transition-all duration-500 ease-in-out ${
          isHovered ? "grayscale-0 scale-110" : "grayscale scale-100"
        }`}
      />

      {/* Link Button Overlay */}
      {link && (
        <div className="absolute inset-0 flex items-end justify-center pb-6 transition-opacity duration-300">
          <div className="bg-gray-800/10 backdrop-blur-sm px-6 py-3 rounded-full text-white font-medium flex items-center gap-2">
            View Casestudy
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>
        </div>
      )}

      {/* Caption that follows cursor (only if no link) */}
      {!link && isHovered && (
        <div
          className="absolute pointer-events-none bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-gray-800 font-medium text-sm whitespace-nowrap transition-opacity duration-200"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {caption}
        </div>
      )}
    </div>
  )

  if (link) {
    return (
      <a href={link} className="block">
        {content}
      </a>
    )
  }

  return content
}

export default function ImageGallery({ items }) {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div key={index} className={`${index % 3 === 1 ? "lg:-mt-16" : ""}`}>
            <ImageCard image={item.image} caption={item.caption} link={item.link} />
          </div>
        ))}
      </div>
    </div>
  )
}
