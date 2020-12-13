import { ApolloServer } from 'apollo-server-micro';
import { gql } from '@apollo/client';
import { getDatabase } from '../../db/mongodb';
import { makeExecutableSchema } from 'graphql-tools';
// import { getSession } from 'next-auth/client';

export const resolvers = {
  Query: {
    async me(_parent: any, _args: any, _context: any) {
      // const session = await getSession(context);
      // console.log(session);
      const db = await getDatabase();
      const collection = db.collection('users');
      return collection.findOne({});
    },
  },
};

export const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    name: String!
  }
  type Query {
    me: User
  }
`;

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const apolloServer = new ApolloServer({
  schema,
  context(ctx: any) {
    return ctx;
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
