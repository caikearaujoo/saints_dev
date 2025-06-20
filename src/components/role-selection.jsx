"use client"

export function RoleSelection({ onRoleSelect }) {
  return (
    <div className="w-full min-h-full flex flex-col justify-center max-w-3xl mx-auto py-4">
      <div className="text-center mb-6 sm:mb-8 px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#ECECEC] mb-3">Junte-se aos UFU Saints</h2>
        <p className="text-sm sm:text-base text-[#ECECEC]/70">
          Escolha como você gostaria de participar da nossa atlética
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 px-4 flex-1">
        {/* Opção Staff */}
        <div
          onClick={() => onRoleSelect("staff")}
          className="group cursor-pointer rounded-xl border-2 border-[#ECECEC]/20 p-4 sm:p-6 transition-all duration-300 hover:border-[#ffc700] hover:shadow-lg hover:shadow-[#ffc700]/20 min-h-[280px] sm:min-h-[320px] flex flex-col"
        >
          <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 h-full">
            <div className="p-3 sm:p-4 rounded-full bg-[#ffc700]/10 group-hover:bg-[#ffc700]/20 transition-colors flex items-center justify-center">
              {/* Ícone de usuários */}
              <div className="flex space-x-1">
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#ffc700]"></div>
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#ffc700]"></div>
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#ffc700]"></div>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-lg sm:text-xl font-semibold text-[#ECECEC] mb-2">Staff</h3>
              <p className="text-xs sm:text-sm text-[#ECECEC]/70 mb-3 sm:mb-4 leading-relaxed">
                Trabalhe nos bastidores organizando eventos, criando conteúdo, gerenciando redes sociais e muito mais
              </p>
              <ul className="text-xs sm:text-sm text-[#ECECEC]/60 space-y-1">
                <li>• Organização de eventos</li>
                <li>• Marketing e design</li>
                <li>• Gestão de redes sociais</li>
                <li>• Desenvolvimento</li>
              </ul>
            </div>

            <div className="flex items-center text-[#ffc700] font-medium group-hover:translate-x-1 transition-transform mt-auto">
              <span className="text-xs sm:text-sm">Candidatar-se como Staff</span>
              <div className="ml-2 w-3 h-3 border-t-2 border-r-2 border-[#ffc700] rotate-45"></div>
            </div>
          </div>
        </div>

        {/* Opção Player */}
        <div
          onClick={() => onRoleSelect("player")}
          className="group cursor-pointer rounded-xl border-2 border-[#ECECEC]/20 p-4 sm:p-6 transition-all duration-300 hover:border-[#ffc700] hover:shadow-lg hover:shadow-[#ffc700]/20 min-h-[280px] sm:min-h-[320px] flex flex-col"
        >
          <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 h-full">
            <div className="p-3 sm:p-4 rounded-full bg-[#ffc700]/10 group-hover:bg-[#ffc700]/20 transition-colors flex items-center justify-center">
              {/* Ícone gamepad */}
              <div className="relative w-6 h-4 sm:w-8 sm:h-6 bg-[#ffc700] rounded-md">
                <div className="absolute top-0.5 left-0.5 sm:top-1 sm:left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#030303] rounded-full"></div>
                <div className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#030303] rounded-full"></div>
                <div className="absolute bottom-0.5 left-1 sm:bottom-1 sm:left-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#030303] rounded-full"></div>
                <div className="absolute bottom-0.5 right-1 sm:bottom-1 sm:right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#030303] rounded-full"></div>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-lg sm:text-xl font-semibold text-[#ECECEC] mb-2">Player</h3>
              <p className="text-xs sm:text-sm text-[#ECECEC]/70 mb-3 sm:mb-4 leading-relaxed">
                Represente a UFU nos esportes eletrônicos e compete em diversos jogos e modalidades
              </p>
              <ul className="text-xs sm:text-sm text-[#ECECEC]/60 space-y-1">
                <li>• League of Legends</li>
                <li>• Valorant</li>
                <li>• CS2</li>
                <li>• E muito mais!</li>
              </ul>
            </div>

            <div className="flex items-center text-[#ffc700] font-medium group-hover:translate-x-1 transition-transform mt-auto">
              <span className="text-xs sm:text-sm">Candidatar-se como Player</span>
              <div className="ml-2 w-3 h-3 border-t-2 border-r-2 border-[#ffc700] rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
