import {Global, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';


@Global()
export class dbService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
