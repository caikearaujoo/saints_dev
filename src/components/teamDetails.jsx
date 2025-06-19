"use client"

import { useEffect, useRef, useState } from "react"
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
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0)
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0)

  const players = team?.players || []

  // Agrupar jogadores por time
  const groupedPlayers = players.reduce((acc, player) => {
    const teamName = player.team || "Sem Time"
    if (!acc[teamName]) {
      acc[teamName] = []
    }
    acc[teamName].push(player)
    return acc
  }, {})

  const teamNames = Object.keys(groupedPlayers)
  const currentTeamName = teamNames[currentTeamIndex] || teamNames[0]
  const currentPlayers = groupedPlayers[currentTeamName] || []

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
    }, containerRef)

    return () => ctx.revert()
  }, [currentTeamIndex])

  const nextTeam = () => {
    setCurrentTeamIndex((prev) => (prev + 1) % teamNames.length)
  }

  const prevTeam = () => {
    setCurrentTeamIndex((prev) => (prev - 1 + teamNames.length) % teamNames.length)
  }

  useEffect(() => {
    setCurrentPlayerIndex(0)
  }, [currentTeamIndex])

  return (
    <div ref={containerRef} className="w-full text-center max-w-[1400px] mx-auto px-4 text-[#ECECEC] min-h-screen">
      <div ref={headerRef} className="mb-6">
        <button
          onClick={onBack}
          className="mb-4 px-5 py-2 bg-transparent text-[#ECECEC] border border-[#ffc700] rounded-full hover:bg-[#ffc700] hover:text-[#030303] transition duration-300 font-semibold text-sm flex items-center gap-2 mx-auto"
        >
          ⬅ Voltar
        </button>

        {team?.logo && (
          <div className="relative w-20 h-20 mx-auto mb-4">
            <Image src={team.logo || "/placeholder.svg"} alt={`${team.name} Logo`} fill className="object-contain" />
          </div>
        )}

        {/* Navegação entre times */}
        {teamNames.length > 1 && (
          <div className="flex items-center justify-center gap-4 mb-6">
            <button
              onClick={prevTeam}
              className="px-4 py-2 bg-[#f1d85a] text-[#030303] rounded-lg hover:bg-[#ffc700] transition-colors font-semibold"
            >
              ◀
            </button>
            <h3 className="text-2xl font-bold text-white min-w-[200px]">{currentTeamName.toUpperCase()}</h3>
            <button
              onClick={nextTeam}
              className="px-4 py-2 bg-[#f1d85a] text-[#030303] rounded-lg hover:bg-[#ffc700] transition-colors font-semibold"
            >
              ▶
            </button>
          </div>
        )}

        {teamNames.length === 1 && (
          <h3 className="text-2xl font-bold text-white mb-6">{currentTeamName.toUpperCase()}</h3>
        )}
      </div>

      {/* Container de cards dos jogadores */}
      <div className="relative flex justify-center items-center">
        {/* Mobile carousel - um card por vez */}
        <div className="md:hidden w-full max-w-sm mx-auto px-4">
          {currentPlayers.length > 0 && (
            <div className="flex items-center justify-center gap-4 w-full">
              <button
                onClick={() => setCurrentPlayerIndex((prev) => (prev === 0 ? currentPlayers.length - 1 : prev - 1))}
                className="p-3 bg-[#f1d85a] text-[#030303] rounded-full hover:bg-[#ffc700] transition-colors flex-shrink-0 z-10"
              >
                ←
              </button>

              <div className="flex-1 flex justify-center">
                <div className="player-card relative w-full max-w-[280px]">
                  <div className="w-full h-[400px] overflow-hidden rounded-tl-3xl rounded-br-3xl shadow-xl relative border border-[#ffc700]/20 transition-all duration-300">
                    <Image
                      src={currentPlayers[currentPlayerIndex]?.photo || "/placeholder.svg?height=400&width=300"}
                      alt={currentPlayers[currentPlayerIndex]?.name || "Jogador"}
                      fill
                      className="object-cover rounded-tl-3xl rounded-br-3xl"
                      sizes="280px"
                      priority
                    />
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#030303]/90 to-transparent p-4 text-[#ECECEC]">
                      <h3 className="text-lg font-bold drop-shadow-lg">{currentPlayers[currentPlayerIndex]?.name}</h3>
                      <p className="text-xs uppercase tracking-wider drop-shadow-lg text-[#ffc700]">
                        {currentPlayers[currentPlayerIndex]?.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setCurrentPlayerIndex((prev) => (prev + 1) % currentPlayers.length)}
                className="p-3 bg-[#f1d85a] text-[#030303] rounded-full hover:bg-[#ffc700] transition-colors flex-shrink-0 z-10"
              >
                →
              </button>
            </div>
          )}

          {/* Indicadores de posição */}
          {currentPlayers.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {currentPlayers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPlayerIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentPlayerIndex ? "bg-[#f1d85a]" : "bg-[#ECECEC]/30"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Desktop grid */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full max-w-[1200px] py-4 hidden md:grid"
        >
          {currentPlayers.map((player, index) => (
            <div
              key={`${currentTeamName}-${index}`}
              className="player-card relative"
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <div className="w-full h-[280px] sm:h-[320px] overflow-hidden rounded-tl-3xl rounded-br-3xl shadow-xl relative border border-[#ffc700]/20 hover:border-[#ffc700]/40 transition-all duration-300">
                <Image
                  src={player.photo || "/placeholder.svg?height=400&width=300"}
                  alt={player.name}
                  fill
                  className="object-cover rounded-tl-3xl rounded-br-3xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#030303]/90 to-transparent p-4 text-[#ECECEC]">
                  <h3 className="text-lg font-bold drop-shadow-lg">{player.name}</h3>
                  <p className="text-xs uppercase tracking-wider drop-shadow-lg text-[#ffc700]">{player.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicador de times */}
      {teamNames.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {teamNames.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTeamIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentTeamIndex ? "bg-[#ffc700]" : "bg-[#ECECEC]/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
