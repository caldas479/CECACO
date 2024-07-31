import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;
  try {
    const user = await prisma.user.create({
      data: { name, email, password, role },
    });
    res.status(201).json(user);
  } catch (error) {
    if (error instanceof Error) res.status(400).json({ error: error.message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (user && user.password === password) {
      res.json(user);
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    if (error instanceof Error) res.status(400).json({ error: error.message });
  }
};
