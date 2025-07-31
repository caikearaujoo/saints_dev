
# 🏆 UFU Saints — Plataforma da Atlética de Esportes Eletrônicos

Este projeto é uma plataforma full stack desenvolvida para a atlética de e-sports **UFU Saints**, da Universidade Federal de Uberlândia. A aplicação gerencia inscrições, perfis e informações de membros da organização, com foco em escalabilidade, responsividade e praticidade na gestão de dados.

---

## 🚀 Tecnologias Utilizadas

| Tecnologia     | Motivo da Escolha |
|----------------|------------------|
| **Next.js**     | Framework moderno baseado em React, com renderização híbrida (SSR e SSG) e fácil integração full stack. |
| **React.js**    | Biblioteca base para construção da UI com componentes reutilizáveis. |
| **TailwindCSS** | Estilização rápida e moderna com classes utilitárias, ideal para prototipação e produção. |
| **JavaScript**  | Linguagem principal do front-end e utilizada também no back-end com Node.js. |
| **Node.js**     | Ambiente de execução server-side para o backend do Next.js. |
| **Express**     | Utilizado para usar o server do Next.js. |
| **Prisma**      | ORM moderno que facilita a comunicação com banco de dados relacional e modelagem clara dos dados. |
| **PostgreSQL**  | Banco de dados relacional robusto e open source, ideal para dados estruturados. |
| **Supabase**    | Banco em nuvem baseado em PostgreSQL, usado para hospedar os dados com praticidade e escalabilidade. |
| **Axios**       | Cliente HTTP usado para comunicação entre front-end e back-end. |
| **GSAP**        | Biblioteca de animações para dar vida à interface com transições suaves. |
| **Render**      | Plataforma de hospedagem cloud usada para disponibilizar a API de forma escalável e com deploy contínuo. |

---

## 🧱 Estrutura do Projeto

```plaintext
SAINTS_DEV/
├── .next/                   # Build gerado pelo Next.js (não editar)
├── node_modules/            # Dependências do projeto
├── public/
│   └── imgs/                # Imagens públicas acessíveis diretamente via URL
│       ├── games/           # Imagens específicas da seção "games"
│       ├── home/            # Imagens utilizadas na home
│       └── teams/           # Logos e imagens dos times
├── src/
│   ├── app/                 # Estrutura de rotas baseada no App Router do Next.js
│   ├── components/          # Componentes reutilizáveis da interface
│   ├── data/                # Arquivos de dados locais (mocks, arquivos JSON, etc.)
│   ├── fonts/               # Arquivos de fontes utilizados no projeto
│   ├── generated/           # Código gerado automaticamente (ex: Prisma Client)
│   ├── lib/                 # Funções auxiliares, utilitários e configuração de libs
│   ├── services/
│   │   └── api.js           # Arquivo central para requisições HTTP (ex: com Axios)
│   ├── styles/              # Estilos globais, Tailwind e configurações de tema
│   └── server/              # Lógica relacionada ao backend (ex: middlewares, handlers)
├── .env                     # Variáveis de ambiente (NÃO versionar)
├── .gitignore               # Arquivos e pastas ignoradas pelo Git
├── README.md                # Documentação principal do projeto
├── package.json             # Dependências, scripts e metadados do projeto
├── package-lock.json        # Lockfile do npm para controle de versões
├── tailwind.config.js       # Configuração do TailwindCSS
├── postcss.config.js        # Configuração do PostCSS
├── next.config.mjs          # Configurações específicas do Next.js
├── jsconfig.json            # Configuração de path aliases no projeto
└── components.json          # (Opcional) Configurações relacionadas à UI (ex: Storybook)



---

## ☁️ Supabase como Banco de Dados na Nuvem

O Supabase foi escolhido por ser uma solução moderna, gratuita (até certo limite), baseada em PostgreSQL, com painel intuitivo e suporte a autenticação, REST, Realtime e mais.

**Vantagens:**
- Zero configuração de servidor
- Permite colaboração com outros devs
- Possibilidade de expor Views customizadas
- Ideal para protótipos, MVPs e apps de produção em pequena/média escala

---

## 📄 Funcionalidades Atuais

- 📋 Cadastro de membros (Staff e Player)
- 🧍 Visualização completa das informações do membro via Views SQL
- 📩 Integração com banco de dados remoto
- 🎨 Interface animada com GSAP
- 📱 Layout responsivo com TailwindCSS

---

## 🎨 Figma & Processo de Design

Durante o desenvolvimento do projeto, utilizamos o [Figma](https://www.figma.com/board/c0S0V92jKQYpnjRlesbVEE/Saints-%7Bdev%7D?node-id=0-1&p=f&t=tHm7P8ce8QXYZz2W-0) como ferramenta principal para brainstorm e construção da identidade visual do sistema.

Através do board colaborativo, conseguimos:

- 📌 Centralizar ideias e referências visuais para a interface;
- 🧠 Mapear fluxos de navegação e usabilidade;
- 👥 Colaborar em tempo real com os membros do time;
- 🎯 Validar rapidamente layouts antes da implementação;
- 🧩 Organizar os elementos de design reutilizáveis.

> 🔗 [Acesse o board do Figma aqui](https://www.figma.com/board/c0S0V92jKQYpnjRlesbVEE/Saints-%7Bdev%7D?node-id=0-1&p=f&t=tHm7P8ce8QXYZz2W-0)

Essa etapa foi essencial para garantir que o projeto tivesse consistência visual, acessibilidade e foco na experiência do usuário desde o início da concepção até o desenvolvimento.


---

## 🤝 Contribuição

Sinta-se à vontade para contribuir abrindo uma issue ou enviando um pull request. Qualquer ajuda é bem-vinda!

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

