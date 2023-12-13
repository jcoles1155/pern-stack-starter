export const db = {
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "password",
  host: process.env.DB_HOST || "localhost",
  port: 5432,
  database: process.env.DB_DATABASE || "template",
};

export const port = process.env.PORT || 4000;