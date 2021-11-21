const authConfig = require('../config/auth');

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
User = mongoose.model('User');

const UserController = {}; //Create the object controller

//CRUD end-points Functions
// Register a new User
UserController.register = (req, res) => {

  // Validate request
  if (!req.body.email) {
    res.status(400).send({ message: "Email can not be empty!" });
    return;
  };
  if (req.body.email = User.find({email: req.body.email})) {
    res.status(400).send({ message: "Email already exist!" });
    return;
  };
  if (req.body.password.length < 8) {
    res.status(400).send({ message: "Password should be at least 8 characters long." });
    return;
  };
  
  const newUser = new User(req.body);
  
  newUser.hash_password = bcrypt.hashSync(req.body.password, 8);

  newUser.save(function(err, user) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      user.hash_password = undefined;
      return res.json(user);
    }
  });
};

// Sign in User
UserController.sign_in = (req, res) => {
  User.findOne({
    email: req.body.email
  }, (err, user) => {
    // if (err) throw err;
    if (!user || !user.comparePassword(req.body.password)) {
      return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
    }
    return res.json({user: user, token: jwt.sign({ email: user.email, name: user.name, _id: user._id }, authConfig.secret) });
  });
};

// Retrieve all users from the database.
UserController.findAll = (req, res) => {
  const type = req.query.type;
  var condition = type ? { type: { $regex: new RegExp(type), $options: "i" } } : {};

  User.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

// Find a single User with an id
UserController.findOne = (req, res) => {
  const id = req.params.id;

  User.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found User with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving User with id=" + id });
    });
};

// Find a User by email
UserController.findEmail = (req, res) => {
  const email = req.params.email;

  User.find({email: email})
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found User with email " + email });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving User with email=" + email });
    });
};

// Update a User by the id in the request
UserController.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update User with id=${id}. Maybe User was not found!`
        });
      } else res.send({ message: "User was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

// Delete a user with the specified id in the request
UserController.delete = (req, res) => {
  const id = req.params.id;

  User.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete user with id=${id}. Maybe user was not found!`
        });
      } else {
        res.send({
          message: "User was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete user with id=" + id
      });
    });
};

// Delete all USers from the database.
UserController.deleteAll = (req, res) => {
  User.deleteMany({})
  .then(data => {
    res.send({
      message: `${data.deletedCount} Users were deleted successfully!`
    });
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while removing all Users."
    });
  });
};

module.exports = UserController;