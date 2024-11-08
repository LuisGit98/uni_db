import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Alumno } from '@prisma/client';
import { alumnos } from 'prisma/data/alumnos.data';
import { dbService } from 'src/db/db.service';

@Injectable()
export class authService {
  constructor(
    private alumnoService: dbService,
    private jwtService: JwtService,
  ) {}

  async getAlumnoByMatricula(matricula: string): Promise<Alumno | null> {
    return this.alumnoService.alumno.findUnique({
      where: {
        matricula: matricula,
      },
    });
  }

  async infoSemCard(matricula: string) {
    const student = await this.alumnoService.alumno.findUnique({
      where: {
        matricula: matricula,
      },
    });

    const idStudent = student.id;

    const calObject = await this.alumnoService.calificacion.findMany({
      where: {
        alumnoId: idStudent,
      },
    });

    const calis = calObject.map((i) => i.calificacion);
    var Na: number = 0;
    var aprovadas: number = 0;

    const sumaCal = calis.reduce((cont, i) => cont + i, 0);
    const promedioSem = sumaCal / calis.length;
    calis.forEach((i) => {if (i < 60) {Na++} else {aprovadas++}});
    
    const infoKardex = {
      promSem: promedioSem,
      nAprovadas: Na,
      aprovadas:aprovadas
    };

    return calObject;
  }

  async getInfoStudentById(matricula: string) {
    const status = '';
    const student = await this.alumnoService.alumno.findUnique({
      where: { matricula: matricula },
    });

    const idStudent = student.id;

    
    const calisObject = await this.alumnoService.calificacion.findMany({
      where: { alumnoId: idStudent },
    });

    
    const infoStudentArray = await Promise.all(calisObject.map(async (cal) => {
        const materiaOb = await this.alumnoService.materia.findFirst({
          where: { id: cal.materiaId },
        });

        const profe = await this.alumnoService.profesor.findFirst({
          where: { id: materiaOb.id_profe },
        });

    
        const status = cal.calificacion >= 60 ? 'aprobado' : 'no aprobado';

        return {
          calificacion: cal.calificacion,
          profesor: profe.nombre,
          ordinario: materiaOb.ordinario,
          periodo: materiaOb.periodo,
          materiaName: materiaOb.nombre_materia,
          grupo: student.grupo,
          turno: student.turno,
          status: status,
        };
    }));

    return infoStudentArray;
}

  //esta notacion significa que esta funcion devuleve una promesa, por eso estoy
  //devolviendo un objeto con esa propiedad
  async signIn(email: string, mat: string): Promise<{ acces_token: string }> {
    const student = await this.alumnoService.alumno.findUnique({
      where: { matricula: mat },
    });

    if (student?.matricula !== mat) {
      throw new UnauthorizedException();
    }
    const payload = {
      email: student.email,
      mat: student.matricula,
    };

    return {
      acces_token: await this.jwtService.signAsync(payload),
    };
  }
}
