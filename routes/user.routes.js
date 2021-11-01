const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

//Import Controllers
const users = require("../controllers/user.controller");
  
router.post("/auth/register", users.register); // Register a new user
router.get("/auth/sign_in", users.sign_in); // Sign in user
router.get("/auth/:id",auth, users.findOne); // Retrieve user with id
router.get("/users",auth, users.findAll); // Retrieve all users
router.put("/auth/:id",auth, users.update); // Update a user with id
router.delete("/auth/:id",auth, users.delete); // Delete a user with id
  
module.exports = router;