const dotenv = require("dotenv");
//   env load
dotenv.config();

module.exports = {
  SERVER_PORT: process.env.PORT || 8001,
  DEVELOPMENT_MODE: process.env.DEVELOPMENT_MODE,
  DEVELOPMENT_MONGODB_URL: process.env.DB_URL_DEV,
  PRODUCTION_MONGODB_URL: process.env.DB_URL,
  ACCESS_TOKEN_KEY: process.env.ACCESS_TOKEN_KEY,
  ACCESS_TOKEN_KEY_TIME: process.env.ACCESS_TOKEN_KEY_TIME,
  ACCESS_TOKEN_KEY_TIME_COOKIE: process.env.ACCESS_TOKEN_KEY_TIME_COOKIE,
  REFRESH_TOKEN_KEY: process.env.REFRESH_TOKEN_KEY,
  REFRESH_TOKEN_KEY_TIME: process.env.REFRESH_TOKEN_KEY_TIME,
  REFRESH_TOKEN_KEY_TIME_COOKIE: process.env.REFRESH_TOKEN_KEY_TIME_COOKIE,
  CORS_ALLOW_ORIGINS: process.env.ALLOW_ORIGINS_ACCESS,
};
