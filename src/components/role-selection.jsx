"use client";

export function RoleSelection({ onRoleSelect }) {
  return (
    <div
      className="shadow-input mx-auto w-full max-w-2xl rounded-none bg-white p-6 md:rounded-2xl md:p-8 dark:bg-black"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
          Junte-se aos UFU Saints
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300">
          Escolha como você gostaria de participar da nossa atlética
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Opção Staff */}
        <div
          onClick={() => onRoleSelect("staff")}
          className="group cursor-pointer rounded-xl border-2 border-gray-200 dark:border-gray-700 p-6 transition-all duration-300 hover:border-purple-500 hover:shadow-lg dark:hover:border-purple-400"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 rounded-full bg-purple-100 dark:bg-purple-900/30 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors flex items-center justify-center">
              {/* Simulando ícone de usuários com 3 círculos */}
              <div className="flex space-x-1">
                <div className="w-4 h-4 rounded-full bg-purple-600 dark:bg-purple-400"></div>
                <div className="w-4 h-4 rounded-full bg-purple-600 dark:bg-purple-400"></div>
                <div className="w-4 h-4 rounded-full bg-purple-600 dark:bg-purple-400"></div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                Staff
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                Trabalhe nos bastidores organizando eventos, criando conteúdo,
                gerenciando redes sociais e muito mais
              </p>
              <ul className="text-xs text-neutral-500 dark:text-neutral-400 space-y-1">
                <li>• Organização de eventos</li>
                <li>• Marketing e design</li>
                <li>• Gestão de redes sociais</li>
                <li>• Desenvolvimento</li>
              </ul>
            </div>

            <div className="flex items-center text-purple-600 dark:text-purple-400 font-medium group-hover:translate-x-1 transition-transform">
              <span className="text-sm">Candidatar-se como Staff</span>
              {/* Simulando seta para direita com CSS */}
              <div className="ml-2 w-3 h-3 border-t-2 border-r-2 border-purple-600 dark:border-purple-400 rotate-45"></div>
            </div>
          </div>
        </div>

        {/* Opção Player */}
        <div
          onClick={() => onRoleSelect("player")}
          className="group cursor-pointer rounded-xl border-2 border-gray-200 dark:border-gray-700 p-6 transition-all duration-300 hover:border-blue-500 hover:shadow-lg dark:hover:border-blue-400"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 rounded-full bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors flex items-center justify-center">
              {/* Simulando ícone gamepad com retângulos e círculos */}
              <div className="relative w-8 h-6 bg-blue-600 dark:bg-blue-400 rounded-md">
                {/* Botões */}
                <div className="absolute top-1 left-1 w-2 h-2 bg-blue-100 rounded-full"></div>
                <div className="absolute top-1 right-1 w-2 h-2 bg-blue-100 rounded-full"></div>
                <div className="absolute bottom-1 left-2 w-2 h-2 bg-blue-100 rounded-full"></div>
                <div className="absolute bottom-1 right-2 w-2 h-2 bg-blue-100 rounded-full"></div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                Player
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                Represente a UFU nos esportes eletrônicos e compete em diversos
                jogos e modalidades
              </p>
              <ul className="text-xs text-neutral-500 dark:text-neutral-400 space-y-1">
                <li>• League of Legends</li>
                <li>• Valorant</li>
                <li>• CS2</li>
                <li>• E muito mais!</li>
              </ul>
            </div>

            <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-1 transition-transform">
              <span className="text-sm">Candidatar-se como Player</span>
              {/* Simulando seta para direita com CSS */}
              <div className="ml-2 w-3 h-3 border-t-2 border-r-2 border-blue-600 dark:border-blue-400 rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
