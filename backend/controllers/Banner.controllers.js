const banner = require("../models/Banner.models");

exports.createBanner = async (req, res) => {
  try {
    const { title, subtitle, description, image, button } = req.body;

    let imagePath = '';
    if (req.files && req.files.length > 0) {
      imagePath = `/uploads/${req.files[0].filename}`;
    } else if (image) {
      imagePath = image;
    }

    const newBanner = new banner({
      title,
      subtitle,
      description,
      image: imagePath,
      button,
    });

    await newBanner.save();
    res.status(201).json({ message: "Banner created successfully", data: newBanner });
  } catch (error) {
    console.error("Error creating Banner:", error);
    res.status(500).json({ message: "Error creating banner", error });
  }
};

exports.getBanners = async (req, res) => {
  try {
    const banners = await banner.find();
    res.status(200).json(banners);
  } catch (error) {
    res.status(500).json({ error: "Error fetching banners" });
  }
};

exports.getBannerById = async (req, res) => {
  try {
    const foundBanner = await banner.findById(req.params.id);
    if (!foundBanner) {
      return res.status(404).json({ error: "Banner not found" });
    }
    res.status(200).json(foundBanner);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching banner" });
  }
};

exports.updateBanner = async (req, res) => {
  try {
    const updatedBanner = await banner.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBanner) {
      return res.status(404).json({ error: "Banner not found" });
    }
    res.status(200).json(updatedBanner);
  } catch (error) {
    res.status(500).json({ error: "Error updating banner" });
  }
};

exports.deleteBanner = async (req, res) => {
  try {
    const deletedBanner = await banner.findByIdAndDelete(req.params.id);
    if (!deletedBanner) {
      return res.status(404).json({ error: "Banner not found" });
    }
    res.status(200).json({ message: "Banner deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting banner" });
  }
};
