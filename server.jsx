import express from 'express';

const server = express();

server.use((req, res) => {
	const HTML = '
		<!DOCTYPE html>
		<html>
			<head>
				<meta charset="utf-8">
				<title>Tuklas</title>
			</head>
			<body>
				<div id="react-view"></div>
				<script type="application/javascript" src="bundle.js"></script>
			</body>
		</html>
	';

	res.end(HTML);
});

export default server;
