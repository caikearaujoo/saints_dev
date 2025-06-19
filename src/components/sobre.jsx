"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import Link from 'next/link';
import { AboutJoinButton } from "./signup-buttons"


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function About() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const textRef = useRef(null)
  const imageRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação do título
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          x: -50, 
        },
        {
          opacity: 1,
          x: 0,
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

      // Animação do texto
      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Animação da imagem
      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          scale: 0.8,
          rotation: -5,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.2,
          delay: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Animação do botão
      gsap.fromTo(
        buttonRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="sobre-nos" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header - Alterada apenas a fonte do título, mantendo o conteúdo */}
        <h2
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 tracking-wider flex items-center text-white font-titles mt-8 lg:mt-12"
        >
          <span className="mr-3 sm:mr-4 leading-none">
            <Image
              src="/imgs/logo-black.svg"
              alt="Saints Logo"
              width={40}
              height={40}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
            />
          </span>
          QUEM SOMOS
        </h2>

        {/* Content Container - items-start para alinhar colunas pelo topo */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-16 items-start">
          {/* Text Column - SEM ALTERAÇÕES */}
          <div
            ref={textRef}
            className="w-full lg:w-[50%] xl:max-w-[600px] space-y-3 sm:space-y-4 text-white-800 leading-relaxed text-sm sm:text-base md:text-lg pl-0 lg:pl-4"
          >
            <p>
              A UFU Saints é a atlética de e-sports da Universidade Federal de Uberlândia. Fundada em 2024, surgiu da
              vontade de criar um espaço onde jogar fosse também se <strong>conectar, competir e crescer</strong> em
              equipe. O projeto nasceu como uma nova fase da antiga atlética Santa Bronx, com identidade renovada, novos
              objetivos e muito mais atitude.
            </p>
            <p>
              Hoje, a UFU Saints <strong>é mais que um time: é uma comunidade</strong>. Um grupo de estudantes que
              acredita que os jogos eletrônicos podem ser um meio de inclusão, protagonismo e inovação dentro da
              universidade pública. Organizamos treinos, lives, eventos, campeonatos e conteúdos que aproximam a galera
              gamer — da UFU e de fora dela. Cada membro contribui para transformar nosso servidor em um verdadeiro hub
              de criatividade, amizade e competitividade.
            </p>
            <p>
              Nosso lema? <strong>Jogar junto, crescer junto</strong>. E isso vale tanto dentro das partidas quanto fora
              delas.
            </p>
          </div>

          {/* Image Column */}
          <div className="w-full lg:w-[50%] xl:max-w-[600px] relative aspect-[774/654] lg:ml-auto border-2 border-gray-300 shadow-lg rounded-xl lg:-mt-16">
            <div ref={imageRef} className="absolute inset-0 bg-black overflow-hidden rounded-xl">
              <Image
                src="/imgs/aboutimg.png"
                alt="UFU Saints E-sports team"
                fill
                priority
                className="object-cover opacity-100"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
            {/* Botão Amarelo Sobreposto */}
         
            <AboutJoinButton
              ref={buttonRef}
              className="absolute -bottom-7 right-[-7px] sm:-right-6 z-20 bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-8 py-3 rounded-md text-sm uppercase tracking-wide shadow-xl transition-all transform hover:scale-105 btn-clipped-left btn-3d-effect cursor-pointer"
            >
              FAÇA PARTE DO TIME
            </AboutJoinButton>
      
          </div>
        </div>
      </div>
    </section>
  )
}