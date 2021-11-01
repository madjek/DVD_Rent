const db = require("../models");
const Order = db.orders;

const OrderController = {}; //Create the object controller

//CRUD end-points Functions
// Create and Save a new Order
OrderController.create = (req, res) => {
  // Validate request
  if (!req.body.user_id) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Order
  const order = new Order(
    {user_id, movie_id} = req.body,
  );

  // Save order in the database
  order
    .save(order)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Order."
      });
    });
};

// Retrieve all orders from the database.
OrderController.findAll = (req, res) => {
  const type = req.query.type;
  var condition = type ? { type: { $regex: new RegExp(type), $options: "i" } } : {};

  Order.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving orders."
      });
    });
};

// Find a single Order with an id
OrderController.findOne = (req, res) => {
  const id = req.params.id;

  Order.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Order with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Order with id=" + id });
    });
};

// Update a Order by the id in the request
OrderController.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Order.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Order with id=${id}. Maybe Order was not found!`
        });
      } else res.send({ message: "Order was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Order with id=" + id
      });
    });
};

// Delete a Order with the specified id in the request
OrderController.delete = (req, res) => {
  const id = req.params.id;

  Order.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Order with id=${id}. Maybe Order was not found!`
        });
      } else {
        res.send({
          message: "Order was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Order with id=" + id
      });
    });
};

// Delete all orders from the database.
OrderController.deleteAll = (req, res) => {
    Order.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Order were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Order."
      });
    });
};

module.exports = OrderController;