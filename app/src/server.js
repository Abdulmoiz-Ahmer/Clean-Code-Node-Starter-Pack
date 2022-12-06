import http from 'http';
import app from './app';
import { port, baseUrl, version, serverIp } from 'config';

http.createServer(app);

app.listen(port, function (request, response) {
	console.log(
		'Server up and running at',
		`${serverIp}:${port}/${baseUrl}/${version}/`,
	);
});

module.exports = app;
