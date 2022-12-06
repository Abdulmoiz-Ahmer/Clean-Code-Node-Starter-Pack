// app.js
import express from 'express';
import routes from 'routes';
import pino from 'pino-http';
import http from 'http';
import cors from 'cors';
import { port, baseUrl, version, serverIp } from 'config';
import { database } from 'database';

// initialize express server
const app = express();
const logger = pino();
app.use(express.json());
app.use(cors());
app.use(logger);
app.use(`/${baseUrl}/${version}/`, routes);

database.sequelize
	.sync()
	.then(() => {
		console.log('Synced db.');
	})
	.catch((err) => {
		console.log('Failed to sync db: ' + err);
	});

export default app;
