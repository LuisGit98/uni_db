import { PrismaClient } from '@prisma/client';
import { carreras } from './data/carreras.data';
import { alumnos } from './data/alumnos.data';
import { materias } from './data/materias.data';
import { profes } from './data/profesores.data';

const prisma = new PrismaClient();

async function main() {
  // await prisma.profesor.createMany({
  //   data: profes,
  // });
  // await prisma.carrera.createMany({
  //   data: carreras,
  // });

  
  // await prisma.materia.createMany({
  //   data: materias,
  // });

  // await prisma.alumno.createMany({
  //   data: alumnos,
  // });  
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
