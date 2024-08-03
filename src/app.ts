import express from 'express';
import { PrismaClient } from '@prisma/client';
import userRoutes from './routes/userRoutes';
import studentRoutes from './routes/studentRoutes';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use('/api/user', userRoutes);
app.use('/api/student', studentRoutes);

export default app;
