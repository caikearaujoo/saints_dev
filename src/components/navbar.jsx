"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import { JoinTeamButton } from "./signup-buttons"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const headerClasses = `fixed top-0 left-0 w-full px-4 sm:px-10 py-4 flex items-center justify-between z-50 bg-[#030303]/30 backdrop-blur-none`

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80 // Ajuste para altura da navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={headerClasses}>
      {/* LOGO */}
      <div className="relative w-[120px] h-[40px]">
        <Link href="/">
          <Image src="/imgs/logo-saints.svg" alt="UFU Saints" fill style={{ objectFit: "contain" }} priority />
        </Link>
      </div>

      {/* LINKS - Desktop */}
      <nav className="hidden md:flex gap-8 items-center text-[#ECECEC] font-medium">
        <Link
          href="#sobre-nos"
          onClick={(e) => handleSmoothScroll(e, "sobre-nos")}
          className="hover:text-[#ffc700] transition-colors"
        >
          Sobre nós
        </Link>
        <Link
          href="#times"
          onClick={(e) => handleSmoothScroll(e, "times")}
          className="hover:text-[#ffc700] transition-colors"
        >
          Times
        </Link>
        <Link
          href="#redes-sociais"
          onClick={(e) => handleSmoothScroll(e, "redes-sociais")}
          className="hover:text-[#ffc700] transition-colors"
        >
          Redes sociais
        </Link>
        <JoinTeamButton className="bg-[#f1d85a] text-[#030303] hover:bg-[#ffc700] px-6 py-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer" />
      </nav>

      {/* Botão Hamburger - Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} aria-label="Abrir menu" className="text-[#ECECEC] focus:outline-none">
          {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-[#030303]/80 backdrop-blur-md md:hidden flex flex-col items-center gap-6 py-8 text-[#ECECEC] font-medium">
          <Link
            href="#sobre-nos"
            onClick={(e) => handleSmoothScroll(e, "sobre-nos")}
            className="hover:text-[#ffc700] transition-colors"
          >
            Sobre nós
          </Link>
          <Link
            href="#times"
            onClick={(e) => handleSmoothScroll(e, "times")}
            className="hover:text-[#ffc700] transition-colors"
          >
            Times
          </Link>
          <Link
            href="#footer"
            onClick={(e) => handleSmoothScroll(e, "footer")}
            className="hover:text-[#ffc700] transition-colors"
          >
            Redes sociais
          </Link>
          <JoinTeamButton
  className="bg-[#f1d85a] text-[#030303] hover:bg-[#ffc700] px-6 py-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer"
  onClickExtra={() => setIsMobileMenuOpen(false)}
/>

        </nav>
      )}
    </header>
  )
}
