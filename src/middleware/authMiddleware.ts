import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/tokenHandler';
import { JwtPayload } from 'jsonwebtoken';

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Access denied' });
  }

  try {
    const payload = verifyToken(token);
    (req as CustomRequest).token = payload;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};
