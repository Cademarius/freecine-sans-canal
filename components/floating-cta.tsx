"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import Link from "next/link"

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      if (window.scrollY > 1000) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 sm:gap-4">
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#7b2cbf] to-[#5a189a] text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(123,44,191,0.5)]"
        >
          <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      )}

      <div className="relative">
        <div className="absolute -inset-1 animate-pulse rounded-full bg-gradient-to-r from-[#ff2970] to-[#ff9770] opacity-70 blur-sm"></div>
        <Button
          asChild
          className="relative bg-gradient-to-r from-[#ff2970] to-[#ff9770] text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,41,112,0.5)]"
        >
          <Link href="#pricing">
            <span className="relative z-10 text-sm sm:text-base">Acheter à -66%</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#ff2970] to-[#ff9770] opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
          </Link>
        </Button>
      </div>
    </div>
  )
}
