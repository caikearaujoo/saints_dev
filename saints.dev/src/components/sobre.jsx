import Image from 'next/image';

export default function About() {
  return (
    <section className="bg-[#f6f0e8b0] py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header - Mantido como no último ajuste (Nikea e alinhamento esquerdo do texto) */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 tracking-wider flex items-center text-black font-nikea mt-8 lg:mt-12">
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
          <div className="w-full lg:w-[50%] xl:max-w-[600px] space-y-3 sm:space-y-4 text-gray-800 leading-relaxed text-sm sm:text-base md:text-lg pl-0 lg:pl-4">
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

          {/* Image Column - AJUSTES AQUI */}
          {/* xl:max-w permanece o valor ajustado para proporção, ex: 600px, 550px, 500px - você deve ajustar no DevTools */}
          <div className="w-full lg:w-[50%] xl:max-w-[600px] relative aspect-[774/654] lg:ml-auto border-2 border-gray-300 shadow-lg rounded-xl lg:-mt-16"> {/* <-- Rounded-xl para mais arredondamento */}
            <div className="absolute inset-0 bg-black overflow-hidden rounded-xl"> {/* <-- Rounded-xl aqui também */}
              {/* Background Image - Ajustando 'top' do object-cover para subir a imagem visualmente */}
              <Image
                src='/imgs/aboutimg.png'
                alt="UFU Saints E-sports team"
                fill
                priority
                className="object-cover opacity-100" // <-- Adicionado object-top para mover a imagem para cima
                sizes="(max-width: 1024px) 100vw, 600px"
              />


            </div>

            {/* Botão Amarelo Sobreposto */}
            {/* O -right-8 do Figma parece indicar que ele "sai" um pouco do card. */}
            <button className="absolute -bottom-7 right-[-7px] sm:-right-6 z-20 bg-[#E3A524] hover:bg-yellow-600 text-white font-bold px-8 py-3 rounded-md text-sm uppercase tracking-wide shadow-x1 transition-all transform hover:scale-105 btn-clipped-left btn-3d-effect">
              FAÇA PARTE DO TIME
            </button>
            </div>
          </div>
        </div>
    </section>
  );
}