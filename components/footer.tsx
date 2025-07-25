"use client"
import { Play, Mail, Phone, ShieldCheck, CreditCard, Clock } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0118] py-12">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-[10%] top-[30%] h-[300px] w-[300px] animate-pulse rounded-full bg-[#7b2cbf]/10 blur-[100px]"></div>
        <div className="absolute -right-[10%] top-[60%] h-[250px] w-[250px] animate-pulse rounded-full bg-[#ff2970]/10 blur-[100px]"></div>
        <div className="absolute left-0 top-0 h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgogIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgPHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmMjk3MDEwIiBzdHJva2Utd2lkdGg9IjEiLz4KICA8L3BhdHRlcm4+CjwvZGVmcz4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsI(#gridki)IiAvPgo8L3N2Zz4=')] opacity-10"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Optimiser le footer pour mobile */}
        <div className="mb-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="relative">
                <div className="absolute -inset-1 animate-pulse rounded-full bg-[#ff2970]/50 blur-md"></div>
                <Play className="relative h-6 w-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-[#ff2970] to-[#ff9770] bg-clip-text text-xl font-extrabold text-transparent">
                Freecine
              </span>
            </div>
            <p className="mb-4 text-sm sm:text-base text-[#e2e2f5]/80">
              Accédez au contenu premium de 9 plateformes de streaming dans une seule application à un prix imbattable.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#ff2970]/20 to-[#ff9770]/20 text-[#e2e2f5] transition-colors hover:text-[#ff2970]"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#ff2970]/20 to-[#ff9770]/20 text-[#e2e2f5] transition-colors hover:text-[#ff2970]"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#ff2970]/20 to-[#ff9770]/20 text-[#e2e2f5] transition-colors hover:text-[#ff2970]"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Liens Rapides</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link href="#features" className="text-[#e2e2f5]/80 transition-colors hover:text-[#ff2970]">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link href="#platforms" className="text-[#e2e2f5]/80 transition-colors hover:text-[#ff2970]">
                  Plateformes
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-[#e2e2f5]/80 transition-colors hover:text-[#ff2970]">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-[#e2e2f5]/80 transition-colors hover:text-[#ff2970]">
                  Témoignages
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-[#e2e2f5]/80 transition-colors hover:text-[#ff2970]">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
           

            <h3 className="mb-4 mt-6 text-lg font-semibold text-white">Moyens de Paiement</h3>
            <div className="flex flex-wrap gap-2">
              <div className="flex h-8 w-12 items-center justify-center rounded bg-white p-1">
                <img src="/visa.jpg?height=30&width=40" alt="Visa" className="h-full w-auto" />
              </div>
              <div className="flex h-8 w-12 items-center justify-center rounded bg-white p-1">
                <img src="/paypal.webp?height=30&width=40" alt="PayPal" className="h-full w-auto" />
              </div>
              <div className="flex h-8 w-12 items-center justify-center rounded bg-white p-1">
                <img src="/orange-money.png?height=30&width=40" alt="Orange Money" className="h-full w-auto" />
              </div>
              <div className="flex h-8 w-12 items-center justify-center rounded bg-white p-1">
                <img src="/MTN.png?height=30&width=40" alt="MTN Mobile Money" className="h-full w-auto" />
              </div>
              <div className="flex h-8 w-12 items-center justify-center rounded bg-white p-1">
                <img src="/moov.png?height=30&width=40" alt="Moov Money" className="h-full w-auto" />
              </div>
              <div className="flex h-8 w-12 items-center justify-center rounded bg-white p-1">
                <img src="/airtel.png?height=30&width=40" alt="Airtel Money" className="h-full w-auto" />
              </div>
              <div className="flex h-8 w-12 items-center justify-center rounded bg-white p-1">
                <img src="/wave.jpeg?height=30&width=40" alt="Wave" className="h-full w-auto" />
              </div>
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="mb-4 text-lg font-semibold text-white">Pourquoi Acheter Maintenant</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <CreditCard className="mt-0.5 h-5 w-5 shrink-0 text-[#ff2970]" />
                <span className="text-[#e2e2f5]/80">Économisez 66% sur le prix normal</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#ff2970]" />
                <span className="text-[#e2e2f5]/80">Garantie satisfait ou remboursé pendant 30 jours</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#ff2970]" />
                <span className="text-[#e2e2f5]/80">Offre à durée limitée - Prix bientôt en hausse</span>
              </li>
            </ul>
            <div className="mt-4">
              <Link
                href="#pricing"
                className="inline-block w-full sm:w-auto rounded-lg bg-gradient-to-r from-[#ff2970] to-[#ff9770] px-4 py-2 text-center text-white transition-transform hover:scale-105"
              >
                Acheter maintenant
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[#7b2cbf]/20 pt-6 text-center">
          <p className="text-sm text-[#e2e2f5]/60">
            &copy; {new Date().getFullYear()} Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
