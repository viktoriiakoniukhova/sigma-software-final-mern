const mongoose = require("mongoose");

const Product = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  category: {
    name: { type: String, required: true, unique: false },
    desc: { type: String, required: true, unique: false },
  },
  discount: {
    name: { type: String, required: true, unique: false },
    percent: { type: Number, required: true, unique: false },
    active: { type: Boolean, required: true, unique: false },
  },
  imgUrl: {
    type: String,
    required: true,
  },
});

module.exports = Product;
