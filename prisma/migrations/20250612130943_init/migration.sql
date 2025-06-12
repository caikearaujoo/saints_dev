/*
  Warnings:

  - The primary key for the `Pessoa` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Pessoa` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Player` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Player` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Staff` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Staff` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `pessoaId` on the `Player` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `pessoaId` on the `Staff` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Player" DROP CONSTRAINT "Player_pessoaId_fkey";

-- DropForeignKey
ALTER TABLE "Staff" DROP CONSTRAINT "Staff_pessoaId_fkey";

-- DropIndex
DROP INDEX "Pessoa_email_key";

-- DropIndex
DROP INDEX "Pessoa_telefone_key";

-- DropIndex
DROP INDEX "Player_pessoaId_key";

-- DropIndex
DROP INDEX "Staff_pessoaId_key";

-- AlterTable
ALTER TABLE "Pessoa" DROP CONSTRAINT "Pessoa_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Pessoa_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Player" DROP CONSTRAINT "Player_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "pessoaId",
ADD COLUMN     "pessoaId" INTEGER NOT NULL,
ADD CONSTRAINT "Player_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Staff" DROP CONSTRAINT "Staff_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "pessoaId",
ADD COLUMN     "pessoaId" INTEGER NOT NULL,
ADD CONSTRAINT "Staff_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "Staff_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
