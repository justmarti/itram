import React, { useState, useEffect } from "react"

interface AnimatedTextProps {
  text: string
  speed?: number
  forceAnimate?: boolean
}

export function AnimatedText({ text, speed = 8, forceAnimate = false }: AnimatedTextProps) {
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
    setTimeout(() => {
      letters.forEach((letter, i) => {
        setTimeout(() => {
          setDisplayText((prev) => {
            const arr = prev.split("")
            arr[i] = letter
            return arr.join("")
          })
        }, i * speed)
      })

      // Reset animation state after completion
      setTimeout(() => {
        setIsAnimating(false)
      }, letters.length * speed)
    }, letters.length * speed)
  }

  // Trigger animation on mount if forceAnimate is true
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