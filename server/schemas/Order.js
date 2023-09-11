const mongoose = require("mongoose");

const Order = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: false,
  },
  totalCost: {
    type: Number,
    required: true,
  },
  totalDiscount: {
    type: Number,
    required: true,
  },
  orderProducts: [
    {
      productId: { type: String, required: true, unique: false },
      productName: { type: String, required: true, unique: false },
      price: { type: Number, required: true, unique: false },
      discount: { type: Number, required: true, unique: false },
      quantity: { type: Number, required: true, unique: false },
    },
  ],
});

module.exports = Order;
