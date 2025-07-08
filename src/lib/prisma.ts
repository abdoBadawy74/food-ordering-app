// connect to the database using Prisma

// Import the PrismaClient class from the generated Prisma client
import { PrismaClient } from "@/generated/prisma";
// Import environment enums (e.g., DEV, PROD)
import { Environments } from "@/constants/enums";

// Extend the global object to optionally hold a PrismaClient instance
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Export a singleton PrismaClient instance:
// - In development, reuse the same instance to avoid exhausting database connections during hot reloads
// - In production, always create a new instance
export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    // Enable detailed logging in development, minimal logging in production
    log:
      process.env.NODE_ENV === Environments.DEV
        ? ["query", "info", "warn", "error"]
        : ["error"],
  });


// Optionally, you could assign the instance to globalForPrisma.prisma in development
// to ensure the singleton pattern is enforced across hot reloads:
if (process.env.NODE_ENV === Environments.DEV) globalForPrisma.prisma = db;
