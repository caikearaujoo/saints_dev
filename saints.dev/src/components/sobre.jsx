import Image from 'next/image';

export default function About() {
  return (
    <section className="bg-[#f6f0e8] py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 tracking-wider flex items-center font-nikea">
          <span className="text-[#000000] text-5xl sm:text-6xl md:text-7xl mr-3 sm:mr-4 leading-none">▚</span>
          QUEM SOMOS
        </h2>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-16">
          {/* Text Column - Alinhado mais à esquerda */}
          <div className="w-full lg:w-[50%] xl:w-[600px] space-y-4 sm:space-y-6 text-gray-800 leading-relaxed text-base sm:text-lg md:text-xl pl-0 lg:pl-4">
            <p>
              A UFU Saints é a atlética de e-sports da Universidade Federal de Uberlândia. Fundada em 2024, surgiu da vontade de criar um espaço onde jogar fosse também se <strong>conectar, competir e crescer</strong> em equipe. O projeto nasceu como uma nova fase da antiga atlética Santa Bronx, com identidade renovada, novos objetivos e muito mais atitude.
            </p>
            <p>
              Hoje, a UFU Saints <strong>é mais que um time: é uma comunidade</strong>. Um grupo de estudantes que acredita que os jogos eletrônicos podem ser um meio de inclusão, protagonismo e inovação dentro da universidade pública. Organizamos treinos, lives, eventos, campeonatos e conteúdos que aproximam a galera gamer — da UFU e de fora dela. Cada membro contribui para transformar nosso servidor em um verdadeiro hub de criatividade, amizade e competitividade.
            </p>
            <p>
              Nosso lema? <strong>Jogar junto, crescer junto</strong>. E isso vale tanto dentro das partidas quanto fora delas.
            </p>
          </div>

          {/* Image Column - Alinhada mais à direita */}
          <div className="w-full lg:w-[50%] xl:w-[774px] relative aspect-[774/654] min-h-[400px] sm:min-h-[500px] md:min-h-[654px] lg:ml-auto">
            <div className="absolute inset-0 bg-black overflow-hidden rounded-lg border-2 border-gray-800 shadow-lg mr-0 lg:-mr-8">
              {/* Background Image */}
              <Image
                src='/imgs/aboutimg.jpg'
                alt="UFU Saints E-sports team"
                fill
                priority
                className="object-cover opacity-90"
                sizes="(max-width: 1024px) 100vw, 774px"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Top Left Text */}
              <div className="absolute top-6 left-6 text-white text-xs sm:text-sm font-medium uppercase tracking-[0.3em]">
                A Saints acredita que
              </div>

              {/* Staggered Text Elements */}
              <div className="absolute top-[15%] left-[10%] text-white font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                NINGUÉM
              </div>
              <div className="absolute top-[50%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 text-white font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                VENCE
              </div>
              <div className="absolute bottom-[20%] right-[10%] text-white font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                SOZINHO
              </div>

              {/* Logo + Text Bottom Left */}
              <div className="absolute bottom-6 left-6 flex items-end gap-2 z-10">
                <div className="bg-white p-1 rounded-sm flex-shrink-0">
                  <Image 
                    src='/imgs/img1.jpg'
                    width={32}
                    height={32}
                    alt="Saints Logo"
                    className="w-8 h-8 sm:w-9 sm:h-9"
                  />
                </div>
                <p className="text-amber-100 text-xs leading-tight max-w-[160px] sm:max-w-[200px]">
                  Bons resultados são frutos de um bom trabalho coletivo. 
                  <p>Se você também acredita nisso, junte-se a nós!</p>
                </p>
              </div>
            </div>

            {/* Botão Amarelo Sobreposto */}
            <button className="absolute -bottom-4 right-6 sm:right-8 z-20 bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-5 py-3 rounded-md border-2 border-black text-sm uppercase tracking-wide shadow-lg transition-all transform hover:scale-105">
              FAÇA PARTE DO TIME
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}