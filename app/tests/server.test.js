import request from 'supertest';
import app from 'src/app';
import { baseUrl, version } from 'config';

jest.useRealTimers();
const url = `/${baseUrl}/${version}`;

describe(`Testing server configuration`, function () {
	test('Testing whether server is up or not', async () => {
		// Arrange
		const expectedResponse = 200;
		const routeToHit = `${url}/ping`;

		// Act & Assert
		const response = await request(app)
			.get(routeToHit)
			.expect(expectedResponse);
	});
});
