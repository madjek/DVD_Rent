const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.movies = require("./movie.model")(mongoose);
db.orders = require("./order.model")(mongoose);
db.users = require("./user.model");

module.exports = db;