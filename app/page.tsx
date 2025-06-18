"use client"

import React, { useState, useEffect } from "react"
import { PixelatedLogo } from "@/components/common/Logo"
import { AnimatedTitle } from "@/components/common/AnimatedTitle"
import { ProjectSection } from "@/components/features/ProjectSection"
import { doingItems, doneItems, contactItems, workedInItems } from "@/lib/constants"

export default function Home() {
  const [randomElement, setRandomElement] = useState<string | null>(null)

  // Random element animation effect
  useEffect(() => {
    const allElements = [
      ...doingItems.map(item => item.id),
      ...doneItems.map(item => item.id),
      ...workedInItems.map(item => item.id),
      ...contactItems.map(item => item.id),
    ]

    const randomAnimation = () => {
      const randomIndex = Math.floor(Math.random() * allElements.length)
      setRandomElement(allElements[randomIndex])

      // Reset after animation completes
      setTimeout(() => {
        setRandomElement(null)
      }, 800)
    }

    const interval = setInterval(randomAnimation, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-[#111111] text-[#EEEEEE] font-mono overflow-hidden relative flex flex-col">
      <article className="flex-grow">
        {/* Fixed Logo - Solo visible en desktop */}
        <aside className="fixed top-6 left-6 z-50 hidden lg:block">
          <PixelatedLogo />
        </aside>

        {/* Logo móvil - Solo visible cuando no hay espacio */}
        <header className="block lg:hidden flex justify-center items-center p-6 pb-0 m-6 mb-0">
          <PixelatedLogo />
        </header>

        <section className="p-6 md:p-12 lg:pl-60">
          <div className="max-w-full mx-auto">
            {/* Header */}
            <header className="mb-16 pt-6 lg:pt-6 flex items-center lg:h-48">
              <hgroup className="flex flex-col justify-center h-full w-full text-center lg:text-left">
                <h1 className="text-4xl lg:text-6xl xl:text-7xl leading-none tracking-wide text-[#9DA3AE] mb-2 font-light uppercase">
                  <AnimatedTitle text="itram" />
                </h1>
                <h2 className="text-lg lg:text-2xl xl:text-3xl leading-none tracking-wide text-[#4D5562] font-light uppercase">
                  ios developer
                </h2>
              </hgroup>
            </header>

            {/* Project Sections */}
            <nav aria-label="Project sections">
              <ProjectSection title="doing" items={doingItems} randomElement={randomElement} />
              <ProjectSection title="done" items={doneItems} randomElement={randomElement} />
              <ProjectSection title="worked in" items={workedInItems} randomElement={randomElement} />
              <ProjectSection title="contact" items={contactItems} randomElement={randomElement} />
            </nav>
          </div>
        </section>
      </article>

      {/* Footer */}
      <footer className="text-center py-6 text-[#4D5562] text-xs uppercase">
        inspired by mds
      </footer>
    </main>
  )
}