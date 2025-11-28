import { Pool } from "pg";

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// import { createPool } from "mysql2";

// export const pool = createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
//   port: Number(process.env.DB_PORT),
//   uri: process.env.MYSQL_URL,
//   waitForConnections: true,
//   connectionLimit: 10,
// }).promise();
