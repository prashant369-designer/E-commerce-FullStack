const category = require("../models/Category.models");

exports.createcategory = async (req, res) => {
  try {
    const { title, image, button } = req.body;

    let imagePath = '';
    if (req.files && req.files.length > 0) {
      imagePath = `/uploads/${req.files[0].filename}`;
    } else if (image) {
      imagePath = image;
    }

    const newCategory = new category({
      title,
      image: imagePath,
      button,
    });

    await newCategory.save();
    res.status(201).json({ message: "Category created successfully", data: newCategory });
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({ message: "Error creating category", error });
  }
};

exports.getcategorys = async (req, res) => {
  try {
    const categorys = await category.find();
    res.status(200).json(categorys);
  } catch (error) {
    res.status(500).json({ error: "Error fetching categories" });
  }
};

exports.getcategoryById = async (req, res) => {
  try {
    const foundCategory = await category.findById(req.params.id);
    if (!foundCategory) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(200).json(foundCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching category" });
  }
};

exports.updatecategory = async (req, res) => {
  try {
    const updatedCategory = await category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCategory) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ error: "Error updating category" });
  }
};

exports.deletecategory = async (req, res) => {
  try {
    const deletedCategory = await category.findByIdAndDelete(req.params.id);
    if (!deletedCategory) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting category" });
  }
};
