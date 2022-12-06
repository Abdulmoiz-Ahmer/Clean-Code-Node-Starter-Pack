module.exports = {
	roots: ['<rootDir>/tests'],
	collectCoverageFrom: ['<rootDir>/src/**/*.js', '!<rootDir>/src/**'],
	coverageDirectory: 'coverage',
	coverageProvider: 'babel',
	testEnvironment: 'node',
	moduleNameMapper: {
		'@/tests/(.*)': '<rootDir>/tests/$1',
		'@/(.*)': '<rootDir>/src/$1',
	},
};
