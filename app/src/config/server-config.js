import * as dotenv from 'dotenv';
dotenv.config();

export const environment = process.env.ENVIRONMENT || 'development';
export const port = process.env.PORT || 2000;
export const version = process.env.VERSION || 'v';
export const baseUrl = process.env.BASE_URL || 'api';
export const serverIp = process.env.SERVER_IP || 'localhost';
