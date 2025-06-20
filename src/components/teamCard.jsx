"use client"

import { useRef } from "react"
import Image from "next/image"

export default function TeamCard({ team, onClick, isHovered, isOtherHovered, onHover, onLeave }) {
  const cardRef = useRef(null)

  const handleMouseEnter = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "translateY(-8px) scale(1.02)"
    }
    onHover()
  }

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "translateY(0) scale(1)"
    }
    onLeave()
  }

  return (
    <div
      ref={cardRef}
      className={`cursor-pointer relative w-full aspect-square max-w-[240px] mx-auto
           rounded-tl-[25px] rounded-br-[25px] 
           transition-all duration-300 ease-out
           group border border-[#ffc700]/30 hover:border-[#ffc700] overflow-hidden
           ${isOtherHovered ? "blur-[2px] opacity-70" : "blur-none opacity-100"}
           hover:shadow-2xl`}
      onClick={() => onClick(team)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Imagem de fundo do jogo - ocupa todo o container, sem desfoque */}
      <div className="absolute inset-0 z-0">
        <Image
          src={team.gameImage || team.logo || "/placeholder.svg"}
          alt={`${team.name} background`}
          fill
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Nome do jogo - aparece no hover */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-gradient-to-t from-[#030303]/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
        <h3 className="text-white font-bold text-sm text-center drop-shadow-lg">{team.name}</h3>
      </div>

      {/* Efeito de brilho dourado no hover */}
      <div className="absolute inset-0 z-5 bg-gradient-to-br from-[#ffc700]/0 to-[#ffc700]/0 group-hover:from-[#ffc700]/10 group-hover:via-transparent group-hover:to-[#f1d85a]/5 transition-all duration-500 rounded-tl-[25px] rounded-br-[25px]" />
    </div>
  )
}
