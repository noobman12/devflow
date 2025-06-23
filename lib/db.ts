import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}
if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const config = process.env.MONGODB_URI;

export const db = new PrismaClient({
  datasources: {
    db: {
      url: uri,
    },
  },
});

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
