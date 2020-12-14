import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-micro';
import { schema } from '../../apollo/schema';
// import { getSession } from 'next-auth/client';

const apolloServer = new ApolloServer({
  schema,
  context(ctx: any) {
    return ctx;
  },
  playground:
    process.env.NODE_ENV === 'production'
      ? false
      : {
          settings: {
            'request.credentials': 'include',
          },
        },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
