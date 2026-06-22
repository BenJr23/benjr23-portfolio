"use server";

import prisma from "@/lib/prisma";
import { getUserByEnvCode } from "../home/getuser";

export async function getAboutMe() {
  const user = await getUserByEnvCode();

  if (!user) {
    return [];
  }

  return prisma.aboutMe.findMany({
    where: {
      createdBy: user.id,
      category: {
        notIn: ["WORK_EXPERIENCE", "EDUCATIONAL_BACKGROUND"],
      },
    },
    orderBy: {
      createdAt: "asc",
    },
  });
}
