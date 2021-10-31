const express = require('express');
const router = express.Router();

//Importo Controllers
const orders = require("../controllers/order.controller");
  
router.post("/", orders.create); // Create a new order
router.get("/", orders.findAll); // Retrieve all orders
router.get("/:id", orders.findOne); // Retrieve a single order with id
router.put("/:id", orders.update); // Update a order with id
router.delete("/:id", orders.delete); // Delete a order with id
router.delete("/", orders.deleteAll); // Create a new order
  

module.exports = router;