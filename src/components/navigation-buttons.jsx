import Link from "next/link"
import { Button } from "@/components/ui/button"

// Exemplo 1: Botão simples com Link
export function JoinUsButton() {
  return (
    <Link href="/signup">
      <Button
        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
        Junte-se a nós
      </Button>
    </Link>
  );
}

// Exemplo 2: Botão de Login (que agora vai para inscrição)
export function LoginButton() {
  return (
    <Link href="/signup">
      <Button
        variant="outline"
        className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
        Log in
      </Button>
    </Link>
  );
}

// Exemplo 3: Botão "Faça parte do time"
export function JoinTeamButton() {
  return (
    <Link href="/signup">
      <Button
        size="lg"
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
        Faça parte do time
      </Button>
    </Link>
  );
}

// Exemplo 4: Se você tem um botão customizado sem usar o componente Button
export function CustomJoinButton() {
  return (
    <Link href="/signup" className="inline-block">
      <button
        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
        Junte-se aos Saints
      </button>
    </Link>
  );
}

// Exemplo 5: Para botões em hero sections ou CTAs
export function HeroCTAButton() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link href="/signup">
        <Button
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg">
          Faça parte do time
        </Button>
      </Link>
      <Link href="/signup">
        <Button
          size="lg"
          variant="outline"
          className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg">
          Inscreva-se agora
        </Button>
      </Link>
    </div>
  );
}
