// const dbConfig = require("../config/db.config.js");
const dotenv = require('dotenv').config();

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB_URL;
db.user = require("./UserModel.js")(mongoose);

module.exports = db;