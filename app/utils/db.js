import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const host = process.env.MYSQL_HOST;
const user = process.env.MYSQL_USER;
const database = process.env.MYSQL_DATABASE;
const password = process.env.MYSQL_PASSWORD;

if (!host || !user || !database) {
  console.error("❌ The Database Environment variables are not defined.");
  process.exit(1);
}

const pool = mysql.createPool({
  host: host, // Example: 'localhost' or 'your-db-host'
  user: user, // Your MySQL username
  password: password, // Your MySQL password
  database: database, // Your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export async function query(sql, values) {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.execute(sql, values);
    return results;
  } finally {
    connection.release();
  }
}
