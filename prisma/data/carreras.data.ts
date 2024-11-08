import { Prisma } from '@prisma/client';

export const carreras: Prisma.CarreraCreateManyInput[] = [
  {
    carrera: 'Ciencias del agua',
    descripcion: 'Estudio de la naturaleza del elemento',
    
  },
  {
    carrera: 'Ingeniería en Sistemas',
    descripcion: 'Desarrollo y mantenimiento de sistemas informáticos.',
  },
  {
    carrera: 'Ingeniería Civil',
    descripcion: 'Planificación y construcción de infraestructuras.',
  },
  {
    carrera: 'Medicina',
    descripcion: 'Estudio y tratamiento de enfermedades humanas.',

  },
  {
    carrera: 'Derecho',
    descripcion: 'Estudio de las leyes y el sistema legal.',
  },
  {
    carrera: 'Arquitectura',
    descripcion: 'Diseño y construcción de edificios y estructuras.',
  },
  {
    carrera: 'Informática',
    descripcion: 'Desarrollo de software y sistemas informáticos.',
  },
  {
    carrera: 'Psicología',
    descripcion: 'Estudio del comportamiento y procesos mentales.',
  },
  {
    carrera: 'Economía',
    descripcion: 'Análisis de la producción y consumo de bienes y servicios.',
  },
  
];
