const express = require('express');
const app = express();
const env = require('dotenv').config();
const mongodb = require('./api/db/connect')

const port = process.env.PORT || 8080;
const host = process.env.HOST;


app.use('/', require('./api/routers/NodeProjectRoute'));

mongodb.initDB((err, mongodb) => {
	if (err) {
		console.log(err);
	} else {
		app.listen(port, () => {
			console.log(`App listening on ${host}:${port}`);
		});
	}
})
