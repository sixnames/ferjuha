import { Field, ID, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  readonly id: string;
  readonly _id?: string;

  @Field(() => Int)
  readonly itemId: number;

  @Field((_type) => String)
  name: string;

  @Field((_type) => String, { nullable: true })
  lastName?: string;

  @Field((_type) => String, { nullable: true })
  secondName?: string;

  @Field((_type) => String)
  email: string;

  @Field((_type) => String)
  phone: string;

  password: string;

  @Field()
  readonly createdAt: Date;

  @Field()
  readonly updatedAt: Date;
}
