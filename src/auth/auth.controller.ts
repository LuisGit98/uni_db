import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { authService } from "./auth.service";


@Controller('/auth')
export class authController {

    constructor(private auth: authService) {}

    @Get('/index/:mat')
    async index(@Param('mat')mat:string){

        return this.auth.infoSemCard(mat)       
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
