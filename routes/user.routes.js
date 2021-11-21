const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

//Import Controllers
const users = require("../controllers/user.controller");
  
router.post("/auth/register", users.register); // Register a new user
router.post("/auth/sign_in", users.sign_in); // Sign in user
router.get("/users/:id",auth, users.findOne); // Retrieve user with id
router.get("/users/email/:email",auth, users.findEmail); // Retrieve user with email
router.get("/users",auth, users.findAll); // Retrieve all users
router.put("/users/:id",auth, users.update); // Update a user with id
router.delete("/users/:id",auth, users.delete); // Delete a user with id
router.delete("/users/",auth, users.delete); // Delete ll users
  
module.exports = router;