var Mongoose = require("mongoose");

var UserSchema = new Mongoose.Schema({
  id: {
    type: String
  },
  name: {
    type: String,
    required: true,
    unique: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
  },
  image: {
    url: String,
    filename: String,
  },
  isAdmin: {
    type: Boolean,
  },
});

var UserModel = Mongoose.model("User", UserSchema); //users is a table or collection

module.exports = UserModel;
