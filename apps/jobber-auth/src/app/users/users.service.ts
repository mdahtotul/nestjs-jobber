import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma-clients/jobber-auth';
import { hash } from 'bcryptjs';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async listUsers() {
    return await this.prismaService.user.findMany();
  }

  async getUser(args: Prisma.UserWhereUniqueInput) {
    return await this.prismaService.user.findUniqueOrThrow({ where: args });
  }

  async createUser(data: Prisma.UserCreateInput) {
    return await this.prismaService.user.create({
      data: {
        ...data,
        password: await hash(data.password, 10),
      },
    });
  }
}
