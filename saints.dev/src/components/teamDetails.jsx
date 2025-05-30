"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function TeamDetails({ team, onBack }) {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const players = team?.players || [];
  const visiblePlayers = players.slice(currentIndex, currentIndex + 5);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < players.length - 5 ? prev + 1 : players.length - 5
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

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
            <Image src={team.logo} alt={`${team.name} Logo`} fill className="object-contain" />
          </div>
        )}
      </div>

      <div className="relative flex justify-center items-center gap-2">
        {/* Botão anterior */}
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 bg-white text-black px-3 py-2 rounded-full shadow hover:scale-110 transition"
        >
          ◀
        </button>

        {/* Cards */}
        <div className="flex gap-6 overflow-hidden justify-center w-full max-w-[1200px]">
          {visiblePlayers.map((player, index) => (
            <div
              key={index}
              className="relative group w-[200px] sm:w-[220px] md:w-[250px] transition-transform duration-500 transform hover:scale-105"
            >
              <div className="w-full h-[320px] sm:h-[360px] overflow-hidden rounded-tl-3xl rounded-br-3xl shadow-xl relative">
                <Image
                  src={player.photo || "/placeholder.svg"}
                  alt={player.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-tl-3xl rounded-br-3xl"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                  <h3 className="text-lg font-bold">{player.name}</h3>
                  <p className="text-sm italic">{team.name}</p>
                  <p className="text-xs uppercase tracking-wider">{player.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão próximo */}
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 bg-white text-black px-3 py-2 rounded-full shadow hover:scale-110 transition"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
