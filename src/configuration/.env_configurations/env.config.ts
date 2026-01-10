import * as process from 'process';
import * as dotenv from 'dotenv';
dotenv.config();

export const SERVER_CONFIG = Object.freeze({
  APP_PORT: parseInt(process.env.APP_PORT || '3000', 10),
});

export const JWT_CONFIG = Object.freeze({
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
  A_TOKEN_EXPIRES: process.env.A_TOKEN_EXPIRES,
  R_TOKEN_EXPIRES: process.env.R_TOKEN_EXPIRES,
});


export const DB_CONFIG = Object.freeze({
  DATABASE_URL: process.env.DATABASE_URL,

});
