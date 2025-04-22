"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Smartphone, Laptop, Tv, Check, ShieldCheck, Zap, DollarSign } from "lucide-react"
import Link from "next/link"

export default function AppShowcase() {
  const devices = [
    {
      name: "Mobile / PC / Mac / Smart TV",
      icon: <Smartphone className="h-6 w-6 text-[#ff2970]" />,
      image: "/mobile.jpg?height=300&width=300",
      description: "Emportez vos films et séries partout avec vous",
      gradient: "from-[#ff2970]/20 to-[#ff9770]/20",
      border: "border-[#ff2970]/30",
      hoverBorder: "hover:border-[#ff2970]/60",
      shadow: "hover:shadow-[0_0_30px_rgba(255,41,112,0.3)]",
      benefits: [
        "Téléchargement pour visionnage hors-ligne",
        "Streaming fluide même en 4G/5G",
        "Notifications pour les nouveautés",
        "Contrôle parental intégré",
        "Synchronisation entre tous vos appareils",
      ],
    }
  ]

  return (
    <section className="relative bg-[#0a0118] py-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-[10%] top-[20%] h-[400px] w-[400px] animate-pulse rounded-full bg-[#ff2970]/10 blur-[120px]"></div>
        <div className="absolute -right-[10%] top-[60%] h-[350px] w-[350px] animate-pulse rounded-full bg-[#4cc9f0]/10 blur-[120px]"></div>
        <div className="absolute left-0 top-0 h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiM3YjJjYmYxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-10"></div>
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
              MULTI-APPAREILS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-bold text-white sm:text-4xl"
          >
            Une Interface{" "}
            <span className="bg-gradient-to-r from-[#ff2970] to-[#ff9770] bg-clip-text text-transparent">
              Intuitive
            </span>{" "}
            sur Tous vos Appareils
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-[#e2e2f5]"
          >
            Freecine s'adapte parfaitement à tous vos écrans pour une expérience optimale
          </motion.p>
        </div>

        <div className="space-y-20 sm:space-y-32">
          {devices.map((device, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col items-center gap-8 lg:flex-row ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="w-full lg:w-1/2">
                <div className="group relative overflow-hidden rounded-xl">
                  <div
                    className={`absolute -inset-0.5 animate-pulse rounded-xl bg-gradient-to-r ${index % 3 === 0 ? "from-[#ff2970] to-[#ff9770]" : index % 3 === 1 ? "from-[#7b2cbf] to-[#5a189a]" : "from-[#4cc9f0] to-[#4361ee]"} opacity-70 blur-sm transition-opacity duration-300 group-hover:opacity-100`}
                  ></div>
                  <div
                    className={`relative overflow-hidden rounded-xl border ${device.border} bg-gradient-to-br ${device.gradient} transition-all duration-300 ${device.hoverBorder} ${device.shadow}`}
                  >
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-20"></div>
                    <img
                      src={device.image || "/placeholder.svg"}
                      alt={`Freecine sur ${device.name}`}
                      className="relative z-10 h-auto w-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118]/90 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="absolute -inset-1 animate-pulse rounded-full bg-gradient-to-r from-[#ff2970]/30 to-[#4cc9f0]/30 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"></div>
                    {device.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{device.name}</h3>
                </div>

                <p className="my-3 sm:my-4 text-base sm:text-lg text-[#e2e2f5]">{device.description}</p>

                <ul className="mb-4 sm:mb-6 space-y-2 sm:space-y-3">
                  {device.benefits.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#ff2970] to-[#ff9770]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm sm:text-base text-[#e2e2f5]/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <div className="flex items-center gap-2 rounded-full bg-[#150329]/40 px-3 py-1.5 backdrop-blur-md">
                    <ShieldCheck className="h-4 w-4 text-[#4cc9f0]" />
                    <span className="text-xs sm:text-sm text-[#e2e2f5]">Sécurisé</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-[#150329]/40 px-3 py-1.5 backdrop-blur-md">
                    <Zap className="h-4 w-4 text-[#ff9770]" />
                    <span className="text-xs sm:text-sm text-[#e2e2f5]">Ultra-rapide</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-[#150329]/40 px-3 py-1.5 backdrop-blur-md">
                    <DollarSign className="h-4 w-4 text-[#7b2cbf]" />
                    <span className="text-xs sm:text-sm text-[#e2e2f5]">Économique</span>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6">
                  <Button
                    asChild
                    className={`relative w-full sm:w-auto overflow-hidden bg-gradient-to-r ${index % 3 === 0 ? "from-[#ff2970] to-[#ff9770]" : index % 3 === 1 ? "from-[#7b2cbf] to-[#5a189a]" : "from-[#4cc9f0] to-[#4361ee]"} text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,41,112,0.5)]`}
                  >
                    <Link href="#pricing">
                      <span className="relative z-10">Acheter maintenant</span>
                      <span
                        className={`absolute inset-0 bg-gradient-to-r ${index % 3 === 0 ? "from-[#ff2970] to-[#ff9770]" : index % 3 === 1 ? "from-[#7b2cbf] to-[#5a189a]" : "from-[#4cc9f0] to-[#4361ee]"} opacity-0 transition-opacity duration-300 hover:opacity-100`}
                      ></span>
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
