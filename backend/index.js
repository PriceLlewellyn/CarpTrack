import cors from 'cors';
import express from 'express';
import dotenv from "dotenv";
import pool from './src/config/db.js';


// Load enviroment variables into process.env
dotenv.config();

// creates express application
const app = express();

// Define the port number (use environment variable if set, otherwise default to 8000)
const port = process.env.PORT || 8000;


// Middlewares
app.use(cors()) // Allow requests from any origin (public API access)
app.use(express.json()) // Parse incoming requests with JSON payloads


// Routes


// Error Handling middleware

// Testing POSTGRESS Connection
app.get("/", async(requestAnimationFrame, res) => {
    const result = await pool.query("SELECT current_database()");
    res.send(`The databse name is: ${result.rows[0].current_database}`);
});


// Start the server
app.listen(port, () => {
    console.log(`Server running on http:localhost:${port}`);
});