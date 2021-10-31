const express = require('express');
const router = express.Router();

//Importo Controllers
const users = require("../controllers/user.controller");
  
router.post("/api", users.create); // Create a new user
router.get("/api", users.findAll); // Retrieve all users
router.get("/api/:id", users.findOne); // Retrieve a single user with id
router.put("/api/:id", users.update); // Update a user with id
router.delete("/api/:id", users.delete); // Delete a user with id
router.delete("/api", users.deleteAll); // Create a new user
  

module.exports = router;