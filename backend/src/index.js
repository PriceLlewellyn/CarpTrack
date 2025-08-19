import cors from 'cors';
import express from 'express';
import dotenv from "dotenv";
//import routes from '../routes';
import routes from '../routes/index.js';

// Load enviroment variables into process.env
dotenv.config()

// creates express application
const app = express();

// Define the port number (use environment variable if set, otherwise default to 8000)
const PORT = process.env.PORT || 8000;


// Middlewares
app.use(cors()) // Allow requests from any origin (public API access)
app.use(express.json()) // Parse incoming requests with JSON payloads
app.use(express.urlencoded({extended: true})) // Parse URL-encoded request bodies (e.g., from HTML forms)


// Routes
app.use("/api-v1", routes); // Mount all API routes under "/api-v1" path

// Catch-all route for undefined endpoints (404 handler)
app.use("*", (req, res) => {
    res.status(404).json({
        status: "404 not found",
        message: "Route not found"
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});