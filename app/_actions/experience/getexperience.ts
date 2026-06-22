"use server";

import prisma from "@/lib/prisma";
import { getUserByEnvCode } from "../home/getuser";

export async function getExperience() {
  const user = await getUserByEnvCode();

  if (!user) return [];

  return prisma.aboutMe.findMany({
    where: {
      createdBy: user.id,
      category: {
        in: ["WORK_EXPERIENCE", "EDUCATIONAL_BACKGROUND"],
      },
    },
    orderBy: [{ startDate: "desc" }, { createdAt: "desc" }],
  });
}
