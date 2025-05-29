"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const [timeLeft, setTimeLeft] = useState("")
  const [randomElement, setRandomElement] = useState<string | null>(null)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date()
      targetDate.setHours(targetDate.getHours() + 86)

      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft(`${hours}h_${minutes}m_${seconds}s_${Math.floor(difference % 1000)}_475ms_utc+5`)
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  // Random element animation effect
  useEffect(() => {
    const allElements = ["neutral-news", "bookworm", "github-clone", "habit-tracker", "moonshot"]

    const randomAnimation = () => {
      const randomIndex = Math.floor(Math.random() * allElements.length)
      setRandomElement(allElements[randomIndex])

      // Reset after animation completes
      setTimeout(() => {
        setRandomElement(null)
      }, 800)
    }

    // Faster interval (6 seconds instead of 10)
    const interval = setInterval(randomAnimation, 6000)
    return () => clearInterval(interval)
  }, [])

  const doingItems = [{ id: "neutral-news", text: "neutral-news" }]

  const doneItems = [
    { id: "bookworm", text: "bookworm" },
    { id: "github-clone", text: "github-clone" },
    { id: "habit-tracker", text: "habit-tracker" },
    { id: "moonshot", text: "moonshot" },
  ]

  return (
    <main className="min-h-screen bg-[#111111] text-[#EEEEEE] font-mono overflow-hidden relative flex flex-col">
      <div className="flex-grow">
        {/* Fixed Logo */}
        <div className="fixed top-6 left-6 z-50 md:absolute">
          <PixelatedLogo />
        </div>

        <div className="p-6 md:p-12 pl-56 md:pl-60">
          <div className="max-w-full mx-auto">
            {/* Header */}
            <div className="mb-16 pt-6 flex items-center h-48">
              <div className="flex flex-col justify-center h-full">
                <div className="text-6xl md:text-7xl leading-none tracking-wide text-[#EEEEEE] mb-2">
                  <UppercaseText>
                    <AnimatedTitle text="itram" />
                  </UppercaseText>
                </div>
                <div className="text-2xl md:text-3xl leading-none tracking-wide text-[#777777]">
                  <UppercaseText>ios developer</UppercaseText>
                </div>
              </div>
            </div>

            {/* DOING Section */}
            <div className="mb-16">
              <UppercaseText className="text-sm mb-3 text-[#777777]">doing</UppercaseText>
              <div className="flex flex-col border-t border-[#222222]">
                {doingItems.map((item, index) => (
                  <SectionItem
                    key={item.id}
                    item={item.text}
                    index={index}
                    isLast={index === doingItems.length - 1}
                    forceAnimate={randomElement === item.id}
                  />
                ))}
              </div>
            </div>

            {/* DONE Section */}
            <div className="mb-24">
              <UppercaseText className="text-sm mb-3 text-[#777777]">done</UppercaseText>
              <div className="flex flex-col border-t border-[#222222]">
                {doneItems.map((item, index) => (
                  <SectionItem
                    key={item.id}
                    item={item.text}
                    index={index}
                    isLast={index === doneItems.length - 1}
                    forceAnimate={randomElement === item.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 text-[#444444] text-xs">
        <UppercaseText>inspired by mds</UppercaseText>
      </div>
    </main>
  )
}

function UppercaseText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`uppercase ${className}`}>{children}</div>
}

function AnimatedTitle({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState(text)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) {
      // Transform to "marti" quickly
      const targetText = "marti"
      const letters = text.split("")
      const targetLetters = targetText.split("")

      letters.forEach((_, i) => {
        setTimeout(() => {
          setDisplayText((prev) => {
            const arr = prev.split("")
            arr[i] = targetLetters[i]
            return arr.join("")
          })
        }, i * 40) // 40ms per letter
      })
    } else {
      // Transform back to "itram" quickly
      const letters = displayText.split("")
      const originalLetters = text.split("")

      letters.forEach((_, i) => {
        setTimeout(() => {
          setDisplayText((prev) => {
            const arr = prev.split("")
            arr[i] = originalLetters[i]
            return arr.join("")
          })
        }, i * 40) // 40ms per letter
      })
    }
  }, [isHovered, text])

  return (
    <span className="cursor-pointer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {displayText}
    </span>
  )
}

function AnimatedText({
  text,
  speed = 8,
  forceAnimate = false,
}: { text: string; speed?: number; forceAnimate?: boolean }) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [displayText, setDisplayText] = useState(text)

  const handleMouseEnter = () => {
    if (isAnimating) return
    animateText()
  }

  const animateText = () => {
    setIsAnimating(true)
    const letters = text.split("")
    const scrambledChars = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"

    // Phase 1: Scramble all letters quickly
    letters.forEach((_, i) => {
      setTimeout(() => {
        setDisplayText((prev) => {
          const arr = prev.split("")
          arr[i] = scrambledChars[Math.floor(Math.random() * scrambledChars.length)]
          return arr.join("")
        })
      }, i * speed)
    })

    // Phase 2: Restore original letters quickly
    setTimeout(
      () => {
        letters.forEach((letter, i) => {
          setTimeout(() => {
            setDisplayText((prev) => {
              const arr = prev.split("")
              arr[i] = letter
              return arr.join("")
            })
          }, i * speed)
        })

        setTimeout(
          () => {
            setIsAnimating(false)
          },
          letters.length * speed + 100,
        )
      },
      letters.length * speed + 50,
    )
  }

  // Force animation when prop changes
  useEffect(() => {
    if (forceAnimate && !isAnimating) {
      animateText()
    }
  }, [forceAnimate])

  return (
    <span className="cursor-pointer" onMouseEnter={handleMouseEnter}>
      {displayText.split("").map((letter, letterIndex) => (
        <span key={letterIndex} className="inline-block">
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  )
}

function SectionItem({
  item,
  index,
  isLast,
  forceAnimate = false,
}: { item: string; index: number; isLast: boolean; forceAnimate?: boolean }) {
  const [showArrow, setShowArrow] = useState(false)

  return (
    <div
      className={`flex items-center justify-between group cursor-pointer py-2 border-b border-[#222222] text-[#888888] hover:text-white transition-colors duration-300`}
      onMouseEnter={() => setShowArrow(true)}
      onMouseLeave={() => setShowArrow(false)}
    >
      <UppercaseText className="text-sm font-mono">
        <AnimatedText text={item} speed={8} forceAnimate={forceAnimate} />
      </UppercaseText>
      <ArrowRight
        className={`h-4 w-4 transform transition-all duration-300 ${
          showArrow ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
        }`}
      />
    </div>
  )
}

function PixelatedLogo() {
  const [pixels, setPixels] = useState<string[]>([])
  const [hoveredPixel, setHoveredPixel] = useState<number | null>(null)

  useEffect(() => {
    // Initialize with random colors
    const colors = ["bg-white", "bg-gray-300", "bg-gray-600"]
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

  return (
    <div className="w-48 h-48 grid grid-cols-8 grid-rows-8 gap-1 bg-[#111111] p-2 rounded-sm">
      {Array(64)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`aspect-square transition-colors duration-300 cursor-pointer ${
              hoveredPixel === i ? "bg-white" : pixels[i] || "bg-gray-600"
            }`}
            onMouseEnter={() => setHoveredPixel(i)}
            onMouseLeave={() => setHoveredPixel(null)}
          />
        ))}
    </div>
  )
}
