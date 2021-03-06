const mongoose = require('mongoose'),
  bcrypt = require('bcrypt'),
  Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  hash_password: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now
  }
});

UserSchema.methods.comparePassword = (password) => {
  return bcrypt.compareSync(password, this.hash_password);
};

mongoose.model('User', UserSchema);