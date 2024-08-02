import { Request, Response } from 'express';
import { generateToken } from '../utils/tokenHandler';
import { getErrorMessage } from '../utils/errors';
import { createUserService, loginUserService } from '../services/userService';

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;
  try {
    const user = await createUserService(name, email, password, role);
    res.status(201).json(user);
  } catch (error) {
    return res.status(500).send(getErrorMessage(error));
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await loginUserService(email, password);
    const token = generateToken(user.id);
    res.json({ name: user.name, token });
  } catch (error) {
    return res.status(500).send(getErrorMessage(error));
  }
};
