import React from "react"
import { Item } from "../common/Item"

interface ProjectSectionProps {
  title: string
  items: Array<{
    id: string
    text: string
    href: string
  }>
  randomElement: string | null
}

export function ProjectSection({ title, items, randomElement }: ProjectSectionProps) {
  return (
    <section className="mb-16">
      <h3 className="text-sm mb-3 text-[#4D5562] uppercase">{title}</h3>
      <ul className="flex flex-col border-t border-[#222222]">
        {items.map((item, index) => (
          <li key={item.id}>
            <Item
              item={item}
              index={index}
              isLast={index === items.length - 1}
              forceAnimate={randomElement === item.id}
            />
          </li>
        ))}
      </ul>
    </section>
  )
} 