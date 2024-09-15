import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Alumno } from "@prisma/client";
import { dbService } from "src/db/db.service";

@Injectable()
export class authService {

  constructor(
    private alumnoService: dbService,
    private jwtService: JwtService
  ) { }

  async getAlumnoByMatricula(matricula: string): Promise<Alumno | null> {

    return this.alumnoService.alumno.findUnique({
      where: {
        matricula: matricula,
      },
    })
  }

  async getInfoStudentById(matricula: string) {

    const student = await this.alumnoService.alumno.findUnique({
      where: {
        matricula: matricula
      }
    })

    const idStudent = student.id

    const calObject = this.alumnoService.calificacion.findFirst({
      where: {
        alumnoId: idStudent
      }
    })
    const calificacion = (await calObject).calificacion
    const idMateria = (await calObject).materiaId

    const materiaOb = this.alumnoService.materia.findFirst({
      where: {
        id: idMateria
      }
    })

    const materiaId = (await materiaOb).id
    const materiaName = (await materiaOb).nombre_materia
    const idProfe = (await materiaOb).id_profe

    const profe = await this.alumnoService.profesor.findFirst({
      where: {
        id: idProfe
      }
    })



    const infoStudent = {
      materia: materiaName,
      calificacion: calificacion,
      profesor: profe.nombre
    }
    return infoStudent
  }
  //esta notacion significa que esta funcion devuleve una promesa, por eso estoy
  //devolviendo un objeto con esa propiedad
  async signIn(email: string, mat: string): Promise<{ acces_token: string }> {

    const student = await this.alumnoService.alumno.findUnique({
      where: {
        matricula:mat 
      }
    })

    if(student?.matricula !== mat ){
      throw new UnauthorizedException()
    }
    const payload = {
      email:student.email,
      mat:student.matricula
    }

    return {
      acces_token: await this.jwtService.signAsync(payload)
    }
  }
}
