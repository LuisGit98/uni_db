import { Controller, Get, Param, Post } from "@nestjs/common";
import { getDataService } from "./getData.service";

@Controller('/alumnos')
export class getDataController{
    constructor(private service:getDataService){}

    @Get()
    async getAlumnos(){
        return this.service.getAlumnos();
    }

    @Get('/id:id')
    async getAlumno(@Param('id')id:string){
        return this.service.getAlumno(Number(id));
    }
    @Get('/mat/:mat')
    async getAlumnoByMat(@Param('mat')mat:string){
        return this.service.getAlumnoByMatricula(mat);
    }

    @Get('/cal')
    async getAlumnosCal(){
        return this.service.getInfoALumno();
    }   
}
@Controller()
class materia {

}