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

const checkDatabaseConnection = async () => {
  try {
    const connection = await mysql.createConnection({
      host: host,
      user: user,
      password: password,
      database: database,
    });

    await connection.ping();
    console.log("✅ MySQL database connection successful!");
    await connection.end();
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1);
  }
};

checkDatabaseConnection();
