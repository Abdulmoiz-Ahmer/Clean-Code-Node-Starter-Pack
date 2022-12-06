import { Sequelize } from 'sequelize';
import { environment } from 'config';
import { Positions } from 'models';

let databaseConfig;

switch (environment) {
	case 'development':
		databaseConfig = require('config').databaseDevelopmentConfig;
		break;
	case 'staging':
		databaseConfig = require('config').databaseStagingConfig;
		break;
	case 'production':
		databaseConfig = require('config').databaseProductionConfig;
		break;

	default:
		databaseConfig = require('config').databaseDevelopmentConfig;
		break;
}

// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');
const sequelize = new Sequelize(
	databaseConfig.database,
	databaseConfig.username,
	databaseConfig.password,
	{
		host: databaseConfig.host,
		port: databaseConfig.port,
		dialect: databaseConfig.dialect,
		pool: {
			max: databaseConfig.pool.max,
			min: databaseConfig.pool.min,
			acquire: databaseConfig.pool.acquire,
			idle: databaseConfig.pool.idle,
		},
	},
);

export const database = {
	sequelize,
	Sequelize,
	Positions,
};
