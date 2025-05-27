// src/app/layout.jsx
import './globals.css';
import '../styles/tailwind.css';
import Header from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        {/* Fontes do Fontshare */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=supreme@400,700&f[]=nikea@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

