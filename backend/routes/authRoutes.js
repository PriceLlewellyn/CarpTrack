import express from 'express';
// Import authentication controller functions
// These handle the actual logic for signing up and signing in users
import { signinUser, signupUser } from '../controllers/authController.js'; 


// Create a new router instance
const router = express.Router();


// auth routes - handles user log in and sign up
router.post("/sign-up", signupUser);
router.post("/sign-in", signinUser);


export default router;