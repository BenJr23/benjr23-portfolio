"use server";

import prisma from "@/lib/prisma";
import { getUserByEnvCode } from "../home/getuser";

export async function getCertificates() {
  const user = await getUserByEnvCode();

  if (!user) return [];

  return prisma.certification.findMany({
    where: { createdBy: user.id },
    orderBy: { dateIssued: "desc" },
  });
}
