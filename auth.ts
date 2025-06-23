import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function getEnvVariable(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

// Explicitly set to Node.js runtime
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub({
      clientId: getEnvVariable("GITHUB_ID"),
      clientSecret: getEnvVariable("GITHUB_SECRET"),
    }),
    Google({
      clientId: getEnvVariable("GOOGLE_CLIENT_ID"),
      clientSecret: getEnvVariable("GOOGLE_CLIENT_SECRET"),
    }),
  ],
  session: {
    strategy: "jwt", // Use JWT strategy for better compatibility
  },
});
