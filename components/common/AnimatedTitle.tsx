import React, { useState, useEffect } from "react"

interface AnimatedTitleProps {
  text: string
}

export function AnimatedTitle({ text }: AnimatedTitleProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) {
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
        }, i * 40)
      })
    } else {
      const letters = displayText.split("")
      const originalLetters = text.split("")

      letters.forEach((_, i) => {
        setTimeout(() => {
          setDisplayText((prev) => {
            const arr = prev.split("")
            arr[i] = originalLetters[i]
            return arr.join("")
          })
        }, i * 40)
      })
    }
  }, [isHovered, text])

  return (
    <span 
      className="cursor-pointer" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      {displayText}
    </span>
  )
} 