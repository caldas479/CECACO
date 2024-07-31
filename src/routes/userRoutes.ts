import { Router } from "express";
import { createUser, loginUser } from "../controllers/userController";

const router = Router();

// Route to create a new user
router.post("/register", createUser);

// Route to login a user
router.post("/login", loginUser);

export default router;
