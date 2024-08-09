/*
  Warnings:

  - Added the required column `alumnoId` to the `Calificacion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `calificacion` ADD COLUMN `alumnoId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Calificacion` ADD CONSTRAINT `Calificacion_alumnoId_fkey` FOREIGN KEY (`alumnoId`) REFERENCES `Alumno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
