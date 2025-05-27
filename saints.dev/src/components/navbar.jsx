'use client'; 

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {

  // A classe do header agora é fixa, sem lógica condicional de blur
  const headerClasses = `fixed top-0 left-0 w-full px-10 py-4 flex items-center justify-between z-50 bg-black/30 backdrop-blur-none`; // Apenas backdrop-blur-none

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

      {/* LINKS */}
      <nav className="flex gap-8 items-center text-white font-medium">
        <Link href="#sobre-nos">Sobre nós</Link> {/* Use IDs para navegação de seção na mesma página */}
        <Link href="#times">Times</Link>
        <Link href="#fale-conosco">Fale Conosco</Link>
        <Link href="#redes-sociais">Redes sociais</Link>
        <button className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600 text-black">
          Log in
        </button>
      </nav>
    </header>
  );
}