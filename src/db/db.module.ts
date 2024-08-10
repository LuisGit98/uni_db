import { Global, Module } from "@nestjs/common";
import { dbService } from "./db.service";

@Global()
@Module({
    providers:[dbService],
    exports:[dbService]
})

export class DbModule{}