import express from 'express';
import { PrismaClient } from '@prisma/client';
import userRoutes from './routes/userRoutes';
//import scheduleRoutes from './routes/scheduleRoutes';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use('/api/users', userRoutes);
//app.use('/api/schedules', scheduleRoutes);

export default app;
