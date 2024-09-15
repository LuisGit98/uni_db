import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { authService } from "./auth.service";


@Controller('/auth')
export class authController {

    constructor(private auth: authService) {}

    @Get('/index')
    async index(@Param('')idALumno:string){

        return 'index'        
    }

    @Post('/signIn')
    async signIn(@Body('email')email:string ,@Body('matricula')matricula:string){        

        console.log(email)
        return this.auth.signIn(email,matricula)
    }
    
    @Get('/:pass')
    async getInfoStudent( @Param('pass') pass: string) {
        
        return await this.auth.getInfoStudentById(pass)
    }
}
