import { Arg, Query, Resolver, ID } from 'type-graphql';
import { User } from '../../entities/User';

@Resolver((_of) => User)
export class UserResolver {
  @Query(() => User, { nullable: true })
  async me(): Promise<User | null> {
    return null;
  }

  @Query(() => User, { nullable: true })
  async getUser(@Arg('id', (_type) => ID) id: string): Promise<User | null> {
    console.log(id);
    return null;
  }
}
