const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
  
  name : {
    type: String,
    unique: true,
    required: true
  },
  email : {
    type: String,
    unique: true,
    required: true
  }
});

module.exports = model("User", userSchema);
