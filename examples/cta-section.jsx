// Se você tem uma seção de Call-to-Action, modifique assim:
import Link from "next/link"

export function CTASection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Pronto para fazer parte dos Saints?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Junte-se à nossa comunidade e represente a UFU nos esportes eletrônicos
        </p>

        <Link href="/signup">
          <button
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105">
            Junte-se a nós
          </button>
        </Link>
      </div>
    </section>
  );
}
