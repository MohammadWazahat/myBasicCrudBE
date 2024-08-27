const mongoose = require("mongoose");

//Crating schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
});


//Creating a model
const User = mongoose.model("user", userSchema);

module.exports = User;
