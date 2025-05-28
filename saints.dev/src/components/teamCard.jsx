// src/components/TeamCard.jsx

import Image from 'next/image';

export default function TeamCard({ team, onClick }) {
  return (
    <div
      className="cursor-pointer bg-white shadow-xl // Fundo branco e sombra
                         w-[240px] h-[240px] // Tamanho fixo de 240x240px
                         rounded-tl-[30px] rounded-br-[30px] // Arredonda apenas os cantos superior esquerdo e inferior direito (valor exemplo)
                         flex flex-col items-center justify-center // Centraliza o conteúdo
                         hover:scale-105 transition-transform duration-300 // Efeito de hover
                         group"
      onClick={() => onClick(team)}
    >
      {/* Container da Imagem */}
      {/* Ajuste o tamanho da imagem interna para que ela preencha bem o card */}
      <div className="relative w-40 h-40"> {/* Exemplo: 160x160px para a imagem */}
        <Image
          src={team.logo}
          alt={team.name}
          fill
          className="object-contain" // Garante que a imagem caiba dentro do container
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </div>
    </div>
  );
}