// apps\jobber-auth\src\app\users\users.module.ts

import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({ providers: [UsersResolver, UsersService] })
export class UsersModule {}
