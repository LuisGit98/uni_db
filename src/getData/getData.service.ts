import { Injectable } from '@nestjs/common';
import { Alumno } from '@prisma/client';
import { dbService } from 'src/db/db.service';

@Injectable()
export class getDataService {
  constructor(private prisma: dbService) {}

  async getAlumnos(): Promise<Alumno[]> {
    return this.prisma.alumno.findMany();
  }

  async getAlumno(id: number): Promise<Alumno | null> {
    return this.prisma.alumno.findUnique({
      where: {
        id: id,
      },    
    });
  }

  async getAlumnoByMatricula(matricula:string): Promise<Alumno | null> {

    const infoAlumno = await this.prisma.alumno.findUnique({
      where: {
        matricula: matricula       
      },
      include:{
        calificaciones:{
          include:{
            materia:{
              include:{
                profesor:true
              }
            }                                                
          }          
        }
      }
    });

    const {...calificaciones} = infoAlumno
    

    return 
  }

  async getInfoALumno() {
    const alumnosConMateriasYCalificaciones = await this.prisma.alumno.findMany(
      {
        include: {
          calificaciones: {
            include: {
              materia: true,
            },
          },
        },
      },
    );

    alumnosConMateriasYCalificaciones.forEach((alumno) => {
      alumno.calificaciones.forEach((calificacion) => {
      });
    });
    return alumnosConMateriasYCalificaciones
  }

  // async saveStudent(
  //   name:string,
  //   lastName:string,
  //   email:string,

  // ){
  //   const year = new Date().getFullYear()

  //   const lastMatricStudent = await this.prisma.alumno.findFirst({
  //     where: {
  //       matricula:{
  //         startsWith: `${year}`
  //       }
  //     },
  //     orderBy: {
  //       matricula: 'desc'
  //     }
  //   });
  //   let nuevoNumeroControl:String;

  // if (lastMatricStudent) {
  //   const secuencia = parseInt(lastMatricStudent.matricula.slice(4)) + 1;
  //   nuevoNumeroControl = `${year}${String(secuencia).padStart(4, '0')}`;
  // } else {
  //   nuevoNumeroControl = `${year}0001`;
  // }

  // const nuevoAlumno = await this.prisma.alumno.create({
  //   data: {
  //     name:name,
  //     matricula: nuevoNumeroControl
  //   }
  // });

  // return nuevoAlumno;
    
  // }
}

