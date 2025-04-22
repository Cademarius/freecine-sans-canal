import { Suspense } from "react"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Platforms from "@/components/platforms"
import Pricing from "@/components/pricing"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import AppShowcase from "@/components/app-showcase"
import AboutSeller from "@/components/about-seller"
import UrgencyPopup from "@/components/urgency-popup"
import { Toaster } from "@/components/ui/toaster"
import FloatingCTA from "@/components/floating-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0118]">
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <Features />
        <Platforms />
        <Pricing />
        <AppShowcase />
        <Testimonials />
        <FAQ />
        <AboutSeller />
        <Footer />
        <UrgencyPopup />
        <FloatingCTA />
      </Suspense>
      <Toaster />
    </main>
  )
}
