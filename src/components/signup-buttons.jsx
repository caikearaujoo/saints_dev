"use client"
import { useState } from "react"
import { Modal } from "./modal"
import { SignupFlow } from "./signup-flow"

// Botão para Navbar
export function JoinTeamButton({ className }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <button
        onClick={handleOpenModal}
        className={
          className ||
          "bg-[#f1d85a] text-[#030303] hover:bg-[#ffc700] px-6 py-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer"
        }
      >
        Faça parte do time
      </button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <SignupFlow />
      </Modal>
    </>
  )
}

// Botão para Hero Desktop
export function HeroJoinButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="bg-[#ffc700] hover:bg-[#f1d85a] text-[#030303] px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg btn-3d-effect font-orbitron cursor-pointer"
      >
        Junte-se a nós
      </button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <SignupFlow />
      </Modal>
    </>
  )
}

// Botão para Hero Mobile
export function HeroMobileJoinButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="bg-[#ffc700] hover:bg-[#f1d85a] text-[#030303] px-6 py-3 rounded-lg font-semibold transition-all duration-300 font-orbitron cursor-pointer"
      >
        Junte-se a nós
      </button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <SignupFlow />
      </Modal>
    </>
  )
}

// Botão para seção "Quem Somos"
export function AboutJoinButton({ className, children }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <button
        onClick={handleOpenModal}
        className={
          className ||
          "absolute -bottom-7 right-[-7px] sm:-right-6 z-20 bg-[#f1d85a] hover:bg-[#ffc700] text-[#030303] font-bold px-8 py-3 rounded-md text-sm uppercase tracking-wide shadow-xl transition-all transform hover:scale-105 btn-clipped-left btn-3d-effect cursor-pointer"
        }
      >
        {children || "FAÇA PARTE DO TIME"}
      </button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <SignupFlow />
      </Modal>
    </>
  )
}
