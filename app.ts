import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from 'apollo-server-core';
import http from 'http';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';

const app = express();
const httpServer = http.createServer(app);

// enable cors
app.use(cors());

// configure apollo graphql server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    ApolloServerPluginLandingPageGraphQLPlayground(),
  ],
});

export { app, server, httpServer };
