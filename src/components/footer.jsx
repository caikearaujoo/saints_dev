"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Footer() {
  const footerRef = useRef(null)
  const logoRef = useRef(null)
  const linksRef = useRef(null)
  const socialsRef = useRef(null)
  const devsRef = useRef(null)
  const copyrightRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação do logo
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      )

      // Animação dos links
      gsap.fromTo(
        linksRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      )

      // Animação das redes sociais
      gsap.fromTo(
        socialsRef.current.children,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      )

      // Animação dos desenvolvedores
      gsap.fromTo(
        devsRef.current.children,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      )

      // Animação do copyright
      gsap.fromTo(
        copyrightRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        },
      )
    }, footerRef)

    return () => ctx.revert()
  }, [])

  const developers = [
    { name: "Maria Fernanda", github: "https://github.com/diskmari", role: "Frontend Developer" },
    { name: "Caike Araújo", github: "https://github.com/caikearaujoo", role: "Fullstack Developer" },
    { name: "Rafael", github: "https://github.com/hydrenzinho", role: "UI/UX Designer" },
  ]

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden text-[#ECECEC] bg-[#030303]"
      style={{
        background: "linear-gradient(135deg, #030303 0%, #0a0a0a 50%, #030303 100%)",
      }}
    >
      {/* Efeitos de fundo futurísticos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Linhas verticais responsivas */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#ffc700]/10 to-transparent opacity-50 sm:opacity-75" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#ffc700]/10 to-transparent opacity-50 sm:opacity-75" />
        {/* Linha horizontal responsiva */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ffc700]/10 to-transparent opacity-50 sm:opacity-75" />

        {/* Elementos flutuantes */}
        <div className="absolute top-[5%] left-[5%] w-2 h-2 bg-[#ffc700] rounded-full animate-pulse opacity-70" />
        <div className="absolute bottom-[5%] right-[5%] w-1 h-1 bg-[#f1d85a] rounded-full animate-ping opacity-70" />
        <div className="absolute top-[30%] right-[15%] w-1.5 h-1.5 bg-[#ffc700] rounded-full animate-pulse delay-1000 opacity-70 hidden sm:block" />
        <div className="absolute bottom-[20%] left-[10%] w-1 h-1 bg-[#f1d85a] rounded-full animate-pulse delay-500 opacity-70 hidden md:block" />

        {/* Hexágonos decorativos */}
        <div className="hidden sm:block absolute top-20 right-20 w-8 h-8 border border-[#ffc700]/10 rotate-45 opacity-50" />
        <div className="hidden sm:block absolute bottom-32 left-16 w-6 h-6 border border-[#f1d85a]/10 rotate-12 opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-12">
          {/* Coluna 1: Logo e Descrição */}
          <div ref={logoRef} className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="relative w-[160px] h-[50px] sm:w-[180px] sm:h-[60px] mb-4">
              <Image src="/imgs/logo-saints.png" alt="UFU Saints" fill style={{ objectFit: "contain" }} priority />
            </div>
            <p className="text-[#ECECEC]/70 text-sm leading-relaxed max-w-xs">
              A atlética de e-sports da Universidade Federal de Uberlândia. Conectando, competindo e crescendo em
              equipe.
            </p>
          </div>

          {/* Coluna 2: Links Úteis */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-lg font-bold mb-4 text-[#ffc700] font-titles tracking-wider">LINKS ÚTEIS</h3>
            <ul ref={linksRef} className="space-y-3">
              {[
                { href: "#sobre-nos", label: "Sobre Nós" },
                { href: "#times", label: "Times" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#ECECEC]/80 hover:text-[#ffc700] transition-all duration-300 text-sm hover:translate-x-1.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Redes Sociais e Contato */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-lg font-bold mb-4 text-[#ffc700] font-titles tracking-wider">SIGA-NOS</h3>
            <div ref={socialsRef} className="flex space-x-3 sm:space-x-4 mb-6 justify-center sm:justify-start">
              {[
                {
                  label: "Discord",
                  href: "https://discord.gg/YdfQ8jng",
                  bgColor: "hover:bg-indigo-600",
                  borderColor: "hover:border-indigo-500",
                  icon: (
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  ),
                },
                {
                  label: "Twitch",
                  href: "https://www.twitch.tv/ufuesports",
                  bgColor: "hover:bg-purple-600",
                  borderColor: "hover:border-purple-500",
                  icon: (
                    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
                  ),
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/ufuesports/",
                  bgColor: "hover:bg-pink-600",
                  borderColor: "hover:border-pink-500",
                  icon: (
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  ),
                },
                {
                  label: "Twitter/X",
                  href: "https://x.com/ufuesports",
                  bgColor: "hover:bg-gray-600",
                  borderColor: "hover:border-gray-500",
                  icon: (
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#030303]/70 border border-[#ECECEC]/20 flex items-center justify-center ${social.bgColor} ${social.borderColor} transition-all duration-300 group transform hover:scale-110 hover:shadow-lg hover:shadow-[#ffc700]/30`}
                  aria-label={social.label}
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-[#ECECEC]/70 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
            <div className="space-y-2 text-[#ECECEC]/70 text-sm">
              <p className="flex items-center justify-center sm:justify-start">
                <svg className="w-4 h-4 mr-2 text-[#ffc700] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                ufuesports@gmail.com
              </p>
              <p className="flex items-center justify-center sm:justify-start">
                <svg className="w-4 h-4 mr-2 text-[#ffc700] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Uberlândia, MG - Brasil
              </p>
            </div>
          </div>

          {/* Coluna 4: Desenvolvedores */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-lg font-bold mb-4 text-[#ffc700] font-titles tracking-wider">DESENVOLVEDORES</h3>
            <div ref={devsRef} className="space-y-4 w-full">
              {developers.map((dev, index) => (
                <div key={index} className="flex items-center space-x-3 group w-full">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#ffc700] to-[#f1d85a] rounded-full flex items-center justify-center shadow-md group-hover:shadow-[#ffc700]/30 transition-all duration-300 shrink-0">
                    <svg className="w-5 h-5 text-[#030303]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <a
                      href={dev.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ECECEC]/80 hover:text-[#ffc700] transition-colors font-medium text-sm block group-hover:translate-x-1.5 transition-transform duration-300 truncate"
                    >
                      {dev.name}
                    </a>
                    <p className="text-[#ECECEC]/50 text-xs truncate">{dev.role}</p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1">
                    <svg className="w-4 h-4 text-[#ffc700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Linha divisória futurística */}
        <div className="my-12 md:my-16 relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-[#ECECEC]/20"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-[#030303] px-6 py-1 rounded-full shadow-md">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-[#ffc700] rounded-full animate-pulse"></div>
                <div
                  className="w-1 h-1 bg-[#f1d85a] rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-1.5 h-1.5 bg-[#ffc700] rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div ref={copyrightRef} className="text-center space-y-2">
          <p className="text-[#ECECEC]/70 text-sm font-medium">
            &copy; {new Date().getFullYear()} UFU Saints. Todos os direitos reservados.
          </p>
          <p className="text-[#ECECEC]/50 text-xs">
            Desenvolvido com <span className="text-[#ffc700] animate-pulse text-base mx-0.5">💛</span> pela equipe de
            devs.
          </p>
          <div className="flex justify-center items-center space-x-2 pt-2">
            <div className="w-1 h-1 bg-[#f1d85a] rounded-full animate-ping opacity-75"></div>
            <span className="text-xs text-[#ECECEC]/40 font-mono tracking-widest">SAINTS.TECH</span>
            <div
              className="w-1 h-1 bg-[#f1d85a] rounded-full animate-ping opacity-75"
              style={{ animationDelay: "0.3s" }}
            ></div>
          </div>
        </div>
      </div>
    </footer>
  )
}
