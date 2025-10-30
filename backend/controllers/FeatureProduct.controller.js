const featureProduct = require("../models/FeatureProduct.models");

exports.createfeatureProduct = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      skutype,
      productdetails,
      image,
      rating,
      price,
      discountPrice,
    } = req.body;
    let imagePaths = [];
    if (req.files && req.files.length > 0) {
      imagePaths = req.files.map((file) => `/uploads/${file.filename}`);
    } else if (image) {
      imagePaths = Array.isArray(image) ? image : [image];
    }

    const newProduct = new featureProduct({
      title,
      description,
      category,
      skutype,
      productdetails,
      image: imagePaths,
      rating,
      price,
      discountPrice,
    });

    await newProduct.save();
    res
      .status(201)
      .json({ message: "feature product created successfully", data: newProduct });
  } catch (error) {
    console.error("Error creating feature product:", error);
    res.status(500).json({ message: "Error creating feature product", error });
  }
};

exports.getfeatureProducts = async (req, res) => {
  try {
    const products = await featureProduct.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Error fetching feature products" });
  }
};

exports.getfeatureProductById = async (req, res) => {
  try {
    const foundProduct = await featureProduct.findById(req.params.id);
    if (!foundProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(foundProduct);
  } catch (error) {
    res.status(500).json({ error: "Error fetching product" });
  }
};

exports.updatefeatureProduct = async (req, res) => {
  try {
    const updatedProduct = await featureProduct.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Error updating product" });
  }
};

exports.deletefeatureProduct = async (req, res) => {
  try {
    const deletedProduct = await featureProduct.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting product" });
  }
};
