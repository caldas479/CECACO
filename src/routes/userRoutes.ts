import { Router } from 'express';
import { createUser, loginUser } from '../controllers/userController';
import { authenticateToken } from '../middleware/authMiddleware';

const router = Router();

// Route to create a new user
router.post('/register', createUser);

// Route to login a user
router.post('/login', loginUser);

// Example of a protected route
router.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route' });
});

export default router;
