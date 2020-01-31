const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProductSchema = new Schema({
  sku: "111445GB3",
  title: "City Scape Artwork",
  description:
    "A beautiful rendition of the chicago skyline, featuring the bean.",
  product_type: "FRAME",
  product_details: {
    frame_size: "32x40",
    color: "Black"
  },
  shipping_details: {
    weight: 2,
    width: 32,
    height: 40,
    depth: 1
  },
  pricing: {
    price: 240
  }
});

module.exports = Product = mongoose.model("products", ProductSchema);
