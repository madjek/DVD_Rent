const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

//Import Controllers
const movies = require("../controllers/movie.controller");
  
router.post("/",auth, movies.create); // Create a new movie
router.get("/", movies.findAll); // Retrieve all movies
router.get("/available",auth, movies.findAllAvailable); // Retrieve all available movies
router.get("/:id",auth, movies.findOne); // Retrieve a single movie with id
router.put("/:id",auth, movies.update); // Update a movie with id
router.delete("/:id",auth, movies.delete); // Delete a movie with id
router.delete("/",auth, movies.deleteAll); // Delete all movies

module.exports = router;