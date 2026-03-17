import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const { 
    handlers: { GET, POST }, 
    auth, 
    signIn, 
    signOut 
} = NextAuth({
  ...authConfig,
  secret: process.env.AUTH_SECRET,
  trustHost: true,
  providers: [
    Credentials({
      async authorize(credentials) {
        const { username, password } = credentials;

        if (!username || !password) return null;

        let user = await prisma.user.findUnique({
          where: { username: username as string },
        });

        // Auto-create admin if not exists (mirroring current logic)
        if (!user && username === "admin" && password === "admin") {
          const hashedPassword = await bcrypt.hash("admin", 10);
          user = await prisma.user.create({
            data: {
              username: "admin",
              password: hashedPassword,
              role: "admin",
            },
          });
        }

        if (!user) return null;

        const passwordsMatch = await bcrypt.compare(password as string, user.password);

        if (passwordsMatch) {
          return {
            id: user.id.toString(),
            name: user.username,
            role: user.role,
          };
        }

        return null;
      },
    }),
  ],
});
