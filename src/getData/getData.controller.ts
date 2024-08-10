import { Controller, Get, Param } from "@nestjs/common";
import { getDataService } from "./getData.service";

@Controller()
export class getDataController{
    constructor(private service:getDataService){}

    @Get('/alumnos')
    async getAlumnos(){
        return this.service.getAlumnos();
    }

    @Get(':id')
    async getAlumno(@Param('id')id:string){
        return this.service.getAlumno(Number(id));
    }
}