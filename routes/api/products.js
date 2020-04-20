const express = require("express");
const router = express.Router();

const Product = require("../../models/Product");

class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filtering() {
    const queryObj = { ...this.queryString };
    console.log(queryObj);
    const excludedFields = ["page", "sort", "limit"];
    excludedFields.forEach((el) => delete queryObj[el]); //Deletes fields from whatever query string
    let querStr = JSON.stringify(queryObj);
    querStr = querStr.replace(/\b(gte|gt|lt|lte)\b/g, (match) => `$${match}`);
    this.query.find(JSON.parse(querStr));
    return this;
  }
  sorting() {
    if (this.queryString.sort) {
      const sortby = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortby);
    } else {
      this.query = this.query.sort("price");
    }
    return this;
  }
  paginating() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 12;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

router.get("/", async (req, res) => {
  try {
    const features = new APIFeatures(Product.find(), req.query)
      .filtering()
      .sorting()
      .paginating();
    const products = await features.query;
    res.status(200).json({
      status: "success",
      results: products.length,
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(200).json({
      status: "success",
      data: newProduct,
    });
  } catch {
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const newProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({
      status: "success",
      data: newProduct,
    });
  } catch {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
});

module.exports = router;
