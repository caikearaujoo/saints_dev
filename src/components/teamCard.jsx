"use client"

import { useRef } from "react"
import Image from "next/image"

export default function TeamCard({ team, onClick }) {
  const cardRef = useRef(null)

  const handleMouseEnter = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "translateY(-8px) scale(1.02)"
    }
  }

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "translateY(0) scale(1)"
    }
  }

  return (
    <div
      ref={cardRef}
      className="cursor-pointer bg-[#ECECEC] shadow-xl w-full aspect-square max-w-[240px] mx-auto
           rounded-tl-[25px] rounded-br-[25px] 
           flex flex-col items-center justify-center 
           transition-all duration-300 ease-out
           group border border-[#030303] hover:shadow-2xl hover:border-[#030303]"
      onClick={() => onClick(team)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Container da Imagem */}
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 group-hover:scale-110 transition-transform duration-300">
        <Image
          src={team.logo || "/placeholder.svg"}
          alt={team.name}
          fill
          className="object-contain filter group-hover:brightness-110 transition-all duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </div>
    </div>
  )
}
