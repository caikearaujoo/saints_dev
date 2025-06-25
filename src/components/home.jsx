"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { FaDiscord, FaTwitch, FaInstagram, FaTimes } from "react-icons/fa"
import { HeroJoinButton, HeroMobileJoinButton } from "./signup-buttons"

export default function Hero() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const socialRef = useRef(null)
  const scrollingImagesRef = useRef(null)
  const scrollingImages2Ref = useRef(null)
  const mobileImagesRef = useRef(null)
  const subtitleRef = useRef(null)

  const teamImages = [
    "/imgs/img1.jpg", "/imgs/img2.jpg", "/imgs/mrilo e cks.png",
    "/imgs/ravens 1.png", "/imgs/ravens 2.png", "/imgs/rafa_luiz.jpg",
    "/imgs/time_cs.jpg", "/imgs/meninas1.jpg",
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Animações de entrada (Títulos)
      gsap.fromTo(titleRef.current.children, { opacity: 0, y: 100, skewY: 5 }, { opacity: 1, y: 0, skewY: 0, duration: 1.5, ease: "power3.out", stagger: 0.2 })
      gsap.fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power2.out" })
      
      // Lógica de animações responsivas
      gsap.matchMedia().add({
        isDesktop: "(min-width: 1024px)",
        isMobile: "(max-width: 1023px)",
      }, (context) => {
        const { isDesktop, isMobile } = context.conditions

        // --- LÓGICA PARA DESKTOP ---
        if (isDesktop) {
          // 1. Animações de Parallax (controladas pelo scroll)
          gsap.to(scrollingImagesRef.current, { yPercent: -40, ease: "none", scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1 } })
          gsap.to(scrollingImages2Ref.current, { yPercent: -50, ease: "none", scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1 } })

          // 2. Animações Automáticas (quando no topo)
          const autoScroll1 = gsap.to(scrollingImagesRef.current, { y: "-100%", duration: 40, ease: "none", repeat: -1, repeatRefresh: true })
          const autoScroll2 = gsap.to(scrollingImages2Ref.current, { y: "-100%", duration: 45, ease: "none", repeat: -1, repeatRefresh: true })

          // 3. Interruptor Híbrido
          ScrollTrigger.create({
            trigger: heroRef.current, start: "top top", end: "bottom top",
            onEnter: () => { autoScroll1.pause(); autoScroll2.pause(); },
            onLeaveBack: () => { autoScroll1.play(); autoScroll2.play(); },
          })

          // 4. Controlador de Visibilidade dos Ícones Sociais
          gsap.fromTo(socialRef.current, { opacity: 1 }, {
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "bottom center", // Começa a sumir quando o fundo da seção passa do centro da tela
              end: "bottom top", // Totalmente invisível quando o fundo chega no topo
              scrub: true,
            },
          })
        }

        // --- LÓGICA PARA MOBILE ---
        if (isMobile) {
          // 1. Animação de Parallax
          if (mobileImagesRef.current && mobileImagesRef.current.parentElement) {
            gsap.to(mobileImagesRef.current, {
              y: () => -(mobileImagesRef.current.offsetHeight - mobileImagesRef.current.parentElement.offsetHeight),
              ease: "none",
              scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
            })
          }
          // 2. Animação Automática
          const autoScrollMobile = gsap.to(mobileImagesRef.current, { y: "-50%", duration: 60, ease: "none", repeat: -1, repeatRefresh: true })
          
          // 3. Interruptor Híbrido
          ScrollTrigger.create({
            trigger: heroRef.current, start: "top top", end: "bottom top",
            onEnter: () => autoScrollMobile.pause(),
            onLeaveBack: () => autoScrollMobile.play(),
          })
        }
      })
      
      const images = document.querySelectorAll(".team-image")
      images.forEach((img) => {
        img.addEventListener("mouseenter", () => { gsap.to(img, { scale: 1.05, duration: 0.4, ease: "power2.out" }) })
        img.addEventListener("mouseleave", () => { gsap.to(img, { scale: 1, duration: 0.4, ease: "power2.out" }) })
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative w-full bg-transparent lg:h-screen lg:overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 h-full">
        
        {/* ======================= DESKTOP LAYOUT ======================= */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-center h-full pt-0">
          <div className="flex flex-col justify-center space-y-8 z-10">
            <div ref={titleRef} className="space-y-4 overflow-hidden">
                <h1 className="text-7xl xl:text-8xl 2xl:text-9xl font-black leading-none font-orbitron">
                  <div className="text-[#ECECEC]">UFU</div>
                  <div className="bg-gradient-to-r from-[#ffc700] via-[#f1d85a] to-[#ffc700] bg-clip-text text-transparent text-glow">SAINTS</div>
                </h1>
            </div>
            <div ref={subtitleRef} className="max-w-lg">
                <p className="text-lg md:text-xl text-[#ECECEC] leading-relaxed font-rajdhani">A atlética de e-sports da <span className="font-bold text-[#ffc700]">Universidade Federal de Uberlândia</span>. Conectando, competindo e crescendo em equipe.</p>
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <HeroJoinButton />
                  <button onClick={() => { const aboutSection = document.getElementById("sobre-nos"); if (aboutSection) { aboutSection.scrollIntoView({ behavior: "smooth" }) } }} className="border-2 border-[#f1d85a] text-[#f1d85a] hover:bg-[#f1d85a] hover:text-[#030303] px-8 py-3 rounded-lg font-semibold transition-all duration-300 font-rajdhani cursor-pointer">Quem somos</button>
                </div>
            </div>
          </div>
          <div className="relative h-full flex items-center justify-end">
            <div className="relative w-full max-w-2xl h-full overflow-hidden">
                <div ref={scrollingImagesRef} className="absolute top-0 left-0 w-[48%] flex flex-col space-y-6" style={{ height: "200%" }}>
                  {[...teamImages, ...teamImages].map((image, index) => (<div key={`col1-${index}`} className="team-image relative cursor-pointer rounded-lg overflow-hidden shadow-lg flex-shrink-0" style={{ height: "240px", aspectRatio: "3/2" }}><Image src={image || "/placeholder.svg"} alt={`Team ${index + 1}`} fill className="object-cover" sizes="30vw" /><div className="absolute inset-0 bg-gradient-to-t from-[#030303]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg" /></div>))}
                </div>
                <div ref={scrollingImages2Ref} className="absolute top-0 right-0 w-[48%] flex flex-col space-y-6" style={{ height: "200%", transform: "translateY(-25%)" }}>
                  {[...teamImages, ...teamImages].map((image, index) => (<div key={`col2-${index}`} className="team-image relative cursor-pointer rounded-lg overflow-hidden shadow-lg flex-shrink-0" style={{ height: "220px", aspectRatio: "3/2" }}><Image src={image || "/placeholder.svg"} alt={`Team ${index + 5}`} fill className="object-cover" sizes="30vw" /><div className="absolute inset-0 bg-gradient-to-t from-[#030303]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" /></div>))}
                </div>
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#030303] to-transparent z-10 pointer-events-none" /><div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#030303] to-transparent z-10 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* ======================= MOBILE LAYOUT ======================= */}
        <div className="lg:hidden flex flex-col justify-center min-h-screen pt-24 pb-24 space-y-20">
          <div className="flex flex-col justify-center items-center text-center px-4">
            <div ref={titleRef} className="space-y-2 overflow-hidden">
              <h1 className="text-5xl sm:text-6xl font-black leading-none font-orbitron">
                <div className="text-[#ECECEC]">UFU</div>
                <div className="bg-gradient-to-r from-[#ffc700] via-[#f1d85a] to-[#ffc700] bg-clip-text text-transparent">SAINTS</div>
              </h1>
            </div>
            <div ref={subtitleRef} className="mt-6 max-w-md">
              <p className="text-base md:text-lg text-[#ECECEC] leading-relaxed mb-6 font-rajdhani">A atlética de e-sports da UFU. Conectando, competindo e crescendo em equipe.</p>
              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
                  <HeroMobileJoinButton />
                  <button onClick={() => { const aboutSection = document.getElementById("sobre-nos"); if (aboutSection) { aboutSection.scrollIntoView({ behavior: "smooth" }) } }} className="border-2 border-[#f1d85a] text-[#f1d85a] hover:bg-[#f1d85a] hover:text-[#030303] px-8 py-3 rounded-lg font-semibold transition-all duration-300 font-rajdhani cursor-pointer">Quem somos</button>
                </div>
                <div className="flex flex-row gap-6 text-[#ffc700] text-2xl mt-8">
                  <a href="https://discord.gg/YdfQ8jng" className="cursor-pointer hover:text-[#f1d85a] transition-all duration-300 transform hover:scale-125"><FaDiscord /></a>
                  <a href="https://www.twitch.tv/ufuesports" className="hover:text-[#f1d85a] transition-all duration-300 transform hover:scale-125"><FaTwitch /></a>
                  <a href="https://www.instagram.com/ufuesports/" className="hover:text-[#f1d85a] transition-all duration-300 transform hover:scale-125"><FaInstagram /></a>
                  <a href="https://x.com/ufuesports" className="hover:text-[#ECECEC] transition-all duration-300 transform hover:scale-125"><FaTimes /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-[450px] flex justify-center">
            <div className="relative w-80 h-full overflow-hidden rounded-lg shadow-xl">
              <div ref={mobileImagesRef} className="absolute top-0 left-0 w-full flex flex-col space-y-4">
                {[...teamImages, ...teamImages].map((image, index) => (<div key={`mobile-${index}`} className="team-image relative cursor-pointer rounded-lg overflow-hidden shadow-lg flex-shrink-0" style={{ height: "180px", aspectRatio: "3/2" }}><Image src={image || "/placeholder.svg"} alt={`Team ${index + 1}`} fill className="object-cover" sizes="80vw" /><div className="absolute inset-0 bg-gradient-to-t from-[#030303]/20 to-transparent" /></div>))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- ÍCONES SOCIAIS (Apenas Desktop, controlados por ScrollTrigger) --- */}
      <div ref={socialRef} className="fixed left-4 sm:left-6 bottom-20 sm:bottom-24 hidden lg:flex flex-col gap-4 sm:gap-6 text-[#ffc700] text-xl sm:text-2xl z-20">
        <a href="https://discord.gg/YdfQ8jng" className="cursor-pointer hover:text-[#f1d85a] transition-all duration-300 transform hover:scale-125 p-2 rounded-full hover:bg-[#ffc700]/10"><FaDiscord /></a>
        <a href="https://www.twitch.tv/ufuesports" className="hover:text-[#f1d85a] transition-all duration-300 transform hover:scale-125 p-2 rounded-full hover:bg-[#ffc700]/10"><FaTwitch /></a>
        <a href="https://www.instagram.com/ufuesports/" className="hover:text-[#f1d85a] transition-all duration-300 transform hover:scale-125 p-2 rounded-full hover:bg-[#ffc700]/10"><FaInstagram /></a>
        <a href="https://x.com/ufuesports" className="hover:text-[#ECECEC] transition-all duration-300 transform hover:scale-125 p-2 rounded-full hover:bg-[#ffc700]/10"><FaTimes /></a>
      </div>

      {/* --- INDICADOR DE SCROLL (Visível em todas as telas) --- */}
      <div className="fixed bottom-6 right-4 text-[#ffc700] text-xs font-medium tracking-wider uppercase flex items-center space-x-2 z-20 font-rajdhani">
        <span>SCROLL</span>
        <div className="w-6 h-6 border border-[#ffc700] rounded-full flex items-center justify-center animate-pulse">
            <div className="w-1.5 h-1.5 bg-[#ffc700] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}