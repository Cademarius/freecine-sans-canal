"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Pause, Volume2, VolumeX, Star, Quote, ShoppingCart } from "lucide-react"
import Link from "next/link"

export default function Testimonials() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const testimonials = [
    {
      name: "Sophie M.",
      location: "Abidjan",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Freecine a complètement changé ma façon de regarder des films et séries. Plus besoin de jongler entre différentes applications, tout est au même endroit. La qualité 4K est impressionnante ! J'économise plus de 45000 FCFA chaque mois.",
      verified: true,
    },
    {
      name: "Jean-Paul K.",
      location: "Dakar",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Je cherchais une solution pour accéder à toutes mes plateformes préférées sans payer plusieurs abonnements. Freecine est exactement ce qu'il me fallait. L'interface est intuitive et la qualité est au rendez-vous. Achat que je ne regrette absolument pas !",
      verified: true,
    },
    {
      name: "Aminata D.",
      location: "Douala",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Pouvoir choisir entre français et VOSTFR est un vrai plus. Je recommande Freecine à tous mes amis, c'est un excellent rapport qualité-prix ! Le support client est également très réactif. Meilleur achat de l'année !",
      verified: true,
    },
    {
      name: "Omar T.",
      location: "Bamako",
      image: "/placeholder.svg?height=100&width=100",
      rating: 4,
      text: "Application très complète qui me permet d'accéder à tout mon contenu préféré. Le prix est imbattable comparé à ce qu'il faudrait payer pour tous ces services séparément. J'ai hésité avant d'acheter, mais je ne regrette pas du tout mon investissement.",
      verified: true,
    },
  ]

  const audioTestimonials = [
    {
      name: "Michel F.",
      location: "Libreville",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      duration: "0:45",
      verified: true,
    },
    {
      name: "Fatou S.",
      location: "Conakry",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      duration: "1:12",
      verified: true,
    },
  ]

  const imageTestimonials = [
    {
      name: "Kofi A.",
      location: "Accra",
      profileImage: "/placeholder.svg?height=100&width=100",
      testimonialImage: "/placeholder.svg?height=400&width=600",
      rating: 5,
      caption: "Regarder la finale de la CAN en 4K sur Freecine, une expérience incroyable !",
      verified: true,
    },
    {
      name: "Mariam L.",
      location: "Abidjan",
      profileImage: "/placeholder.svg?height=100&width=100",
      testimonialImage: "/placeholder.svg?height=400&width=600",
      rating: 5,
      caption: "Soirée cinéma en famille avec Freecine. Tous mes enfants adorent !",
      verified: true,
    },
    {
      name: "Pascal N.",
      location: "Yaoundé",
      profileImage: "/placeholder.svg?height=100&width=100",
      testimonialImage: "/placeholder.svg?height=400&width=600",
      rating: 5,
      caption: "Interface Freecine sur ma Smart TV. Qualité exceptionnelle !",
      verified: true,
    },
    {
      name: "Aïcha D.",
      location: "Dakar",
      profileImage: "/placeholder.svg?height=100&width=100",
      testimonialImage: "/placeholder.svg?height=400&width=600",
      rating: 5,
      caption: "Je peux maintenant regarder mes séries préférées partout grâce à Freecine !",
      verified: true,
    },
  ]

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <section id="testimonials" className="relative bg-[#0a0118] py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-[10%] top-[30%] h-[400px] w-[400px] animate-pulse rounded-full bg-[#7b2cbf]/10 blur-[120px]"></div>
        <div className="absolute -right-[10%] top-[60%] h-[350px] w-[350px] animate-pulse rounded-full bg-[#ff2970]/10 blur-[120px]"></div>
        <div className="absolute left-0 top-0 h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZjI5NzAxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-10"></div>
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
              TÉMOIGNAGES CLIENTS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-bold text-white sm:text-4xl"
          >
            Ils ont{" "}
            <span className="bg-gradient-to-r from-[#ff2970] to-[#ff9770] bg-clip-text text-transparent">Acheté</span>{" "}
            et Adoré Freecine
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-[#e2e2f5]"
          >
            Découvrez les témoignages de nos clients satisfaits qui économisent chaque mois
          </motion.p>
        </div>

        <Tabs defaultValue="text" className="w-full">
          <TabsList className="mx-auto mb-8 grid w-full max-w-lg grid-cols-3 border border-[#7b2cbf]/30 bg-[#150329]/40 backdrop-blur-md">
            <TabsTrigger
              value="text"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#ff2970] data-[state=active]:to-[#ff9770] data-[state=active]:text-white"
            >
              Témoignages écrits
            </TabsTrigger>
            <TabsTrigger
              value="audio"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#4cc9f0] data-[state=active]:to-[#7b2cbf] data-[state=active]:text-white"
            >
              Témoignages audio
            </TabsTrigger>
            <TabsTrigger
              value="images"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#7b2cbf] data-[state=active]:to-[#ff2970] data-[state=active]:text-white"
            >
              Témoignages images
            </TabsTrigger>
          </TabsList>

          <TabsContent value="text">
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group relative h-full overflow-hidden border-[#7b2cbf]/20 bg-[#150329]/40 shadow-md backdrop-blur-md transition-all duration-300 hover:border-[#7b2cbf]/40 hover:shadow-[0_0_20px_rgba(123,44,191,0.2)]">
                    <div className="absolute -right-4 -top-4 rotate-12 text-[#ff2970]/10">
                      <Quote className="h-16 w-16" />
                    </div>
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#ff2970] via-[#7b2cbf] to-[#4cc9f0] transition-all duration-500 group-hover:w-full"></div>

                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center gap-4">
                        <div className="relative h-16 w-16 overflow-hidden rounded-full">
                          <div className="absolute -inset-0.5 animate-pulse rounded-full bg-gradient-to-r from-[#ff2970] to-[#ff9770] opacity-70 blur-sm"></div>
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="relative h-full w-full rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-semibold text-white">{testimonial.name}</p>
                            {testimonial.verified && (
                              <span className="flex items-center rounded-full bg-[#4cc9f0]/20 px-2 py-0.5 text-xs text-[#4cc9f0]">
                                ✓ Achat vérifié
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-[#e2e2f5]/70">{testimonial.location}</p>
                          <div className="mt-1 flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < testimonial.rating ? "fill-[#ffca0f] text-[#ffca0f]" : "text-[#e2e2f5]/30"}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-[#e2e2f5]/90">{testimonial.text}</p>

                      <div className="mt-4 flex justify-end">
                        <Button
                          asChild
                          size="sm"
                          className="relative overflow-hidden bg-gradient-to-r from-[#ff2970] to-[#ff9770] text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,41,112,0.4)]"
                        >
                          <Link href="#pricing">
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            <span className="relative z-10">Acheter comme eux</span>
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="audio">
            <div className="grid gap-6 md:grid-cols-2">
              {audioTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group relative h-full overflow-hidden border-[#4cc9f0]/20 bg-[#150329]/40 shadow-md backdrop-blur-md transition-all duration-300 hover:border-[#4cc9f0]/40 hover:shadow-[0_0_20px_rgba(76,201,240,0.2)]">
                    <div className="absolute -right-4 -top-4 rotate-12 text-[#4cc9f0]/10">
                      <Quote className="h-16 w-16" />
                    </div>
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#4cc9f0] via-[#7b2cbf] to-[#ff2970] transition-all duration-500 group-hover:w-full"></div>

                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center gap-4">
                        <div className="relative h-16 w-16 overflow-hidden rounded-full">
                          <div className="absolute -inset-0.5 animate-pulse rounded-full bg-gradient-to-r from-[#4cc9f0] to-[#7b2cbf] opacity-70 blur-sm"></div>
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="relative h-full w-full rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-semibold text-white">{testimonial.name}</p>
                            {testimonial.verified && (
                              <span className="flex items-center rounded-full bg-[#4cc9f0]/20 px-2 py-0.5 text-xs text-[#4cc9f0]">
                                ✓ Achat vérifié
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-[#e2e2f5]/70">{testimonial.location}</p>
                          <div className="mt-1 flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < testimonial.rating ? "fill-[#ffca0f] text-[#ffca0f]" : "text-[#e2e2f5]/30"}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="relative flex items-center justify-between overflow-hidden rounded-lg bg-gradient-to-r from-[#4cc9f0]/20 to-[#7b2cbf]/20 p-3">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-20"></div>

                        <button
                          onClick={togglePlay}
                          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#4cc9f0] to-[#7b2cbf] text-white transition-transform duration-300 hover:scale-110"
                        >
                          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 pl-0.5" />}
                        </button>

                        <div className="relative z-10 mx-2 h-2 flex-1 overflow-hidden rounded-full bg-[#e2e2f5]/20">
                          <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-[#4cc9f0] to-[#7b2cbf]"></div>
                        </div>

                        <button
                          onClick={toggleMute}
                          className="relative z-10 text-[#e2e2f5]/70 transition-colors duration-300 hover:text-white"
                        >
                          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                        </button>

                        <span className="relative z-10 ml-2 text-sm text-[#e2e2f5]/70">{testimonial.duration}</span>
                      </div>

                      <div className="mt-4 flex justify-end">
                        <Button
                          asChild
                          size="sm"
                          className="relative overflow-hidden bg-gradient-to-r from-[#4cc9f0] to-[#7b2cbf] text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(76,201,240,0.4)]"
                        >
                          <Link href="#pricing">
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            <span className="relative z-10">Acheter maintenant</span>
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="images">
            <div className="grid gap-6 md:grid-cols-2">
              {imageTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group relative h-full overflow-hidden border-[#7b2cbf]/20 bg-[#150329]/40 shadow-md backdrop-blur-md transition-all duration-300 hover:border-[#7b2cbf]/40 hover:shadow-[0_0_20px_rgba(123,44,191,0.2)]">
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#7b2cbf] via-[#ff2970] to-[#4cc9f0] transition-all duration-500 group-hover:w-full"></div>

                    <CardContent className="p-0">
                      <div className="relative h-48 w-full overflow-hidden">
                        <div className="absolute -inset-0.5 animate-pulse rounded-t-xl bg-gradient-to-r from-[#7b2cbf] to-[#ff2970] opacity-70 blur-sm"></div>
                        <img
                          src={testimonial.testimonialImage || "/placeholder.svg"}
                          alt={`Témoignage de ${testimonial.name}`}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="p-4">
                        <div className="mb-3 flex items-center gap-3">
                          <div className="relative h-12 w-12 overflow-hidden rounded-full">
                            <div className="absolute -inset-0.5 animate-pulse rounded-full bg-gradient-to-r from-[#7b2cbf] to-[#ff2970] opacity-70 blur-sm"></div>
                            <img
                              src={testimonial.profileImage || "/placeholder.svg"}
                              alt={testimonial.name}
                              className="relative h-full w-full rounded-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-semibold text-white">{testimonial.name}</p>
                              {testimonial.verified && (
                                <span className="flex items-center rounded-full bg-[#7b2cbf]/20 px-2 py-0.5 text-xs text-[#7b2cbf]">
                                  ✓ Achat vérifié
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-[#e2e2f5]/70">{testimonial.location}</p>
                          </div>
                        </div>

                        <p className="mb-2 text-[#e2e2f5]/90">{testimonial.caption}</p>

                        <div className="mb-3 flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < testimonial.rating ? "fill-[#ffca0f] text-[#ffca0f]" : "text-[#e2e2f5]/30"}`}
                            />
                          ))}
                        </div>

                        <div className="flex justify-end">
                          <Button
                            asChild
                            size="sm"
                            className="relative overflow-hidden bg-gradient-to-r from-[#7b2cbf] to-[#ff2970] text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(123,44,191,0.4)]"
                          >
                            <Link href="#pricing">
                              <ShoppingCart className="mr-2 h-4 w-4" />
                              <span className="relative z-10">Acheter maintenant</span>
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 overflow-hidden rounded-xl border border-[#ff2970]/30 bg-gradient-to-r from-[#150329] to-[#0a0118] p-8 text-center shadow-[0_0_30px_rgba(255,41,112,0.2)]"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZjI5NzAxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-10"></div>

          <h3 className="relative mb-4 text-2xl font-bold text-white">
            Rejoignez plus de{" "}
            <span className="bg-gradient-to-r from-[#ff2970] to-[#ff9770] bg-clip-text text-transparent">
              50 000 clients
            </span>{" "}
            satisfaits
          </h3>

          <p className="relative mb-6 text-lg text-[#e2e2f5]">
            Ne manquez pas cette opportunité de transformer votre expérience de streaming et d'économiser 90% sur vos
            abonnements
          </p>

          <Button
            asChild
            size="lg"
            className="relative overflow-hidden bg-gradient-to-r from-[#ff2970] to-[#ff9770] text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,41,112,0.5)]"
          >
            <Link href="#pricing">
              <span className="relative z-10">Acheter Freecine maintenant</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#ff2970] to-[#ff9770] opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
