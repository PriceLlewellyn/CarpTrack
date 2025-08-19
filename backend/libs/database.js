import pg from 'pg';
import dotenv from "dotenv";

dotenv.config();

// Destructure Pool from pg for creating a connection pool
const { Pool } = pg;

// Create a new PostgreSQL connection pool
export const pool = new Pool({
    connectionString: process.env.POSTGRES_URL, // Connection string
    ssl: {
        rejectUnauthorized: false, // Allow SSL connections without verifying the certificate
    },
});