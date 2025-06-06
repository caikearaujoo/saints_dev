-- CreateTable
CREATE TABLE "Pessoa" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "matricula" TEXT NOT NULL,
    "curso" TEXT NOT NULL,
    "periodo" INTEGER NOT NULL,
    "telefone" TEXT NOT NULL,
    "dataInscricao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pessoa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Staff" (
    "id" TEXT NOT NULL,
    "pessoaId" TEXT NOT NULL,
    "areaInteresse" TEXT NOT NULL,
    "habilidades" TEXT NOT NULL,
    "experiencia" TEXT NOT NULL,
    "disponibilidade" TEXT NOT NULL,

    CONSTRAINT "Staff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "id" TEXT NOT NULL,
    "pessoaId" TEXT NOT NULL,
    "modalidade" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "eloRanking" TEXT NOT NULL,
    "experiencia" TEXT,
    "disponibilidade" TEXT NOT NULL,
    "linkPerfil" TEXT,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pessoa_email_key" ON "Pessoa"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Pessoa_telefone_key" ON "Pessoa"("telefone");

-- CreateIndex
CREATE UNIQUE INDEX "Staff_pessoaId_key" ON "Staff"("pessoaId");

-- CreateIndex
CREATE UNIQUE INDEX "Player_pessoaId_key" ON "Player"("pessoaId");

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "Staff_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
