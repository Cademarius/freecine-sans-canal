"use client"

import { motion } from "framer-motion"
import { Play, ChevronDown, ShieldCheck, Zap, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0118]">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/bg.jpeg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0a0118] via-[#1a0740]/90 to-[#0a0118]"
          style={{ opacity: Math.min(scrollY / 500, 1) }}
        ></div>

        {/* Animated gradient orbs */}
        <div className="absolute left-1/4 top-1/4 h-[300px] w-[300px] animate-pulse rounded-full bg-[#ff2970]/20 blur-[100px]"></div>
        <div className="absolute right-1/4 top-1/2 h-[250px] w-[250px] animate-pulse rounded-full bg-[#4cc9f0]/20 blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-1/3 h-[200px] w-[200px] animate-pulse rounded-full bg-[#7b2cbf]/20 blur-[100px]"></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZjI5NzAxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between p-6">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="absolute -inset-1 animate-pulse rounded-full bg-[#ff2970]/50 blur-md"></div>
            <Play className="relative h-8 w-8 text-white" />
          </div>
          <span className="bg-gradient-to-r from-[#ff2970] to-[#ff9770] bg-clip-text text-2xl font-extrabold text-transparent">
            Freecine
          </span>
        </div>
      </header>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <div className="mb-6 inline-block rounded-full bg-gradient-to-r from-[#ff2970]/20 to-[#4cc9f0]/20 px-4 py-1 backdrop-blur-sm">
            <span className="bg-gradient-to-r from-[#ff2970] to-[#4cc9f0] bg-clip-text text-sm font-medium text-transparent">
              9 PLATEFORMES • UN SEUL ABONNEMENT • ÉCONOMISEZ 90%
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">Votre Univers de Streaming</span>
            <span className="mt-2 block bg-gradient-to-r from-[#ff2970] via-[#ff9770] to-[#4cc9f0] bg-clip-text text-transparent">
              Réuni en Un Seul Endroit
            </span>
          </h1>

          <p className="mb-10 text-xl text-[#e2e2f5]">
            Accédez au contenu premium de Netflix, Amazon Prime, Disney+, TF1+, Paramount+, Apple TV+,
            Crunchyroll et HBO Max dans une seule application. En français ou VOSTFR, à vous de choisir.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="relative w-full overflow-hidden bg-gradient-to-r from-[#ff2970] to-[#ff9770] text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,41,112,0.5)] sm:w-auto"
            >
              <Link href="#pricing">
                <span className="relative z-10">Acheter maintenant à -66%</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#ff2970] to-[#ff9770] opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full border-[#7b2cbf]/50 bg-[#150329]/40 text-white backdrop-blur-md hover:border-[#7b2cbf] hover:bg-[#7b2cbf]/20 sm:w-auto"
              onClick={scrollToFeatures}
            >
              Voir les avantages
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 rounded-full bg-[#150329]/40 px-4 py-2 backdrop-blur-md">
              <DollarSign className="h-5 w-5 text-[#4cc9f0]" />
              <span className="text-[#e2e2f5]">Économisez 90%</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-[#150329]/40 px-4 py-2 backdrop-blur-md">
              <ShieldCheck className="h-5 w-5 text-[#4cc9f0]" />
              <span className="text-[#e2e2f5]">100% Sécurisé</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-[#150329]/40 px-4 py-2 backdrop-blur-md">
              <Zap className="h-5 w-5 text-[#4cc9f0]" />
              <span className="text-[#e2e2f5]">Ultra HD 4K</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={scrollToFeatures}
            className="flex animate-bounce flex-col items-center text-[#e2e2f5] transition-colors hover:text-[#ff2970]"
          >
            <span className="mb-2 text-sm">Découvrir</span>
            <ChevronDown className="h-6 w-6" />
          </button>
        </motion.div>
      </div>
    </div>
  )
}
