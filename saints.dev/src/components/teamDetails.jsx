"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Image from "next/image"

export default function TeamDetails({ team, onBack }) {
  const containerRef = useRef(null)
  const headerRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação do header
      gsap.fromTo(
        headerRef.current,
        {
          opacity: 0,
          y: -30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
      )

      // Animação dos cards de jogadores
      const playerCards = gridRef.current?.children
      if (playerCards) {
        Array.from(playerCards).forEach((card, index) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 50,
              scale: 0.8,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              delay: 0.2 + index * 0.1,
              ease: "back.out(1.7)",
            },
          )
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="text-center max-w-6xl mx-auto">
      <div ref={headerRef} className="mb-8">
        <button
          onClick={onBack}
          className="mb-6 px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 font-semibold"
        >
          ⬅ Voltar
        </button>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 font-nikea">{team.name}</h2>
        <p className="text-lg text-gray-600">Conheça nossos jogadores</p>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8"
      >
        {team.players.map((player, index) => (
          <div
            key={index}
            className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full overflow-hidden mb-4 border-4 border-yellow-400">
              <Image src={player.photo || "/placeholder.svg"} alt={player.name} fill className="object-cover" />
            </div>
            <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-2">{player.name}</h3>
            <p className="text-sm sm:text-base text-gray-500 capitalize bg-gray-50 px-3 py-1 rounded-full">
              {player.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
