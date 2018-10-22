import * as dotenv from 'dotenv';
dotenv.config({ path: 'variables.env' });

import { createServer } from './createServer';

const server = createServer();

// TODO Use express middleware to handle cookies (JWT)
// TODO Use express middleware to populate current user

server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL
  }
}, (deets) => {
  // tslint:disable-next-line:no-console
  console.log(`Server is now running on port http://localhost:${deets.port}`);
});