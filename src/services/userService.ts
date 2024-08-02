import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export const createUserService = async (
  name: string,
  email: string,
  password: string,
  role: string
) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword, role }
  });
  return user;
};

export const loginUserService = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (user && (await bcrypt.compare(password, user.password))) {
    return user;
  } else {
    throw new Error('Invalid credentials');
  }
};
