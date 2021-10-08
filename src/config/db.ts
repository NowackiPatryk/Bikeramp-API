export default {
  host: <string>process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: <string>process.env.DB_USER,
  password: <string>process.env.DB_PASSWORD,
  database: <string>process.env.DB_NAME,
};
