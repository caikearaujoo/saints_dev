import "./globals.css"
import Header from "../components/navbar"
import Footer from "../components/footer"
import { nikea } from "../fonts/fonts"
import { Spotlight } from "../components/ui/spotlight-new"

// IMPORTANTE: Registre GSAP e ScrollTrigger AQUI, uma única vez para o aplicativo.
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={nikea.variable}>
      <head>{/* ... */}</head>
      <body className="bg-[#030303] text-[#ECECEC]">
        {/* Spotlight como fundo global do site */}
        <div className="fixed inset-0 w-screen h-screen z-[-10] pointer-events-none bg-[#030303]">
          <Spotlight />
        </div>

        {/* Conteúdo principal do site, que rola normalmente sobre o Spotlight */}
        <div className="relative z-0 min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
