const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "subscription_db",
  password: process.env.POSTGRES_PASSWORD || "password",
  port: process.env.DB_PORT || 5432,
});

module.exports = pool;