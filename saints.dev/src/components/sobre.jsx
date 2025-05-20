// components/about.jsx
import Image from 'next/image';

export default function About() {
  return (
    <section className="bg-[#f6f0e8] py-20 px-8 flex flex-col md:flex-row justify-between items-center gap-10">
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold flex items-center gap-4">
          <span className="text-yellow-500 text-6xl">▚</span> QUEM SOMOS
        </h2>
        <p className="text-gray-700 leading-relaxed">
          A UFU Saints é a atlética de e-sports da Universidade Federal de Uberlândia...
        </p>
        <p className="font-bold">Nosso lema? <strong>Jogar junto, crescer junto.</strong></p>
      </div>

      <div className="relative md:w-1/2">
        <Image
          src="/imgs/img1.png"
          alt="Time UFU Saints"
          width={600}
          height={400}
          className="rounded-lg"
        />
        <div className="absolute bottom-4 left-4 text-white p-4 bg-black/50 rounded">
          <p><strong>À UFU SAINTS</strong> acredita que <strong>NINGUÉM VENCE SOZINHO.</strong></p>
          <p>Por isso, te convidamos a fazer parte dessa comunidade...</p>
        </div>
        <button className="absolute bottom-4 right-4 bg-yellow-500 px-6 py-2 rounded-md text-white hover:bg-yellow-600">
          FAÇA PARTE DO TIME
        </button>
      </div>
    </section>
  );
}
