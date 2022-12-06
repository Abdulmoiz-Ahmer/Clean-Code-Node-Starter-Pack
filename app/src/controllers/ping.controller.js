// /controllers/ping.controller.js

import { pingService } from 'use-cases';

export default Object.freeze({
	getPing: (httpRequest) => pingService.getPing(httpRequest),
});
