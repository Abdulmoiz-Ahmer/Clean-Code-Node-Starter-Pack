export const databaseDevelopmentConfig = {
	host: 'localhost',
	username: 'root',
	password: '53cr3t',
	database: 'database_development_starter_pack',
	port: 5432,
	dialect: 'postgres',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
};

export const databaseStagingConfig = {
	host: 'localhost',
	username: 'root',
	password: '53cr3t',
	port: 5432,
	database: 'database_test_starter_pack',
	dialect: 'postgres',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
};

export const databaseProductionConfig = {
	host: 'localhost',
	username: 'root',
	password: '53cr3t',
	port: 5432,
	database: 'database_production_starter_pack',
	dialect: 'postgres',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
};
