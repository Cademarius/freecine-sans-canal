"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Platforms() {
  const platforms = [
    {
      name: "Netflix",
      logo: "/netflix.webp?height=100&width=100",
      color: "bg-gradient-to-br from-[#E50914] to-[#B81D24]",
      content: ["Stranger Things", "La Casa de Papel", "The Witcher", "Squid Game", "Bridgerton"],
    },
    {
      name: "Amazon Prime",
      logo: "/prime.jpg?height=100&width=100",
      color: "bg-gradient-to-br from-[#00A8E1] to-[#0073BB]",
      content: ["The Boys", "The Marvelous Mrs. Maisel", "Jack Ryan", "The Wheel of Time", "Reacher"],
    },
    {
      name: "Disney+",
      logo: "/disney.jpg?height=100&width=100",
      color: "bg-gradient-to-br from-[#0063E5] to-[#0040A0]",
      content: ["The Mandalorian", "WandaVision", "Loki", "Moon Knight", "Andor"],
    },
    {
      name: "TF1+",
      logo: "/TF1.png?height=100&width=100",
      color: "bg-gradient-to-br from-[#0078D7] to-[#005A9E]",
      content: ["HPI", "Les Combattantes", "Balthazar", "Ici tout commence", "Demain nous appartient"],
    },
    {
      name: "Paramount+",
      logo: "/paramount.jpg?height=100&width=100",
      color: "bg-gradient-to-br from-[#0064FF] to-[#00407F]",
      content: ["Yellowstone", "Star Trek: Discovery", "Halo", "Mayor of Kingstown", "1883"],
    },
    {
      name: "Apple TV+",
      logo: "/apple.png?height=100&width=100",
      color: "bg-gradient-to-br from-[#000000] to-[#222222]",
      content: ["Ted Lasso", "Severance", "The Morning Show", "Foundation", "Pachinko"],
    },
    {
      name: "Crunchyroll",
      logo: "/crunchyroll.avif?height=100&width=100",
      color: "bg-gradient-to-br from-[#F47521] to-[#D35718]",
      content: ["Demon Slayer", "Attack on Titan", "Jujutsu Kaisen", "One Piece", "My Hero Academia"],
    },
    {
      name: "Max",
      logo: "/max.png?height=100&width=100",
      color: "bg-gradient-to-br from-[#5E2AB2] to-[#3D1C74]",
      content: ["Game of Thrones", "Succession", "The Last of Us", "Euphoria", "House of the Dragon"],
    },
  ]

  return (
    <section id="platforms" className="relative bg-[#0a0118] py-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiM0Y2M5ZjAxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjw9L3N2Zz4=')] opacity-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#0a0118] to-transparent"></div>
        <div className="absolute left-0 right-0 top-0 h-1/2 bg-gradient-to-b from-[#0a0118] to-transparent"></div>
        <div className="absolute -left-[10%] top-[30%] h-[400px] w-[400px] animate-pulse rounded-full bg-[#4cc9f0]/10 blur-[120px]"></div>
        <div className="absolute -right-[10%] top-[60%] h-[350px] w-[350px] animate-pulse rounded-full bg-[#ff2970]/10 blur-[120px]"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-4 inline-block rounded-full bg-gradient-to-r from-[#ff2970]/20 to-[#4cc9f0]/20 px-4 py-1 backdrop-blur-sm"
          >
            <span className="bg-gradient-to-r from-[#ff2970] to-[#4cc9f0] bg-clip-text text-sm font-medium text-transparent">
              TOUT EN UN
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-bold text-white sm:text-4xl"
          >
            <span className="bg-gradient-to-r from-[#ff2970] to-[#ff9770] bg-clip-text text-transparent">
              9 Plateformes
            </span>{" "}
            Premium en Une
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-[#e2e2f5]"
          >
            Accédez à des milliers de films, séries et documentaires des meilleures plateformes de streaming
          </motion.p>
        </div>

        {/* Optimiser la grille des plateformes pour mobile */}
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-[#7b2cbf]/20 bg-[#150329]/40 shadow-lg transition-all duration-300 hover:border-[#7b2cbf]/40 hover:shadow-[0_0_20px_rgba(123,44,191,0.2)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#150329]/80 to-[#0a0118]/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              <div className={`flex h-20 sm:h-24 items-center justify-center ${platform.color}`}>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-20"></div>
                <img
                  src={platform.logo || "/placeholder.svg"}
                  alt={`${platform.name} logo`}
                  className="relative z-10 h-10 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="relative z-10 p-4 sm:p-6">
                <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold text-white">{platform.name}</h3>
                <ul className="mb-3 sm:mb-4 space-y-1">
                  {platform.content.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-center text-xs sm:text-sm text-[#e2e2f5]/90">
                      <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#ff2970] to-[#ff9770]"></span>
                      {item}
                    </li>
                  ))}
                  <li className="text-xs sm:text-sm italic text-[#e2e2f5]/70">Et bien plus...</li>
                </ul>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff2970] via-[#7b2cbf] to-[#4cc9f0] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 overflow-hidden rounded-xl border border-[#ff2970]/30 bg-gradient-to-r from-[#150329] to-[#0a0118] p-8 text-center shadow-[0_0_30px_rgba(255,41,112,0.2)]"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZjI5NzAxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-10"></div>

          <h3 className="relative mb-4 text-2xl font-bold text-white">
            Pourquoi payer pour{" "}
            <span className="bg-gradient-to-r from-[#ff2970] to-[#ff9770] bg-clip-text text-transparent">
              9 abonnements
            </span>{" "}
            différents ?
          </h3>

          <p className="relative mb-6 text-lg text-[#e2e2f5]">
            Avec Freecine, accédez à tout ce contenu pour seulement{" "}
            <span className="font-bold text-white">3500 FCFA (8$)</span> par an !
          </p>

          <Button
            asChild
            size="lg"
            className="relative overflow-hidden bg-gradient-to-r from-[#ff2970] to-[#ff9770] text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,41,112,0.5)]"
          >
            <Link href="#pricing">
              <span className="relative z-10">Acheter maintenant</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#ff2970] to-[#ff9770] opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
