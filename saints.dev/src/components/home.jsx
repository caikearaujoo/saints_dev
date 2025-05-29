"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Image from "next/image"
import { FaDiscord, FaTwitch, FaInstagram, FaTimes } from "react-icons/fa"

export default function Hero() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const socialRef = useRef(null)
  const scrollingImagesRef = useRef(null)
  const scrollingImages2Ref = useRef(null)
  const mobileImagesRef = useRef(null)

  // Array de imagens dos times
  const teamImages = [
    "/imgs/img1.jpg",
    "/imgs/img2.jpg",
    "/imgs/img4.jpg",
    "/imgs/img4.jpg",
    "/imgs/img2.jpg",
    "/imgs/img2.jpg",
    "/imgs/img2.jpg",
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
        duration: 100,
        ease: "none",
        repeat: -1,
        repeatRefresh: true,
      })

      // APENAS SCROLL CONTÍNUO - Segunda coluna
      gsap.to(scrollingImages2Ref.current, {
        y: "-100%",
        duration: 105,
        ease: "none",
        repeat: -1,
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
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-center h-full pt-20">
          {/* Left Side - Title */}
          <div className="flex flex-col justify-center space-y-8 z-10">
            <div ref={titleRef} className="space-y-4 overflow-hidden">
              <h1 className="text-7xl xl:text-8xl 2xl:text-9xl font-black leading-none font-nikea">
                <div className="text-gray-900">UFU</div>
                <div className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 bg-clip-text text-transparent">
                  SAINTS
                </div>
              </h1>
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
                    className="team-image relative cursor-pointer rounded-lg overflow-hidden shadow-lg flex-shrink-0"
                    style={{
                      height: "220px",
                      aspectRatio: "3/2",
                    }}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Team ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="30vw"
                    />
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
                    className="team-image relative cursor-pointer rounded-lg overflow-hidden shadow-lg flex-shrink-0"
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
                  </div>
                ))}
              </div>

              {/* Gradientes */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none opacity-70" />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none opacity-70" />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col h-full pt-20">
          {/* Mobile Title */}
          <div className="flex-1 flex flex-col justify-center items-center text-center px-4">
            <div ref={titleRef} className="space-y-2 overflow-hidden">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-none font-nikea">
                <div className="text-gray-900">UFU</div>
                <div className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 bg-clip-text text-transparent">
                  SAINTS
                </div>
              </h1>
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
                      className="team-image relative cursor-pointer rounded-lg overflow-hidden shadow-lg flex-shrink-0"
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
                    </div>
                  ))}
                </div>

                {/* Gradientes mobile */}
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div
        ref={socialRef}
        className="absolute left-4 sm:left-6 bottom-20 sm:bottom-24 flex flex-col gap-4 sm:gap-6 text-gray-700 text-xl sm:text-2xl z-20"
      >
        <a href="#" className="hover:text-yellow-600 transition-all duration-300 transform hover:scale-125">
          <FaDiscord />
        </a>
        <a href="#" className="hover:text-yellow-600 transition-all duration-300 transform hover:scale-125">
          <FaTwitch />
        </a>
        <a href="#" className="hover:text-yellow-600 transition-all duration-300 transform hover:scale-125">
          <FaInstagram />
        </a>
        <a href="#" className="hover:text-yellow-600 transition-all duration-300 transform hover:scale-125">
          <FaTimes />
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 text-gray-600 text-xs sm:text-sm font-medium tracking-wider uppercase flex items-center space-x-2 sm:space-x-3 z-20">
        <span>SCROLL</span>
        <div className="w-6 sm:w-8 h-6 sm:h-8 border border-gray-400 rounded-full flex items-center justify-center">
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-600 rounded-full animate-bounce" />
        </div>
      </div>

    </section>
  )
}
