"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export default function TeamDetails({ team, onBack }) {
  const containerRef = useRef(null)
  const headerRef = useRef(null)
  const cardsContainerRef = useRef(null)
  const autoScrollRef = useRef(null)
  const cardRefs = useRef([])
  const prevButtonRef = useRef(null)
  const nextButtonRef = useRef(null)

  const players = team?.players || []

  // Configurar as animações GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação do header
      gsap.fromTo(headerRef.current, { opacity: 0, y: -30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })

      // Animação dos cards no scroll
      gsap.fromTo(
        ".player-card",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Configurar hover para cada card usando GSAP
      document.querySelectorAll(".player-card").forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.08,
            duration: 0.4,
            ease: "power2.out",
            transformOrigin: "center center",
          })
        })

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
            transformOrigin: "center center",
          })
        })
      })

      // Hover para botão anterior
      if (prevButtonRef.current) {
        prevButtonRef.current.addEventListener("mouseenter", () => {
          gsap.to(prevButtonRef.current, {
            scale: 1.15,
            backgroundColor: "#f3f4f6",
            duration: 0.3,
            ease: "power2.out",
          })
        })

        prevButtonRef.current.addEventListener("mouseleave", () => {
          gsap.to(prevButtonRef.current, {
            scale: 1,
            backgroundColor: "#ffffff",
            duration: 0.3,
            ease: "power2.out",
          })
        })
      }

      // Hover para botão próximo
      if (nextButtonRef.current) {
        nextButtonRef.current.addEventListener("mouseenter", () => {
          gsap.to(nextButtonRef.current, {
            scale: 1.15,
            backgroundColor: "#f3f4f6",
            duration: 0.3,
            ease: "power2.out",
          })
        })

        nextButtonRef.current.addEventListener("mouseleave", () => {
          gsap.to(nextButtonRef.current, {
            scale: 1,
            backgroundColor: "#ffffff",
            duration: 0.3,
            ease: "power2.out",
          })
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  // Função para scroll com GSAP (velocidade diminuída)
  const scrollCards = (direction) => {
    const container = cardsContainerRef.current
    if (!container) return

    // Pausar auto-scroll quando clicar nas setas
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current)
    }

    const cardWidth = 250 + 24 // largura do card + gap
    const currentScroll = container.scrollLeft
    const targetScroll = currentScroll + cardWidth * direction

    gsap.to(container, {
      scrollLeft: targetScroll,
      duration: 1.2, // Aumentado para ser mais lento
      ease: "power2.inOut",
      onComplete: () => {
        // Reiniciar auto-scroll após 5 segundos
        setTimeout(() => {
          startAutoScroll()
        }, 5000)
      },
    })
  }

  const handleNext = () => scrollCards(1)
  const handlePrev = () => scrollCards(-1)

  // Função para iniciar auto-scroll
  const startAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current)
    }

    autoScrollRef.current = setInterval(() => {
      const container = cardsContainerRef.current
      if (!container) return

      const cardWidth = 250 + 24 // largura do card + gap
      const maxScroll = container.scrollWidth - container.clientWidth
      const currentScroll = container.scrollLeft

      if (currentScroll >= maxScroll - 10) {
        // Volta para o início com animação mais lenta
        gsap.to(container, {
          scrollLeft: 0,
          duration: 1.8, // Mais lento
          ease: "power2.inOut",
        })
      } else {
        // Scroll para o próximo card mais lento
        gsap.to(container, {
          scrollLeft: currentScroll + cardWidth,
          duration: 1.2, // Mais lento
          ease: "power2.inOut",
        })
      }
    }, 4000) // Intervalo aumentado para 4 segundos
  }

  // Auto-scroll com GSAP (velocidade diminuída)
  useEffect(() => {
    const timer = setTimeout(() => {
      startAutoScroll()
    }, 3000) // Inicia após 3 segundos

    return () => {
      clearTimeout(timer)
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current)
      }
    }
  }, [])

  // Pausa o auto-scroll quando o mouse está sobre o container
  const handleMouseEnter = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current)
    }
  }

  const handleMouseLeave = () => {
    startAutoScroll()
  }

  return (
    <div ref={containerRef} className="w-full text-center max-w-[1400px] mx-auto px-4">
      <div ref={headerRef} className="mb-6">
        <button
          onClick={onBack}
          className="mb-4 px-5 py-2 bg-black text-white rounded-full hover:bg-yellow-400 transition duration-300 font-semibold text-sm flex items-center gap-2 mx-auto"
        >
          ⬅ Voltar
        </button>

        {team?.logo && (
          <div className="relative w-20 h-20 mx-auto mb-4">
            <Image src={team.logo || "/placeholder.svg"} alt={`${team.name} Logo`} fill className="object-contain" />
          </div>
        )}
      </div>

      <div className="relative flex justify-center items-center gap-2">
        {/* Botão anterior */}
        <button
          ref={prevButtonRef}
          onClick={handlePrev}
          className="absolute left-0 z-10 bg-white text-black px-3 py-2 rounded-full shadow-lg"
        >
          ◀
        </button>

        {/* Container de scroll horizontal com padding para não cortar */}
        <div
          ref={cardsContainerRef}
          className="flex gap-6 overflow-x-auto w-full max-w-[1200px] py-4 px-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {players.map((player, index) => (
            <div
              key={index}
              className="player-card relative min-w-[200px] sm:min-w-[220px] md:min-w-[250px]"
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <div className="w-[200px] sm:w-[220px] md:w-[250px] h-[320px] sm:h-[360px] overflow-hidden rounded-tl-3xl rounded-br-3xl shadow-xl relative">
                <Image
                  src={player.photo || "/placeholder.svg?height=400&width=300"}
                  alt={player.name}
                  fill
                  className="object-cover rounded-tl-3xl rounded-br-3xl"
                  sizes="(max-width: 640px) 200px, (max-width: 768px) 220px, 250px"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                  <h3 className="text-lg font-bold drop-shadow-lg">{player.name}</h3>
                  <p className="text-sm italic drop-shadow-lg">{player.team}</p>
                  <p className="text-xs uppercase tracking-wider drop-shadow-lg">{player.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão próximo */}
        <button
          ref={nextButtonRef}
          onClick={handleNext}
          className="absolute right-0 z-10 bg-white text-black px-3 py-2 rounded-full shadow-lg"
        >
          ▶
        </button>
      </div>

      {/* Esconder scrollbar */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}