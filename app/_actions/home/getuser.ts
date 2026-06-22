"use server";

import prisma from "@/lib/prisma";

export async function getUserByEnvCode() {
  const userCode = process.env.USER_CODE;

  if (!userCode) {
    throw new Error("USER_CODE environment variable is required to fetch the user.");
  }

  return prisma.user.findFirst({
    where: {
      connectionCode: userCode,
    },
  });
}
