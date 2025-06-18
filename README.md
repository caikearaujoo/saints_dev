
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
| **Prisma**      | ORM moderno que facilita a comunicação com banco de dados relacional e modelagem clara dos dados. |
| **PostgreSQL**  | Banco de dados relacional robusto e open source, ideal para dados estruturados. |
| **Supabase**    | Banco em nuvem baseado em PostgreSQL, usado para hospedar os dados com praticidade e escalabilidade. |
| **Axios**       | Cliente HTTP usado para comunicação entre front-end e back-end. |
| **GSAP**        | Biblioteca de animações para dar vida à interface com transições suaves. |

---

## 🧱 Estrutura do Projeto

```plaintext
.
├── .next/                 # Build gerado pelo Next.js
├── node_modules/          # Dependências do projeto
├── prisma/                # Schema e migrações do banco (Prisma)
│   ├── migrations/
│   └── schema.prisma
├── public/
│   └── imgs/              # Imagens públicas
├── src/
│   ├── app/               # Rotas e layout do Next.js (App Router)
│   ├── components/        # Componentes reutilizáveis
│   ├── data/              # Arquivos de dados (mocks, seeds, etc.)
│   ├── fonts/             # Fontes utilizadas no projeto
│   ├── generated/         # Código gerado automaticamente (ex: Prisma Client)
│   ├── lib/               # Utilitários e configuração de libs
│   ├── services/          # Funções de serviço e lógica de negócio
│   ├── styles/            # Estilização global e temas
│   └── server.js          # Configuração opcional do servidor
├── .env                   # Variáveis de ambiente (NÃO versionar)
├── .gitignore             # Arquivos e pastas ignorados pelo Git
├── README.md              # Documentação do projeto
├── package.json           # Dependências e scripts
├── package-lock.json      # Lockfile do npm
├── tailwind.config.js     # Configuração do TailwindCSS
├── postcss.config.js      # Configuração do PostCSS
├── next.config.mjs        # Configuração do Next.js
├── jsconfig.json          # Path aliases para facilitar imports
└── components.json        # Configurações de UI (se aplicável)


---

## 🧪 Como Rodar Localmente

> ⚠️ Você precisa ter [Node.js](https://nodejs.org/) e [npm](https://www.npmjs.com/) instalados.

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env.local` com o seguinte conteúdo:

```env
DATABASE_URL="postgresql://postgres:SUA_SENHA@db.xxxxx.supabase.co:5432/postgres"
```

### 4. Aplique o schema no banco de dados

```bash
npx prisma db push
# ou se preferir iniciar com migration:
# npx prisma migrate dev --name init
```

### 5. Rode o projeto

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver a aplicação.

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

