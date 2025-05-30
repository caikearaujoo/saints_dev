'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'; // Importar useState
import { FiMenu, FiX } from 'react-icons/fi'; // Ícones para o menu hamburger (opcional, mas recomendado)

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Estado para controlar o menu mobile

  // A classe do header agora é fixa
  const headerClasses = `fixed top-0 left-0 w-full px-4 sm:px-10 py-4 flex items-center justify-between z-50 bg-black/30 backdrop-blur-none`;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={headerClasses}>
      {/* LOGO */}
      <div className="relative w-[120px] h-[40px]">
        <Link href="/">
          <Image
            src="/imgs/logo-saints.png"
            alt="UFU Saints"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </Link>
      </div>

      {/* LINKS - Desktop */}
      <nav className="hidden md:flex gap-8 items-center text-white font-medium">
        <Link href="#sobre-nos" className="hover:text-yellow-500 transition-colors">Sobre nós</Link>
        <Link href="#times" className="hover:text-yellow-500 transition-colors">Times</Link>
        <Link href="#fale-conosco" className="hover:text-yellow-500 transition-colors">Fale Conosco</Link>
        <Link href="#redes-sociais" className="hover:text-yellow-500 transition-colors">Redes sociais</Link>
        <button className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600 text-black transition-colors">
          Log in
        </button>
      </nav>

      {/* Botão Hamburger - Mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          aria-label="Abrir menu"
          className="text-white focus:outline-none"
        >
          {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Menu Mobile - Aparece abaixo do header */}
      {isMobileMenuOpen && (
        <nav
          className="absolute top-full left-0 w-full bg-black/80 backdrop-blur-md md:hidden flex flex-col items-center gap-6 py-8 text-white font-medium"
          onClick={() => setIsMobileMenuOpen(false)} // Fecha o menu ao clicar em um link
        >
          <Link href="#sobre-nos" className="hover:text-yellow-500 transition-colors">Sobre nós</Link>
          <Link href="#times" className="hover:text-yellow-500 transition-colors">Times</Link>
          <Link href="#fale-conosco" className="hover:text-yellow-500 transition-colors">Fale Conosco</Link>
          <Link href="#redes-sociais" className="hover:text-yellow-500 transition-colors">Redes sociais</Link>
          <button className="bg-yellow-500 px-6 py-3 rounded hover:bg-yellow-600 text-black transition-colors w-4/5 max-w-xs">
            Log in
          </button>
        </nav>
      )}
    </header>
  );
}