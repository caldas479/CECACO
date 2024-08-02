import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET!;
if (!SECRET_KEY) {
  throw new Error('JWT_SECRET environment variable is not set');
}

export const generateToken = (userId: number): string => {
  return jwt.sign({ userId }, SECRET_KEY, { expiresIn: '1h' });
};

export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    throw new Error('Invalid token');
  }
};
