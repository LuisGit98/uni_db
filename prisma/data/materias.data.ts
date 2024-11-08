import { Prisma } from '@prisma/client';
import { create } from 'domain';

export const materias: Prisma.MateriaCreateManyInput[] = [
  {
    id_profe: 1,
    nombre_materia: 'Base de datos',
    ordinario:true,
    periodo:'2024',    
    
  },
  {
    id_profe: 2,
    nombre_materia: 'Programacion Movil',
    ordinario:true,
    periodo:'2024',
  },
  {
    id_profe: 6,
    nombre_materia: 'Calculo integral',
    ordinario:true,
    periodo:'2024',
  },
  {
    id_profe: 4,
    nombre_materia: 'Electronica I',
    ordinario:true,
    periodo:'2024',
  },
  {
    id_profe: 4,
    nombre_materia: 'Electronica II',
    ordinario:true,
    periodo:'2024-1',
  },
  {
    id_profe: 6,
    nombre_materia: 'Matematicas',
    ordinario:true,
    periodo:'2024-1',
  },
  {
    id_profe: 8,
    nombre_materia: 'Progra,acion Movil',
    ordinario:true,
    periodo:'2024-2',
  },
    
  {
    id_profe: 5,
    nombre_materia: 'Ética Profesional',
    ordinario:true,
    periodo:'2024-2',
  },
  
  {
    id_profe: 3,
    nombre_materia: 'Análisis Financiero',
    ordinario:true,
    periodo:'2024-2',
  },
  {
    id_profe: 5,
    nombre_materia: 'Sociología',
    ordinario:true,
    periodo:'2024-2',
  },
  {
    id_profe: 6,
    nombre_materia: 'Gestión de Proyectos',
    ordinario:true,
    periodo:'2023-1'
  },
  {
    id_profe: 7,
    nombre_materia: 'Marketing Digital',
    ordinario:true,
    periodo:'20242'
  },
  {
    id_profe: 8,
    nombre_materia: 'Derecho Civil',
    ordinario:true,
    periodo:'2023-2'
  },
  {
    id_profe: 9,
    nombre_materia: 'Psicología del Desarrollo',
    ordinario:true,
    periodo:'2023-1'
  },
  {
    id_profe: 3,
    nombre_materia: 'Anatomía Humana',
    periodo:'2024-2',
    ordinario:false
  },
  {
    id_profe: 1,
    nombre_materia: 'Química Inorgánica',
    periodo:'2024-2',
    ordinario:false
  },
  {
    id_profe: 2,
    nombre_materia: 'Geografía Física',
    periodo:'2024-2',
    ordinario:false
  },
  
  {
    id_profe: 6,
    nombre_materia: 'Estadística Aplicada',
    periodo:'2024-2',
    ordinario:true
  },
  {
    id_profe: 5,
    nombre_materia: 'Mecánica de Fluidos',
    periodo:'2024-2',
    ordinario:true
  },
  {
    id_profe: 6,
    nombre_materia: 'Economía Internacional',
    periodo:'2024-2',
    ordinario:true
  },
  {
    id_profe: 7,
    nombre_materia: 'Ciencias Políticas',
    periodo:'2024-2',
    ordinario:true
  },  
];
