const mongoose = require("mongoose");
const { Schema } = mongoose;
const products = new Schema({
  product_image: {
    type: String,
    required: true,
  },
  vendor_code: {
    type: String,
    require: true,
  },
  product_name: {
    type: String,
    require: true,
  },
  product_price: {
    type: Number,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
    timestamps: true 
  },
});
const product = mongoose.model("products", products);

module.exports = product;
