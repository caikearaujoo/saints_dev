"use client"

import { useEffect } from "react"

export function Modal({ isOpen, onClose, children }) {
  // Hooks useEffect permanecem os mesmos
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose()
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEsc)
    }
    return () => {
      document.removeEventListener("keydown", handleEsc)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        backgroundColor: "rgba(3, 3, 3, 0.85)",
        backdropFilter: "blur(4px)",
      }}
      onClick={onClose}
    >
      <div
        className="relative flex h-screen w-full flex-col justify-center bg-[#030303] shadow-2xl sm:h-auto sm:max-h-[95vh] sm:max-w-4xl sm:m-4 sm:rounded-2xl border-t sm:border border-[#ffc700]/20"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: isOpen ? "modalSlideIn 0.3s ease-out" : "none",
        }}
      >
        {/* 1. Área de conteúdo vem primeiro */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 pb-8">
          {children}
        </div>

        {/* 2. Botão de fechar vem por último para garantir que fique por cima */}
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-5 right-5 md:top-4 md:right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-[#ECECEC]/10 hover:bg-[#ECECEC]/20 transition-colors"
          aria-label="Fechar modal"
        >
          <svg className="w-6 h-6 text-[#ECECEC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .overflow-y-auto::-webkit-scrollbar { width: 6px; }
        .overflow-y-auto::-webkit-scrollbar-track { background: rgba(236, 236, 236, 0.1); border-radius: 3px; }
        .overflow-y-auto::-webkit-scrollbar-thumb { background: rgba(255, 199, 0, 0.3); border-radius: 3px; }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover { background: rgba(255, 199, 0, 0.5); }
      `}</style>
    </div>
  )
}