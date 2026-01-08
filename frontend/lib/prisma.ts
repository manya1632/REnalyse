// lib/prisma.ts
import { PrismaClient } from '../generated/client/client';
import { PrismaNeon } from '@prisma/adapter-neon';
import { Pool, neonConfig } from '@neondatabase/serverless';
import ws from 'ws';

// Required for Node.js environments to support WebSockets
neonConfig.webSocketConstructor = ws;

const connectionString = process.env.DATABASE_URL;

const prismaClientSingleton = () => {
  // Option A: Use the Pool (Modern Neon Standard)
  const adapter = new PrismaNeon({ connectionString });
  return new PrismaClient({ adapter });
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;