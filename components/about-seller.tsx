"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react"

export default function AboutSeller() {
  return (
    <section id="about-seller" className="relative bg-[#0a0118] py-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-[10%] top-[30%] h-[400px] w-[400px] animate-pulse rounded-full bg-[#ff2970]/10 blur-[120px]"></div>
        <div className="absolute -right-[10%] top-[60%] h-[350px] w-[350px] animate-pulse rounded-full bg-[#4cc9f0]/10 blur-[120px]"></div>
        <div className="absolute left-0 top-0 h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZjI5NzAxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-10"></div>
      </div>

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-4 inline-block rounded-full bg-gradient-to-r from-[#ff2970]/20 to-[#4cc9f0]/20 px-4 py-1 backdrop-blur-sm"
          >
            <span className="bg-gradient-to-r from-[#ff2970] to-[#4cc9f0] bg-clip-text text-sm font-medium text-transparent">
              À PROPOS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-bold text-white sm:text-4xl"
          >
            À Propos du{" "}
            <span className="bg-gradient-to-r from-[#ff2970] to-[#ff9770] bg-clip-text text-transparent">Vendeur</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-[#e2e2f5]"
          >
            Faites confiance à un partenaire de streaming établi
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-2"
        >
          <Card className="group relative overflow-hidden border-[#ff2970]/20 bg-[#150329]/40 shadow-md backdrop-blur-md transition-all duration-300 hover:border-[#ff2970]/40 hover:shadow-[0_0_20px_rgba(255,41,112,0.2)]">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-20"></div>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#ff2970] via-[#7b2cbf] to-[#4cc9f0] transition-all duration-500 group-hover:w-full"></div>

            <CardContent className="relative z-10 p-6">
              <div className="mb-4 flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full">
                  <div className="absolute -inset-0.5 animate-pulse rounded-full bg-gradient-to-r from-[#ff2970] to-[#ff9770] opacity-70 blur-sm"></div>
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="Logo Freecine"
                    className="relative h-full w-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">DigitAfrik Store</h3>
                  <p className="text-sm text-[#e2e2f5]/70">Votre partenaire de streaming depuis 2023</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#ff2970]/20 to-[#ff9770]/20">
                    <MapPin className="h-4 w-4 text-[#ff2970]" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Adresse</p>
                    <p className="text-sm text-[#e2e2f5]/70">Porto Novo</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#ff2970]/20 to-[#ff9770]/20">
                    <Mail className="h-4 w-4 text-[#ff2970]" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-sm text-[#e2e2f5]/70">gbetievladimir@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#ff2970]/20 to-[#ff9770]/20">
                    <Phone className="h-4 w-4 text-[#ff2970]" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Téléphone</p>
                    <p className="text-sm text-[#e2e2f5]/70">229 01 67 22 19 58</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-[#4cc9f0]/20 bg-[#150329]/40 shadow-md backdrop-blur-md transition-all duration-300 hover:border-[#4cc9f0]/40 hover:shadow-[0_0_20px_rgba(76,201,240,0.2)]">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-20"></div>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#4cc9f0] via-[#7b2cbf] to-[#ff2970] transition-all duration-500 group-hover:w-full"></div>

            <CardContent className="relative z-10 p-6">
              <h3 className="mb-4 text-xl font-bold text-white">Pourquoi nous faire confiance</h3>

              <div className="space-y-4">
                {[
                  "Plus de 50,000 clients satisfaits",
                  "Support client réactif disponible 24/7",
                  "Mises à jour régulières de l'application",
                  "Garantie satisfait ou remboursé de 30 jours",
                  "Paiement sécurisé",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#4cc9f0] to-[#7b2cbf]">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-[#e2e2f5]/90">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  { text: "Livraison rapide", color: "from-[#ff2970]/20 to-[#ff9770]/20", textColor: "text-[#ff2970]" },
                  { text: "Support premium", color: "from-[#7b2cbf]/20 to-[#5a189a]/20", textColor: "text-[#7b2cbf]" },
                  {
                    text: "Mise à jour gratuite",
                    color: "from-[#4cc9f0]/20 to-[#4361ee]/20",
                    textColor: "text-[#4cc9f0]",
                  },
                ].map((badge, index) => (
                  <div
                    key={index}
                    className={`rounded-md bg-gradient-to-r ${badge.color} px-3 py-1 text-sm font-medium ${badge.textColor}`}
                  >
                    {badge.text}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
