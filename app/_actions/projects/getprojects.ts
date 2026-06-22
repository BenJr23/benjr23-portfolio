"use server";

import prisma from "@/lib/prisma";
import { getUserByEnvCode } from "../home/getuser";

export async function getProjects() {
  const user = await getUserByEnvCode();

  if (!user) return [];

  return prisma.project.findMany({
    where: {
      createdBy: user.id,
    },
    include: {
      framework: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}
