import { Injectable } from '@nestjs/common';
import { Alumno } from '@prisma/client';
import { alumnos } from 'prisma/data/alumnos.data';
import { dbService } from 'src/db/db.service';

@Injectable()
export class getDataService {
  constructor(private prisma: dbService) {}

  async getAlumnos(): Promise<Alumno[]> {
    return this.prisma.alumno.findMany();
  }

  async getAlumno(id: number): Promise<Alumno> {
    return this.prisma.alumno.findUnique({
      where: {
        id,
      },
    });
  }
}
