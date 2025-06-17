import React, { useState, useEffect } from "react"

interface PixelatedLogoProps {
  size?: "normal" | "small"
}

export function PixelatedLogo({ size = "normal" }: PixelatedLogoProps) {
  const [pixels, setPixels] = useState<string[]>([])
  const [hoveredPixel, setHoveredPixel] = useState<number | null>(null)

  useEffect(() => {
    // Initialize with random colors
    const colors = ["bg-gray-400", "bg-gray-600", "bg-gray-800"]
    const initialPixels = Array(64)
      .fill(0)
      .map(() => colors[Math.floor(Math.random() * colors.length)])
    setPixels(initialPixels)

    // Change random pixels continuously
    const interval = setInterval(() => {
      setPixels((prevPixels) => {
        const newPixels = [...prevPixels]
        // Change 1-3 random pixels each time
        const numChanges = Math.floor(Math.random() * 3) + 1

        for (let i = 0; i < numChanges; i++) {
          const randomIndex = Math.floor(Math.random() * 64)
          const randomColor = colors[Math.floor(Math.random() * colors.length)]
          newPixels[randomIndex] = randomColor
        }

        return newPixels
      })
    }, 800) // Change every 800ms for a subtle effect

    return () => clearInterval(interval)
  }, [])

  const logoSize = size === "small" ? "w-32 h-32" : "w-48 h-48"
  const gapSize = size === "small" ? "gap-0.5" : "gap-1"

  return (
    <div className={`${logoSize} grid grid-cols-8 grid-rows-8 ${gapSize} bg-[#111111] p-2 rounded-sm`}>
      {Array(64)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`aspect-square transition-colors duration-100 cursor-pointer rounded ${
              hoveredPixel === i
                ? pixels[i] === "bg-gray-400"
                  ? "bg-gray-600"
                  : pixels[i] === "bg-gray-600"
                  ? "bg-gray-800"
                  : "bg-gray-400"
                : pixels[i] || "bg-gray-600"
            }`}
            style={{
              transitionTimingFunction: "ease-in-out"
            }}
            onMouseEnter={() => setHoveredPixel(i)}
            onMouseLeave={() => setHoveredPixel(null)}
          />
        ))}
    </div>
  )
} 