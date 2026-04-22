import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = `postgresql://postgres:2910@localhost:5432/studyflow?schema=public`;

const adapter = new PrismaPg({ connectionString });
export const prisma = new PrismaClient({ adapter, log: ['query'] });
