'use client';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full px-10 py-4 flex items-center justify-between z-50 bg-black/40 backdrop-blur-sm">
      {/* LOGO */}
      <div className="relative w-[120px] h-[40px]">
        <Image
          src="/imgs/logo-saints.png"
          alt="UFU Saints"
          fill
          style={{ objectFit: 'contain' }}
          // Logo is prioritized for faster rendering on page load
          priority
        />
      </div>

      {/* LINKS */}
      <nav className="flex gap-8 items-center text-white font-medium">
        <a href="#">Sobre nós</a>
        <a href="#">Times</a>
        <a href="#">Fale Conosco</a>
        <a href="#">Redes sociais</a>
        <button className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600 text-black">
          Log in
        </button>
      </nav>
    </header>
  );
}
