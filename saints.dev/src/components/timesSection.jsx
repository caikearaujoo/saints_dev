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
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const gridRef = useRef(null)

  const handleSelect = (team) => setSelectedTeam(team)
  const handleBack = () => setSelectedTeam(null)

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
    <section ref={sectionRef} id="times" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 text-gray-900 min-h-screen">
      {selectedTeam ? (
        <TeamDetails team={selectedTeam} onBack={handleBack} />
      ) : (
        <>
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl font-nikea mb-8 md:mb-12 text-center text-gray-900"
          >
            Conheça nossos jogadores
          </h2>

          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto"
          >
            {teams.map((team) => (
              <TeamCard key={team.id} team={team} onClick={handleSelect} />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
