const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.movies = require("./movie.model.js");
db.orders = require("./order.model.js");

db.user = require("./user.model");
db.role = require("./role.model");
db.roles = ["user", "admin", "moderator"];

module.exports = db;