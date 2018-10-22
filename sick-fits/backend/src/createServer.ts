import { GraphQLServer } from 'graphql-yoga';
import { Query } from './resolvers/Query';
import { Mutation } from './resolvers/Mutations';
import { db } from './db';

// Create the GRaphQL server

export const createServer = () => {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation,
      Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: (req) => ({ ...req, db })
  });
};