// /controllers/position.controller.js

import { positionService } from 'use-cases';

export default Object.freeze({
	postPosition: (httpRequest) => positionService.postPosition(httpRequest),
});
