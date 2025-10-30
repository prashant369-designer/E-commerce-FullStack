const popularProduct = require("../models/PopularProduct.models");

// ✅ Create new popular product
exports.createPopularProduct = async (req, res) => {
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

    // Handle multiple images (from upload or URLs)
    let imagePaths = [];
    if (req.files && req.files.length > 0) {
      imagePaths = req.files.map((file) => `/uploads/${file.filename}`);
    } else if (image) {
      imagePaths = Array.isArray(image) ? image : [image];
    }

    const newProduct = new popularProduct({
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
      .json({ message: "Popular product created successfully", data: newProduct });
  } catch (error) {
    console.error("Error creating popular product:", error);
    res.status(500).json({ message: "Error creating popular product", error });
  }
};

// ✅ Get all products
exports.getPopularProducts = async (req, res) => {
  try {
    const products = await popularProduct.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Error fetching popular products" });
  }
};

// ✅ Get product by ID
exports.getPopularProductById = async (req, res) => {
  try {
    const foundProduct = await popularProduct.findById(req.params.id);
    if (!foundProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(foundProduct);
  } catch (error) {
    res.status(500).json({ error: "Error fetching product" });
  }
};

// ✅ Update product
exports.updatePopularProduct = async (req, res) => {
  try {
    const updatedProduct = await popularProduct.findByIdAndUpdate(
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

// ✅ Delete product
exports.deletePopularProduct = async (req, res) => {
  try {
    const deletedProduct = await popularProduct.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting product" });
  }
};
