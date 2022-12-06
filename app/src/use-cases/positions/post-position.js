// /use-cases/positions/post-position.js

export const makePostPosition = function makePostPosition({ positionsDb }) {
	return async function postPosition({ body, headers }) {
		// Validate parameters...
		// Create position...
		const result = await positionsDb.insert({ title: body.title });
		return result;
	};
};
