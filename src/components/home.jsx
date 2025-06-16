"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Image from "next/image"
import { FaDiscord, FaTwitch, FaInstagram, FaTimes } from "react-icons/fa"
import Link from 'next/link';

export default function Hero() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const socialRef = useRef(null)
  const scrollingImagesRef = useRef(null)
  const scrollingImages2Ref = useRef(null)
  const mobileImagesRef = useRef(null)
  const subtitleRef = useRef(null)

  // Array de imagens dos times
  const teamImages = [
    "/imgs/img1.jpg",
    "/imgs/img2.jpg",
    "/imgs/mrilo e cks.png",
    "/imgs/ravens 1.png",
    "/imgs/ravens 2.png",
    "/imgs/img2.jpg",
    "/imgs/img1.jpg",
    "/imgs/img2.jpg",
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação do título principal
      gsap.fromTo(
        titleRef.current.children,
        {
          opacity: 0,
          y: 100,
          skewY: 5,
        },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 1.5,
          ease: "power3.out",
          stagger: 0.2,
        },
      )

      // Animação do subtítulo
      gsap.fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.8,
          ease: "power2.out",
        },
      )

      // Animação das redes sociais
      gsap.fromTo(
        socialRef.current.children,
        {
          opacity: 0,
          x: -50,
          scale: 0.8,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.1,
          delay: 0.5,
        },
      )

      // Animação inicial das imagens
      gsap.fromTo(
        [scrollingImagesRef.current, scrollingImages2Ref.current],
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power2.out",
          delay: 0.8,
        },
      )

      // APENAS SCROLL CONTÍNUO - Primeira coluna
      gsap.to(scrollingImagesRef.current, {
        y: "-100%",
        duration: 190,
        ease: "none",
        repeat: -9,
        repeatRefresh: true,
      })

      // APENAS SCROLL CONTÍNUO - Segunda coluna
      gsap.to(scrollingImages2Ref.current, {
        y: "-100%",
        duration: 190,
        ease: "none",
        repeat: -9,
        repeatRefresh: true,
      })

      // APENAS SCROLL CONTÍNUO - Mobile
      gsap.to(mobileImagesRef.current, {
        y: "-100%",
        duration: 60,
        ease: "none",
        repeat: -1,
        repeatRefresh: true,
      })

      // Hover effects
      const images = document.querySelectorAll(".team-image")
      images.forEach((img) => {
        img.addEventListener("mouseenter", () => {
          gsap.to(img, {
            scale: 1.05,
            duration: 0.4,
            ease: "power2.out",
          })
        })

        img.addEventListener("mouseleave", () => {
          gsap.to(img, {
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          })
        })
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 h-full">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-center h-full pt-0">
          {/* Left Side - Title */}
          <div className="flex flex-col justify-center space-y-8 z-10">
            <div ref={titleRef} className="space-y-4 overflow-hidden">
              <h1 className="text-7xl xl:text-8xl 2xl:text-9xl font-black leading-none font-orbitron">
                <div className="text-gray-900">UFU</div>
                <div className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 bg-clip-text text-transparent text-glow">
                  SAINTS
                </div>
              </h1>
            </div>
            <div ref={subtitleRef} className="max-w-lg">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-rajdhani">
                A atlética de e-sports da{" "}
                <span className="font-bold text-gray-800">Universidade Federal de Uberlândia</span>. Conectando,
                competindo e crescendo em equipe.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg btn-3d-effect font-orbitron cursor-pointer">
                  Junte-se a nós
                </button>
              </Link>
                <button 
                onClick={() => {
                  const aboutSection = document.getElementById('sobre-nos');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 font-rajdhani cursor-pointer"
              >
                Quem somos
              </button>
              </div>
            </div>
          </div>

          {/* Right Side - Scrolling Images Desktop */}
          <div className="relative h-full flex items-center justify-end">
            <div className="relative w-full max-w-2xl h-full overflow-hidden">
              {/* Primeira coluna */}
              <div
                ref={scrollingImagesRef}
                className="absolute top-0 left-0 w-[48%] flex flex-col space-y-6"
                style={{ height: "200%" }}
              >
                {[...teamImages.slice(0, 4), ...teamImages.slice(0, 4)].map((image, index) => (
                  <div
                    key={`col1-${index}`}
                    className="team-image relative cursor-pointer rounded-lg overflow-hidden shadow-lg flex-shrink-0 transition-all duration-300 hover:shadow-xl"
                    style={{
                      height: "220px",
                      aspectRatio: "3/2",
                    }}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Team ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                      sizes="30vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                    {/* Borda de hover sem cortar */}
                    <div className="absolute inset-0 border-2 border-transparent hover:border-yellow-400 transition-colors duration-300 rounded-lg pointer-events-none" />
                  </div>
                ))}
              </div>

              {/* Segunda coluna */}
              <div
                ref={scrollingImages2Ref}
                className="absolute top-0 right-0 w-[48%] flex flex-col space-y-6"
                style={{ height: "200%", transform: "translateY(-25%)" }}
              >
                {[...teamImages.slice(4, 8), ...teamImages.slice(4, 8)].map((image, index) => (
                  <div
                    key={`col2-${index}`}
                    className="team-image relative cursor-pointer rounded-lg overflow-hidden shadow-lg flex-shrink-0 border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300"
                    style={{
                      height: "200px",
                      aspectRatio: "3/2",
                    }}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Team ${index + 5}`}
                      fill
                      className="object-cover"
                      sizes="30vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>

              {/* Gradientes */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-50 to-transparent z-10 pointer-events-none opacity-70" />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none opacity-70" />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col h-full pt-0">
          {/* Mobile Title */}
          <div className="flex-1 flex flex-col justify-center items-center text-center px-4">
            <div ref={titleRef} className="space-y-2 overflow-hidden">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-none font-orbitron">
                <div className="text-gray-900">UFU</div>
                <div className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 bg-clip-text text-transparent">
                  SAINTS
                </div>
              </h1>
            </div>
            <div ref={subtitleRef} className="mt-6 max-w-md">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 font-rajdhani">
                A atlética de e-sports da UFU. Conectando, competindo e crescendo em equipe.
              </p>
              <div className="flex flex-col gap-3">
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 font-orbitron">
                  Junte-se a nós
                </button>
                <button className="border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 font-rajdhani">
                  Saiba mais
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Images - Single Column */}
          <div className="flex-1 relative overflow-hidden">
            <div className="absolute inset-0 flex justify-center">
              <div className="relative w-80 h-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 w-full flex flex-col space-y-4"
                  style={{ height: "200%" }}
                  ref={mobileImagesRef}
                >
                  {[...teamImages.slice(0, 6), ...teamImages.slice(0, 6)].map((image, index) => (
                    <div
                      key={`mobile-${index}`}
                      className="team-image relative cursor-pointer rounded-lg overflow-hidden shadow-lg flex-shrink-0 border-2 border-yellow-200"
                      style={{
                        height: "160px",
                        aspectRatio: "3/2",
                      }}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Team ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="80vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/20 to-transparent" />
                    </div>
                  ))}
                </div>

                {/* Gradientes mobile */}
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-50 to-transparent z-10 pointer-events-none opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div
        ref={socialRef} 
        className="absolute left-4 sm:left-6 bottom-20 sm:bottom-24 flex flex-col gap-4 sm:gap-6 text-yellow-700 text-xl sm:text-2xl z-20"
      >
        <a
          href="https://discord.gg/YdfQ8jng"
          onClick={() => console.log("Discord clicado")}
          className="cursor-pointer hover:text-yellow-500 transition-all duration-300 transform hover:scale-125 p-2 rounded-full hover:bg-yellow-100"
        >
          <FaDiscord />
        </a>
        <a
          href="https://www.twitch.tv/ufuesports" 
          className="hover:text-purple-600 transition-all duration-300 transform hover:scale-125 p-2 rounded-full hover:bg-purple-100"
        >
          <FaTwitch />
        </a>
        <a 
          href="https://www.instagram.com/ufuesports/"
          className="hover:text-pink-600 transition-all duration-300 transform hover:scale-125 p-2 rounded-full hover:bg-pink-100"
        >
          <FaInstagram />
        </a> 
        <a
          href="https://x.com/ufuesports"
          className="hover:text-gray-800 transition-all duration-300 transform hover:scale-125 p-2 rounded-full hover:bg-gray-100"
        >
          <FaTimes /> 
        </a> 
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 text-yellow-600 text-xs sm:text-sm font-medium tracking-wider uppercase flex items-center space-x-2 sm:space-x-3 z-20 font-rajdhani">
        <span>SCROLL</span>
        <div className="w-6 sm:w-8 h-6 sm:h-8 border border-yellow-400 rounded-full flex items-center justify-center animate-pulse">
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-yellow-600 rounded-full animate-bounce" />
        </div>
      </div>

      {/* Floating Elements */}
      <div
        className="absolute top-1/4 right-1/4 w-4 h-4 bg-yellow-400 rounded-full opacity-20 animate-float"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-1/3 left-1/4 w-6 h-6 bg-yellow-300 rounded-full opacity-15 animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-yellow-500 rounded-full opacity-25 animate-float"
        style={{ animationDelay: "4s" }}
      />
    </section>
  )
}
