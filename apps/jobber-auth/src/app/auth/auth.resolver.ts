import { GqlContext } from '@jobber/nestjs';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '../users/models';
import { AuthService } from './auth.service';
import { LoginInput } from './dto';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => User)
  async login(
    @Args('loginInput') LoginInput: LoginInput,
    @Context() context: GqlContext
  ) {
    return this.authService.login(LoginInput, context.res);
  }
}
