/*
  Warnings:

  - Added the required column `grupo` to the `Alumno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `semestre` to the `Alumno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `turno` to the `Alumno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ordinario` to the `Materia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `periodo` to the `Materia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `alumno` ADD COLUMN `grupo` VARCHAR(191) NOT NULL,
    ADD COLUMN `semestre` INTEGER NOT NULL,
    ADD COLUMN `turno` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `materia` ADD COLUMN `ordinario` BOOLEAN NOT NULL,
    ADD COLUMN `periodo` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `InfoMateria` (
    `id_card` INTEGER NOT NULL AUTO_INCREMENT,
    `calificacion` INTEGER NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,
    `periodo` VARCHAR(191) NOT NULL,
    `grupo` VARCHAR(191) NOT NULL,
    `profesor` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_card`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
