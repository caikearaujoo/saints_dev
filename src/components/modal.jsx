"use client"

import { useEffect } from "react"

export function Modal({ isOpen, onClose, children }) {
  // Prevenir scroll do body quando modal está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.paddingRight = "0px"
    } else {
      document.body.style.overflow = "unset"
      document.body.style.paddingRight = "0px"
    }

    // Cleanup quando componente desmonta
    return () => {
      document.body.style.overflow = "unset"
      document.body.style.paddingRight = "0px"
    }
  }, [isOpen])

  // Fechar modal ao pressionar ESC
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
        padding: "0", // Sem padding no mobile
      }}
      onClick={onClose}
    >
      <div
        className="relative w-full h-full sm:w-full sm:h-auto sm:max-w-4xl sm:max-h-[95vh] sm:m-4 overflow-hidden bg-[#030303] sm:rounded-2xl shadow-2xl border border-[#ffc700]/20 flex flex-col"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: isOpen ? "modalSlideIn 0.3s ease-out" : "none",
          minHeight: "100vh", // Altura mínima de 100vh no mobile
        }}
      >
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-[#ECECEC]/10 hover:bg-[#ECECEC]/20 transition-colors"
          aria-label="Fechar modal"
        >
          <svg className="w-6 h-6 text-[#ECECEC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Conteúdo do modal com scroll */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 pb-8">{children}</div>
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

        /* Mobile: modal ocupa toda a tela sem margens */
        @media (max-width: 640px) {
          .fixed.inset-0 {
            padding: 0 !important;
          }
          
          .fixed.inset-0 > div {
            width: 100vw !important;
            height: 100vh !important;
            max-width: none !important;
            max-height: none !important;
            border-radius: 0 !important;
            margin: 0 !important;
            min-height: 100vh !important;
          }
        }

        /* Customizar scrollbar */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(236, 236, 236, 0.1);
          border-radius: 3px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(255, 199, 0, 0.3);
          border-radius: 3px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 199, 0, 0.5);
        }
      `}</style>
    </div>
  )
}
