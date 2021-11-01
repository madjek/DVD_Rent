const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const logger = require('./config/winston');
const cors = require("cors");
const db = require("./models");
const router = require('./router.js');


const app = express();
const PORT = process.env.PORT || 3000;

//Config Cors Options
var corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
  };
  
//Middleware
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json());
app.use(cors(corsOptions));

//Paths
app.get('/', (req, res) => {res.send('Connection to the server successfully');});
app.use(router);

db.mongoose
  .connect(db.url)
  .then(() => {
    console.log("Connected to the database!");
    app.listen(PORT, ()=> console.log(`Server on port ${PORT}`.bgGreen.black));
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });