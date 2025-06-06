// Se você tem uma seção hero, modifique assim:
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">UFU Saints</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">A maior atlética de esportes eletrônicos da UFU</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Botão principal */}
          <Link href="/signup">
            <button
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Faça parte do time
            </button>
          </Link>

          {/* Botão secundário */}
          <Link href="/signup">
            <button
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-colors">
              Inscreva-se agora
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
