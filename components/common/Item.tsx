import React, { useState } from "react"
import { ArrowRight } from "lucide-react"
import { AnimatedText } from "./AnimatedText"

interface ItemProps {
  item: {
    id: string
    text: string
    description?: string
    href: string
  }
  index: number
  isLast: boolean
  forceAnimate?: boolean
}

export function Item({ item, index, isLast, forceAnimate = false }: ItemProps) {
  const [isHovered, setIsHovered] = useState(false)
  const shouldAnimateText = forceAnimate || isHovered
  const showArrow = isHovered

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-between group cursor-pointer py-2 border-b border-[#222222] text-[#9DA3AE] hover:text-white transition-colors duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-3">
        <div className="text-sm font-mono uppercase">
          <AnimatedText text={item.text} speed={8} forceAnimate={shouldAnimateText} />
          {item.description && (
            <small className="block text-[0.625rem] text-[#65727F] uppercase mt-1">{item.description}</small>
          )}
        </div>
      </div>
      <ArrowRight
        className={`h-4 w-4 transform transition-all duration-300 ${
          showArrow ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
        }`}
      />
    </a>
  )
} 