const dotenv = require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

let db;

const initDB = (callback) => {
	if (db) {
		console.log('DB is ready initialized');
		return callback(null, db);
	}
	MongoClient.connect(process.env.MONGODB_URL)
		.then((client) => {
			db = client;
			callback(null,db);
		})
		.catch((err) => {
			callback(erro);
		});
}

const getDB = () => {
	if (!db) {
		throw Error('DB not initialized');
	}
	return db;
}

module.exports = {initDB, getDB};