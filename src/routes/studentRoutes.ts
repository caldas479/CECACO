import { Router } from 'express';
import { getStudentSessions } from '../controllers/studentController';
import { authenticateToken } from '../middleware/authMiddleware';

const router = Router();

router.get('/:id/sessions', authenticateToken, getStudentSessions);

export default router;
