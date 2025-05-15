
  
'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaDiscord, FaTwitch, FaInstagram, FaTimes } from 'react-icons/fa';

export default function Hero() {
  const imagens = [
    '/imgs/img1.png',
    '/imgs/img1.png',
    '/imgs/img1.png'
  ];

  const [atual, setAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setAtual((prev) => (prev + 1) % imagens.length);
    }, 9000); // 9 segundos

    return () => clearInterval(intervalo); // limpeza
  }, [imagens.length]);

  const trocarSlide = (index) => {
    setAtual(index);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Imagens */}
      {imagens.map((imagem, index) => (
      <Image
          key={index}
          src={imagem}
          alt={`Slide ${index}`}
          fill
          priority={index === 0}
          className={`absolute object-cover transition-opacity duration-1000 ${
            index === atual ? 'opacity-100' : 'opacity-0'
          } z-0`}
    />


      ))}



      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {imagens.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              index === atual ? 'bg-white' : 'bg-white/30'
            } transition-all duration-300`}
            onClick={() => trocarSlide(index)}
          />
        ))}
      </div>
      
        {/* Redes sociais à esquerda */}
        <div className="absolute left-4 bottom-24 flex flex-col gap-4 text-white text-2xl">
          <a href="#"><FaDiscord /></a>
          <a href="#"><FaTwitch /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTimes /></a>
        </div>
    </section>
  );
}

