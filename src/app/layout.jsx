// src/app/layout.jsx
'use client';

import './globals.css';
import '../styles/tailwind.css';
import Header from '../components/navbar';
import Footer from '../components/footer';
import { nikea } from '../fonts/fonts';
import { AuroraBackground } from '../components/ui/aurora-background';

// IMPORTANTE: Registre GSAP e ScrollTrigger AQUI, uma única vez para o aplicativo.
// Se já estiver em utils/gsap-config.js e chamado, não precisa repetir aqui.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={nikea.variable}>
      <head>
        {/* ... */}
      </head>
      <body>
        {/* AuroraBackground como fundo global do site */}
        {/* Ele deve ser fixo na viewport e ter um z-index bem baixo */}
        <AuroraBackground className="fixed inset-0 w-screen h-screen z-[-10] pointer-events-none">
          {/* O AuroraBackground não recebe 'children' aqui, ele é apenas o fundo */}
        </AuroraBackground>

        {/* Conteúdo principal do site, que rola normalmente sobre o Aurora */}
        <div className="relative z-0 min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children} {/* Aqui estará seu componente Hero e outras seções */}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}