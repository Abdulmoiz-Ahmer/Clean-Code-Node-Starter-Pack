// /use-cases/positions/index.js

import { positionsDb } from 'data-access';

import {makePostPosition} from './post-position';

const postPosition = makePostPosition({
	positionsDb,
});

// Export a service containing all Use Cases ...
export const positionService = Object.freeze({
	postPosition,
});

