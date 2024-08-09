/*
  Warnings:

  - You are about to drop the column `descripciom` on the `carrera` table. All the data in the column will be lost.
  - You are about to drop the column `materia_id` on the `carrera` table. All the data in the column will be lost.
  - You are about to drop the `_carreratomateria` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `descripcion` to the `Carrera` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_carreratomateria` DROP FOREIGN KEY `_CarreraToMateria_A_fkey`;

-- DropForeignKey
ALTER TABLE `_carreratomateria` DROP FOREIGN KEY `_CarreraToMateria_B_fkey`;

-- AlterTable
ALTER TABLE `carrera` DROP COLUMN `descripciom`,
    DROP COLUMN `materia_id`,
    ADD COLUMN `descripcion` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_carreratomateria`;
