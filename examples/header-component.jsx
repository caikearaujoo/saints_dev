// Se você tem um header/navbar, modifique assim:
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="logo">
          <h1>UFU Saints</h1>
        </div>

        <div className="nav-links flex items-center space-x-4">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            Sobre
          </Link>

          {/* Botão de Login que agora vai para inscrição */}
          <Link href="/signup">
            <button
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Log in
            </button>
          </Link>

          {/* Botão principal de CTA */}
          <Link href="/signup">
            <button
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
              Junte-se a nós
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
