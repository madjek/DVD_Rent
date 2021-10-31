const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.movies = require("./movie.model.js")(mongoose);
db.orders = require("./order.model.js")(mongoose);

db.user = require("./user.model");
db.role = require("./role.model")(mongoose);
db.roles = ["user", "admin", "moderator"];

mongoose.Promise = global.Promise;

db.user = require("./user.model");
db.role = require("./role.model");

db.ROLES = ["user", "admin", "moderator"];


module.exports = db;