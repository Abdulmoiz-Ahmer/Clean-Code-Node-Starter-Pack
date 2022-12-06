// /use-cases/positions/index.js

import { makeGetPing } from './get-ping';

const getPing = makeGetPing();

// Export a service containing all Use Cases ...
export const pingService = Object.freeze({
	getPing,
});
