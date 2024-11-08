import { Prisma } from '@prisma/client';

export const alumnos: Prisma.AlumnoCreateManyInput[] = [
  {
    name: 'Jose', 
    last_name: 'Gomez',
    email: 'jose@example.com',
    carrera_id: 1,
    matricula:'20240001',
    semestre:8,
    grupo:'a',
    turno:'v'
  },
  {
    name: 'Maria',
    last_name: 'Perez',
    email: 'marixE@example.com',
    carrera_id: 2,
    matricula:'20240002',
    semestre:8,
    grupo:'a',
    turno:'v'
  },
  {
    name: 'Carlos',
    last_name: 'Lopez',
    email: 'carlos@example.com',
    carrera_id: 3,
    matricula:'20240003',
    semestre:8,
    grupo:'a',
    turno:'v'
  },
  {
    name: 'Ana',
    last_name: 'Martinez',
    email: '_ana@example.com',
    carrera_id: 1,
    matricula:'20240004',
    semestre:8,
    grupo:'a',
    turno:'v'
  },
  {
    name: 'Luis',
    last_name: 'Hernandez',
    email: 'luisxx@example.com',
    carrera_id: 2,
    matricula:'20240005',
    semestre:7,
    grupo:'a',
    turno:'v'
  },
  {
    name: 'Luis',
    last_name: 'fox',
    email: 'luis90@example.com',
    carrera_id: 2,
    matricula:'20240006',
    semestre:6,
    grupo:'a',
    turno:'v'
    
  },
  {
    name: 'María',
    last_name: 'Gómez',
    email: 'mari@example.com',
    carrera_id: 3,
    matricula:'20240007',
    semestre:6,
    grupo:'a',
    turno:'m'
  },
  {
    name: 'Carlos',
    last_name: 'Fernández',
    email: 'carloss@example.com',
    carrera_id: 4,
    matricula:'20240008',
    semestre:6,
    grupo:'a',
    turno:'m'
  },
  {
    name: 'Ana',
    last_name: 'Martínez',
    email: 'anax@example.com',
    carrera_id: 1,
    matricula:'20240009',
    semestre:6,
    grupo:'a',
    turno:'m'
  },
  {
    name: 'Javier',
    last_name: 'Pérez',
    email: 'javier@example.com',
    carrera_id: 5,
    matricula:'20240010',
    semestre:6,
    grupo:'a',
    turno:'m'
  },
  {
    name: 'Lucía',
    last_name: 'Rodríguez',
    email: 'lucia@example.com',
    carrera_id: 6,
    matricula:'20240011',
    semestre:6,
    grupo:'a',
    turno:'m'

  },
  {
    name: 'Miguel',
    last_name: 'López',
    email: 'miguel@example.com',
    carrera_id: 7,
    matricula:'20240012',
    semestre:6,
    grupo:'a',
    turno:'m'
  },
  {
    name: 'Elena',
    last_name: 'Sánchez',
    email: 'elena@example.com',
    carrera_id: 8,
    matricula:'20240013',
    semestre:6,
    grupo:'a',
    turno:'m'
  },
  {
    name: 'Sergio',
    last_name: 'García',
    email: 'sergio@example.com',
    carrera_id: 9,
    matricula:'20240014',
    semestre:6,
    grupo:'a',
    turno:'m'
  },
  {
    name: 'Isabel',
    last_name: 'Ruiz',
    email: 'isabel@example.com',
    carrera_id: 1,
    matricula:'20240015',
    semestre:6,
    grupo:'a',
    turno:'m'
  },
  {
    name: 'Fernando',
    last_name: 'Castro',
    email: 'fernando@example.com',
    carrera_id: 1,
    matricula:'20240016',
    semestre:6,
    grupo:'a',
    turno:'m'
  },
  {
    name: 'Adriana',
    last_name: 'Ramos',
    email: 'adriana@example.com',
    carrera_id: 2,
    matricula:'20240017',
    semestre:4,
    grupo:'a',
    turno:'m'
  },
  {
    name: 'Pablo',
    last_name: 'Morales',
    email: 'pablo@example.com',
    carrera_id: 3,
    matricula:'20240018',
    semestre:4,
    grupo:'a',
    turno:'m'
  },
  {
    name: 'Carmen',
    last_name: 'Torres',
    email: 'carmen@example.com',
    carrera_id: 4,
    matricula:'20240019',
    semestre:4,
    grupo:'a',
    turno:'m'
  },
  {
    name: 'Diego',
    last_name: 'Navarro',
    email: 'diego@example.com',
    carrera_id: 5,
    matricula:'20240020',
    semestre:4,
    grupo:'a',
    turno:'m'
  },
  {
    name: 'Natalia',
    last_name: 'Ortega',
    email: 'natalia@example.com',
    carrera_id: 6,
    matricula:'20240021',
    semestre:4,
    grupo:'a',
    turno:'m'
  },
  {
    name: 'Raúl',
    last_name: 'Vega',
    email: 'raul@example.com',
    carrera_id: 7,
    matricula:'20240022',
    semestre:4,
    grupo:'a',
    turno:'m'
  },
  {
    name: 'Paula',
    last_name: 'Méndez',
    email: 'paulxa@example.com',
    carrera_id: 8,
    matricula:'20240023',
    semestre:4,
    grupo:'a',
    turno:'m'
  },
  {
    name: 'Alberto',
    last_name: 'Guerrero',
    email: 'albertox@example.com',
    carrera_id: 9,
    matricula:'20240024',
    semestre:4,
    grupo:'a',
    turno:'m'
  },
  {
    name: 'Sofía',
    last_name: 'Molina',
    email: 'sofi.a@example.com',
    carrera_id: 4,
    matricula:'20240025',
    semestre:4,
    grupo:'a',
    turno:'m'
  },
  {
    name: 'Marina',
    last_name: 'Molina',
    email: 'Mar@example.com',
    carrera_id: 8,
    matricula:'20240026',
    semestre:4,
    grupo:'a',
    turno:'m'
  },
  {
    name: 'Rebeca.',
    last_name: 'Agundez',
    email: 'REb@example.com',
    carrera_id: 6,
    matricula:'20240027',
    semestre:4,
    grupo:'a',
    turno:'m'
  },  
    
];
