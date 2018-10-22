// THis file connects to the remote Prisma DB and gives us the ability to query it with JS
// const { Prisma } = require('prisma-binding');
import { Prisma } from 'prisma-binding';

console.log(process.env.PRISMA_ENDPOINT)
export const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false
})
