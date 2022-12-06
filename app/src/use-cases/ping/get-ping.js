// /use-cases/ping/get-ping.js

export const makeGetPing = function Ping() {
	return async function getPing() {
		return 'Live';
	};
};
