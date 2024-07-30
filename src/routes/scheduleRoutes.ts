import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Create a new schedule
router.post('/', async (req, res) => {
  const { date, timeSlot, instructorId } = req.body;
  try {
    const schedule = await prisma.schedule.create({
      data: {
        date: new Date(date),
        timeSlot,
        instructorId,
      },
    });
    res.json(schedule);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get available schedules
router.get('/available', async (req, res) => {
  try {
    const schedules = await prisma.schedule.findMany({
      where: {
        studentId: null,
      },
      include: {
        instructor: true,
      },
    });
    res.json(schedules);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
