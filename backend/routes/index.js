import express from 'express';
//import accountRoutes from "./accountRoutes";
import authRoutes from ".authRoutes/";
//import catchRoutes from "./catchRoutes";
//import userRoutes from "./userRoutes";

const router = express.Router();

router.use("/auth", authRoutes);
//router.use("/account", accountRoutes);
//router.use("/user", userRoutes);
//router.use("/catch", catchRoutes);

export default router;