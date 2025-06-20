"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import TeamCard from "./teamCard"
import TeamDetails from "./teamDetails"
import teams from "../data/teams"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function TimesSection() {
  const [selectedTeam, setSelectedTeam] = useState(null)
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0)
  const [hoveredCardId, setHoveredCardId] = useState(null)
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const gridRef = useRef(null)

  const handleSelect = (team) => setSelectedTeam(team)
  const handleBack = () => setSelectedTeam(null)

  const handleCardHover = (teamId) => setHoveredCardId(teamId)
  const handleCardLeave = () => setHoveredCardId(null)

  useEffect(() => {
    if (!selectedTeam) {
      const ctx = gsap.context(() => {
        // Animação do título
        gsap.fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          },
        )

        // Animação dos cards
        const cards = gridRef.current?.children
        if (cards) {
          Array.from(cards).forEach((card, index) => {
            gsap.fromTo(
              card,
              {
                opacity: 0,
                y: 80,
                scale: 0.8,
              },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                delay: 0.3 + index * 0.1,
                ease: "back.out(1.7)",
                scrollTrigger: {
                  trigger: sectionRef.current,
                  start: "top 80%",
                  end: "bottom 20%",
                  toggleActions: "play none none reverse",
                },
              },
            )
          })
        }
      }, sectionRef)

      return () => ctx.revert()
    }
  }, [selectedTeam])

  return (
    <section
      ref={sectionRef}
      id="times"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 text-[#ECECEC] min-h-screen flex flex-col items-center justify-center"
    >
      {selectedTeam ? (
        <div className="w-full flex justify-center">
          <TeamDetails team={selectedTeam} onBack={handleBack} />
        </div>
      ) : (
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl mb-8 md:mb-12 text-center text-white font-bold"
          >
            CONHEÇA NOSSOS JOGADORES
          </h2>

          {/* Desktop grid - centralizada */}
          <div
            ref={gridRef}
            className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 w-full place-items-center"
          >
            {teams.map((team) => (
              <TeamCard
                key={team.id}
                team={team}
                onClick={handleSelect}
                isHovered={hoveredCardId === team.id}
                isOtherHovered={hoveredCardId !== null && hoveredCardId !== team.id}
                onHover={() => handleCardHover(team.id)}
                onLeave={handleCardLeave}
              />
            ))}
          </div>

          {/* Mobile carousel - centralizado */}
          <div className="md:hidden w-full max-w-sm mx-auto">
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setCurrentMobileIndex((prev) => (prev === 0 ? teams.length - 1 : prev - 1))}
                className="p-3 bg-[#f1d85a] text-[#030303] rounded-full hover:bg-[#ffc700] transition-colors flex-shrink-0"
              >
                ←
              </button>
              <div className="flex-1 flex justify-center">
                <TeamCard
                  team={teams[currentMobileIndex]}
                  onClick={handleSelect}
                  isHovered={false}
                  isOtherHovered={false}
                  onHover={() => {}}
                  onLeave={() => {}}
                />
              </div>
              <button
                onClick={() => setCurrentMobileIndex((prev) => (prev + 1) % teams.length)}
                className="p-3 bg-[#f1d85a] text-[#030303] rounded-full hover:bg-[#ffc700] transition-colors flex-shrink-0"
              >
                →
              </button>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {teams.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMobileIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentMobileIndex ? "bg-[#f1d85a]" : "bg-[#ECECEC]/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
