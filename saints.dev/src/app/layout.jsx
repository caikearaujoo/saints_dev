// src/app/layout.jsx
import './globals.css';
import '../styles/tailwind.css';
import Header from '../components/Navbar';
import Footer from '../components/Footer';
import { nikea } from '../fonts/fonts';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={nikea.variable}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=supreme@400,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="text-white font-supreme">
        {/* Container para o efeito de luz animada */}
        <div className="light-overlay-container">
          <div className="light-spot light-spot-1"></div>
          <div className="light-spot light-spot-2"></div>
          {/* Adicione mais light-spot-N aqui se quiser mais luzes */}
        </div>

        {/* Conteúdo principal do site */}
        <div className="relative z-0"> {/* Garante que o conteúdo fique acima das luzes */}
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}