"use client"

import { motion } from "framer-motion"
import { Check, Globe, Tv, Smartphone, Zap, ShieldCheck, DollarSign, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Features() {
  const features = [
    {
      icon: <Globe className="h-10 w-10 text-[#4cc9f0]" />,
      title: "Français ou VOSTFR",
      description: "Choisissez la langue de votre choix pour tous vos films, séries et animés préférés.",
      color: "from-[#4cc9f0]/20 to-[#4361ee]/20",
      borderColor: "border-[#4cc9f0]/30",
      hoverBorderColor: "hover:border-[#4cc9f0]/60",
      shadowColor: "hover:shadow-[0_0_15px_rgba(76,201,240,0.3)]",
    },
    {
      icon: <Tv className="h-10 w-10 text-[#7b2cbf]" />,
      title: "Multi-appareils",
      description: "Disponible sur Smart TV, iPhone, Android et PC pour une expérience fluide sur tous vos écrans.",
      color: "from-[#7b2cbf]/20 to-[#5a189a]/20",
      borderColor: "border-[#7b2cbf]/30",
      hoverBorderColor: "hover:border-[#7b2cbf]/60",
      shadowColor: "hover:shadow-[0_0_15px_rgba(123,44,191,0.3)]",
    },
    {
      icon: <Zap className="h-10 w-10 text-[#ff9770]" />,
      title: "Ultra HD 4K",
      description: "Profitez d'une qualité d'image exceptionnelle pour une immersion totale.",
      color: "from-[#ff9770]/20 to-[#ff7d50]/20",
      borderColor: "border-[#ff9770]/30",
      hoverBorderColor: "hover:border-[#ff9770]/60",
      shadowColor: "hover:shadow-[0_0_15px_rgba(255,151,112,0.3)]",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-[#ff2970]" />,
      title: "Interface intuitive",
      description: "Navigation simple et rapide pour trouver facilement votre contenu préféré.",
      color: "from-[#ff2970]/20 to-[#f72585]/20",
      borderColor: "border-[#ff2970]/30",
      hoverBorderColor: "hover:border-[#ff2970]/60",
      shadowColor: "hover:shadow-[0_0_15px_rgba(255,41,112,0.3)]",
    },
  ]

  const keyBenefits = [
    {
      icon: <DollarSign className="h-12 w-12 text-[#ff2970]" />,
      title: "Économisez Gros",
      description:
        "Payez 3500 FCFA par an au lieu de 50000 FCFA pour accéder à 9 plateformes premium. Une économie de 90% tous les mois !",
      color: "from-[#ff2970]/20 to-[#ff9770]/20",
      borderColor: "border-[#ff2970]/30",
      buttonColor: "from-[#ff2970] to-[#ff9770]",
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-[#7b2cbf]" />,
      title: "Fiabilité et Sécurité",
      description:
        "Accès 100% légal et sécurisé. Paiement protégé et garantie satisfait ou remboursé pendant 30 jours.",
      color: "from-[#7b2cbf]/20 to-[#5a189a]/20",
      borderColor: "border-[#7b2cbf]/30",
      buttonColor: "from-[#7b2cbf] to-[#5a189a]",
    },
    {
      icon: <Award className="h-12 w-12 text-[#4cc9f0]" />,
      title: "Qualité Premium",
      description:
        "Streaming en Ultra HD 4K, sans publicités, avec téléchargement disponible pour regarder hors-ligne.",
      color: "from-[#4cc9f0]/20 to-[#4361ee]/20",
      borderColor: "border-[#4cc9f0]/30",
      buttonColor: "from-[#4cc9f0] to-[#4361ee]",
    },
  ]

  return (
    <section id="features" className="relative bg-[#0a0118] py-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-[10%] top-[20%] h-[300px] w-[300px] animate-pulse rounded-full bg-[#7b2cbf]/10 blur-[100px]"></div>
        <div className="absolute -right-[5%] top-[50%] h-[250px] w-[250px] animate-pulse rounded-full bg-[#ff2970]/10 blur-[100px]"></div>
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
              POURQUOI CHOISIR FREECINE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-bold text-white sm:text-4xl"
          >
            Une Expérience de Streaming{" "}
            <span className="bg-gradient-to-r from-[#ff2970] to-[#ff9770] bg-clip-text text-transparent">
              Révolutionnaire
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-[#e2e2f5]"
          >
            Une seule application pour accéder à tout le contenu premium de vos plateformes préférées
          </motion.p>
        </div>

        {/* Key Benefits Section */}
        <div className="mb-20 grid gap-8 md:grid-cols-3">
          {keyBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-xl border ${benefit.borderColor} bg-gradient-to-br ${benefit.color} p-6 backdrop-blur-md transition-all duration-300 hover:border-opacity-60 hover:shadow-lg`}
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/5"></div>
              <div className="absolute bottom-0 left-0 h-32 w-32 translate-x-[-40%] translate-y-[40%] rounded-full bg-white/5"></div>

              <div className="relative mb-4 flex justify-center">
                <div className="absolute -inset-1 animate-pulse rounded-full bg-gradient-to-r from-[#ff2970]/30 to-[#4cc9f0]/30 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"></div>
                {benefit.icon}
              </div>

              <h3 className="relative mb-3 text-center text-xl font-bold text-white sm:text-2xl">{benefit.title}</h3>
              <p className="relative mb-6 text-center text-sm text-[#e2e2f5]/90 sm:text-base">{benefit.description}</p>

              <div className="flex justify-center">
                <Button
                  asChild
                  className={`relative w-full overflow-hidden bg-gradient-to-r ${benefit.buttonColor} text-white transition-all duration-300 hover:shadow-lg sm:w-auto`}
                >
                  <Link href="#pricing">
                    <span className="relative z-10">Acheter maintenant</span>
                    <span
                      className={`absolute inset-0 bg-gradient-to-r ${benefit.buttonColor} opacity-0 transition-opacity duration-300 hover:opacity-100`}
                    ></span>
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-xl border ${feature.borderColor} bg-gradient-to-br ${feature.color} p-6 backdrop-blur-md transition-all duration-300 ${feature.hoverBorderColor} ${feature.shadowColor}`}
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/5"></div>
              <div className="absolute bottom-0 left-0 h-32 w-32 translate-x-[-40%] translate-y-[40%] rounded-full bg-white/5"></div>

              <div className="relative mb-4">
                <div className="absolute -inset-1 animate-pulse rounded-full bg-gradient-to-r from-[#ff2970]/30 to-[#4cc9f0]/30 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"></div>
                {feature.icon}
              </div>

              <h3 className="relative mb-2 text-xl font-bold text-white">{feature.title}</h3>
              <p className="relative text-[#e2e2f5]/90">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Button
              asChild
              size="lg"
              className="relative overflow-hidden bg-gradient-to-r from-[#ff2970] to-[#ff9770] text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,41,112,0.5)]"
            >
              <Link href="#pricing">
                <span className="relative z-10">Obtenir Freecine maintenant</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#ff2970] to-[#ff9770] opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 overflow-hidden rounded-xl border border-[#7b2cbf]/30 bg-gradient-to-r from-[#150329] to-[#0a0118] p-8 shadow-[0_0_25px_rgba(123,44,191,0.2)]"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                Tout le contenu premium en{" "}
                <span className="bg-gradient-to-r from-[#ff2970] to-[#4cc9f0] bg-clip-text text-transparent">
                  un seul endroit
                </span>
              </h3>
              <p className="mb-6 text-[#e2e2f5]/90">
                Freecine vous donne accès à des milliers de films, séries et documentaires des meilleures plateformes de
                streaming au monde.
              </p>
              <ul className="space-y-3">
                {[
                  "Accès illimité à 9 plateformes premium",
                  "Contenu en français ou VOSTFR",
                  "Qualité Ultra HD 4K",
                  "Compatible avec tous vos appareils",
                  "Interface intuitive et personnalisable",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mr-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#ff2970] to-[#ff9770]">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-[#e2e2f5]/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="group relative h-64 w-64 overflow-hidden rounded-xl">
                <div className="absolute -inset-0.5 animate-pulse rounded-xl bg-[#ff2970] opacity-70 blur-sm transition-all duration-300 group-hover:opacity-100"></div>
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <img
                    src="/freecine.png?height=400&width=400"
                    alt="Freecine App Interface"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118]/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-medium text-white">Interface intuitive et moderne</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
