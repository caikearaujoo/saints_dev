"use client"
import { useState } from "react"
import { Modal } from "./modal"
import { SignupFlow } from "./signup-flow"

// Botão para Navbar - CLASSES ORIGINAIS MANTIDAS
export function JoinTeamButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600 text-black transition-colors cursor-pointer"
      >
        Faça parte do time
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <SignupFlow />
      </Modal>
    </>
  )
}

// Botão para Hero Desktop - CLASSES ORIGINAIS MANTIDAS
export function HeroJoinButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg btn-3d-effect font-orbitron cursor-pointer"
      >
        Junte-se a nós
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <SignupFlow />
      </Modal>
    </>
  )
}

// Botão para Hero Mobile - CLASSES ORIGINAIS MANTIDAS
export function HeroMobileJoinButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 font-orbitron"
      >
        Junte-se a nós
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <SignupFlow />
      </Modal>
    </>
  )
}

// Botão para seção "Quem Somos" - CLASSES ORIGINAIS MANTIDAS
export function AboutJoinButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
             className="absolute -bottom-7 right-[-7px] sm:-right-6 z-20 bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-8 py-3 rounded-md text-sm uppercase tracking-wide shadow-xl transition-all transform hover:scale-105 btn-clipped-left btn-3d-effect cursor-pointer"
      >
        Faça parte do time
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <SignupFlow />
      </Modal>
    </>
  )
}
