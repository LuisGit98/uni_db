import { Prisma } from '@prisma/client';
import { create } from 'domain';

export const materias: Prisma.MateriaCreateManyInput[] = [
  {
    id_profe: 1,
    nombre_materia: 'Base de datos',
  },
  {
    id_profe: 2,
    nombre_materia: 'Programacion Movil',
  },
  {
    id_profe: 6,
    nombre_materia: 'Calculo integral',
  },
  {
    id_profe: 4,
    nombre_materia: 'Electronica I',
  },
  {
    id_profe: 4,
    nombre_materia: 'Electronica II',
  },
  {
    id_profe: 6,
    nombre_materia: 'Matematicas',
  },
  {
    id_profe: 8,
    nombre_materia: 'Progra,acion Movil',
  },
    
  {
    id_profe: 5,
    nombre_materia: 'Ética Profesional',
  },
  
  {
    id_profe: 3,
    nombre_materia: 'Análisis Financiero',
  },
  {
    id_profe: 5,
    nombre_materia: 'Sociología',
  },
  {
    id_profe: 6,
    nombre_materia: 'Gestión de Proyectos',
  },
  {
    id_profe: 7,
    nombre_materia: 'Marketing Digital',
  },
  {
    id_profe: 8,
    nombre_materia: 'Derecho Civil',
  },
  {
    id_profe: 9,
    nombre_materia: 'Psicología del Desarrollo',
  },
  {
    id_profe: 3,
    nombre_materia: 'Anatomía Humana',
  },
  {
    id_profe: 1,
    nombre_materia: 'Química Inorgánica',
  },
  {
    id_profe: 2,
    nombre_materia: 'Geografía Física',
  },
  
  {
    id_profe: 6,
    nombre_materia: 'Estadística Aplicada',
  },
  {
    id_profe: 5,
    nombre_materia: 'Mecánica de Fluidos',
  },
  {
    id_profe: 6,
    nombre_materia: 'Economía Internacional',
  },
  {
    id_profe: 7,
    nombre_materia: 'Ciencias Políticas',
  },  
];
