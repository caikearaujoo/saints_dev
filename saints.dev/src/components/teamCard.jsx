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
      className="cursor-pointer bg-white shadow-xl w-full aspect-square max-w-[280px] mx-auto
                 rounded-tl-[30px] rounded-br-[30px] 
                 flex flex-col items-center justify-center 
                 transition-all duration-300 ease-out
                 group border-2 border-black hover:shadow-2xl "
      onClick={() => onClick(team)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Container da Imagem */}
      <div className="relative w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 group-hover:scale-110 transition-transform duration-300">
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
