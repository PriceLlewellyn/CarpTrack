import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool ({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGDBPORT
});

pool.on("connect", () => {
    console.log("Connection pool estabished with database")
});

export default pool;