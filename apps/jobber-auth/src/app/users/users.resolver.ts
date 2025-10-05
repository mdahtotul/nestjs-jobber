// apps\jobber-auth\src\app\users\users.resolver.ts

import { Query, Resolver } from '@nestjs/graphql';
import { User } from './models';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  listUsers() {
    return { users: [] };
  }
}
