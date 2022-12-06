export const makeExpressCallback = (controller) => (request, response) => {
	const httpRequest = {
		body: request.body,
		query: request.query,
		params: request.params,
		ip: request.ip,
		method: request.method,
		path: request.path,
		user: request.user,
		logger: request.logger,
		source: {
			ip: request.ip,
			browser: request.get('User-Agent'),
		},
		headers: {
			'Content-Type': request.get('Content-Type'),
			Referer: request.get('referer'),
			'User-Agent': request.get('User-Agent'),
		},
	};

	// request.user coming from 'policies/token.js',
	// after the JWT token is parsed
	if (request.user) {
		httpRequest.user = request.user;
	} else {
		httpRequest.user = null;
	}

	controller(httpRequest)
		.then((httpResponse) => {
			response.set('Content-Type', 'application/json');
			response.type('json');
			const body = {
				success: true,
				code: 200,
				data: httpResponse,
			};
			response.status(200).send(body);
		})
		.catch((e) => {
			request.log.info(e);
			response.status(400).send({
				success: false,
				code: 400,
				error: {
					description: e.message,
				},
			});
		});
};
