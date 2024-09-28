const express = require('express');
const app = express();
const env = require('dotenv').config();
const mongodb = require('./api/db/connect');
const bodyParser = require('body-parser');


const port = process.env.PORT || 8080;
const host = process.env.HOST;


app.use(bodyParser.json());
app.use((req, res, next) => {
	res.setHeader('Accesss-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Request-With, Content-Type, Accept, Z-Key'
	);
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	next();
})
app.use('/', require('./api/routers'));

mongodb.initDB((err, mongodb) => {
	if (err) {
		console.log(err);
	} else {
		app.listen(port, () => {
			console.log(`App listening on ${host}:${port}`);
		});
	}
})
