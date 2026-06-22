"use server";

import prisma from "@/lib/prisma";
import { getUserByEnvCode } from "../home/getuser";

export async function getSkills() {
  const user = await getUserByEnvCode();

  if (!user) return { tools: [], frameworks: [] };

  const [tools, frameworks] = await Promise.all([
    prisma.tool.findMany({ where: { createdBy: user.id } }),
    prisma.framework.findMany({ where: { createdBy: user.id } }),
  ]);

  return { tools, frameworks };
}
