import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma-clients/jobber-auth';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    // this will establish the connection to database based on jobber-auth/prisma/schema.prisma datasource
    await this.$connect();
  }
}
