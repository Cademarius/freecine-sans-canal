"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FAQ() {
  const faqs = [
    {
      question: "Comment fonctionne Freecine ?",
      answer:
        "Freecine est une application qui vous donne accès au contenu premium de 9 plateformes de streaming populaires (Netflix, Amazon Prime, Canal+, Disney+, TF1+, Paramount+, Apple TV+, Crunchyroll et Max) via une seule interface intuitive. Après votre abonnement, vous pouvez accéder à tout ce contenu sur vos appareils préférés.",
    },
    {
      question: "Sur quels appareils puis-je utiliser Freecine ?",
      answer:
        "Freecine est compatible avec la plupart des appareils modernes : smartphones (iPhone et Android), ordinateurs (PC et Mac), et Smart TV. Notre application s'adapte parfaitement à chaque écran pour une expérience optimale.",
    },
    {
      question: "Quelle est la qualité vidéo disponible ?",
      answer:
        "Freecine propose une qualité vidéo Ultra HD 4K pour une expérience visuelle exceptionnelle, à condition que votre appareil et votre connexion internet soient compatibles avec cette résolution.",
    },
    {
      question: "Puis-je changer la langue des films et séries ?",
      answer:
        "Absolument ! Freecine vous permet de choisir entre le français et la version originale sous-titrée en français (VOSTFR) pour la plupart des contenus, selon vos préférences.",
    },
    {
      question: "Comment fonctionne l'abonnement ?",
      answer:
        "L'abonnement à Freecine est annuel, au prix de 5000 FCFA (environ 8$) par an. Vous pouvez annuler à tout moment. Nous proposons également une garantie satisfait ou remboursé de 30 jours.",
    },
    {
      question: "Est-ce légal d'accéder à tout ce contenu pour ce prix ?",
      answer:
        "Freecine est une application légale qui vous permet d'accéder au contenu premium des plateformes de streaming à un tarif avantageux grâce à des accords spécifiques et des optimisations techniques.",
    },
    {
      question: "Puis-je télécharger du contenu pour le regarder hors-ligne ?",
      answer:
        "Oui, Freecine permet de télécharger films et séries pour les regarder sans connexion internet, idéal pour les voyages ou les zones à faible couverture réseau.",
    },
    {
      question: "Comment contacter le support client ?",
      answer:
        "Notre équipe de support client est disponible 24/7 via l'application ou par email à support@freecine.com pour répondre à toutes vos questions.",
    },
  ]

  return (
    <section id="faq" className="relative bg-[#0a0118] py-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-[10%] top-[20%] h-[400px] w-[400px] animate-pulse rounded-full bg-[#4cc9f0]/10 blur-[120px]"></div>
        <div className="absolute -right-[10%] top-[60%] h-[350px] w-[350px] animate-pulse rounded-full bg-[#7b2cbf]/10 blur-[120px]"></div>
        <div className="absolute left-0 top-0 h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiM0Y2M5ZjAxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-10"></div>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-4 inline-block rounded-full bg-gradient-to-r from-[#ff2970]/20 to-[#4cc9f0]/20 px-4 py-1 backdrop-blur-sm"
          >
            <span className="bg-gradient-to-r from-[#ff2970] to-[#4cc9f0] bg-clip-text text-sm font-medium text-transparent">
              FAQ
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-bold text-white sm:text-4xl"
          >
            Questions{" "}
            <span className="bg-gradient-to-r from-[#ff2970] to-[#ff9770] bg-clip-text text-transparent">
              Fréquentes
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-[#e2e2f5]"
          >
            Tout ce que vous devez savoir sur Freecine
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-xl border border-[#7b2cbf]/30 bg-gradient-to-r from-[#150329]/80 to-[#0a0118]/80 p-6 shadow-[0_0_30px_rgba(123,44,191,0.2)] backdrop-blur-md"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-20 rounded-xl pointer-events-none"></div>

          <Accordion type="single" collapsible className="relative z-10 w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group border-[#7b2cbf]/20 px-0 transition-all duration-300 hover:border-[#7b2cbf]/40"
              >
                <AccordionTrigger className="text-left font-medium text-white hover:text-[#ff2970] [&[data-state=open]>svg]:text-[#ff2970]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#e2e2f5]/90">
                  <div className="rounded-lg bg-gradient-to-r from-[#150329]/80 to-[#0a0118]/80 p-4">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 overflow-hidden rounded-xl border border-[#4cc9f0]/30 bg-gradient-to-r from-[#150329] to-[#0a0118] p-8 text-center shadow-[0_0_30px_rgba(76,201,240,0.2)]"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiM0Y2M5ZjAxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-10 pointer-events-none"></div>

          <h3 className="relative mb-4 text-2xl font-bold text-white">
            Vous avez d'autres{" "}
            <span className="bg-gradient-to-r from-[#4cc9f0] to-[#7b2cbf] bg-clip-text text-transparent">
              questions
            </span>{" "}
            ?
          </h3>

          <p className="relative mb-6 text-lg text-[#e2e2f5]">
            N'hésitez pas à contacter notre équipe de support disponible 24/7
          </p>

          <Button
            asChild
            size="lg"
            className="relative overflow-hidden bg-gradient-to-r from-[#4cc9f0] to-[#7b2cbf] text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(76,201,240,0.5)]"
          >
            <Link href="mailto:support@freecine.com">
              <span className="relative z-10">Contacter le support</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#4cc9f0] to-[#7b2cbf] opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
