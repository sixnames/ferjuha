import 'reflect-metadata';
import { buildSchemaSync } from 'type-graphql';
import path from 'path';
import { UserResolver } from '../api/resolvers/user/UserResolver';

export const schema = buildSchemaSync({
  resolvers: [UserResolver],
  dateScalarMode: 'timestamp',
  emitSchemaFile: path.resolve('./schema.graphql'),
  validate: false,
});
