import pg from 'pg';
import decrypt from 'dotenv';

configDotenv.config();

const { Pool } = pg;

export const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
});