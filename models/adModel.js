const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const adSchema = new Schema({
  
  title : {
    type: String,
    required: true,
  },
  description : {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = model("Ad", adSchema);