import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getSessionsForStudent = async (studentId: number) => {
  return await prisma.student.findUnique({
    where: { id: studentId },
    include: {
      sessions: true
    }
  });
};
