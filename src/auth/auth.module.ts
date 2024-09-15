import {JwtModule, JwtService} from '@nestjs/jwt'
import {Injectable,Module,UnauthorizedException} from '@nestjs/common'
import { getDataModule } from 'src/getData/getData.module'
import { getDataService } from 'src/getData/getData.service'
import { getDataController } from 'src/getData/getData.controller'
import { authService } from './auth.service'
import { authController } from './auth.controller'
import { DbModule } from 'src/db/db.module'
import { jwtConst } from './constanst'

@Module({
    imports:[
        getDataModule,
        DbModule,
        JwtModule.register({
            global:true,
            secret:jwtConst.secret,
            signOptions:{
                expiresIn:'60s'
            }
        })
    ],
    providers:[authService],
    controllers:[authController],
    exports:[authService]

})
export class authModule{}



