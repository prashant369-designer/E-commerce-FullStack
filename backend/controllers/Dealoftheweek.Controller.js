const Dealoftheweek = require('../models/Dealoftheweek.models');

// Create new deal
exports.createDeal = async (req, res) => {
  try {
    const { title, description, price, discountPrice, category, quantity, rating, status, image } = req.body;

    // Support both URL and file uploads
    let imagePaths = [];
    if (req.files && req.files.length > 0) {
      imagePaths = req.files.map(file => `/uploads/${file.filename}`);
    } else if (image) {
      imagePaths = Array.isArray(image) ? image : [image];
    }

    const newDeal = new Dealoftheweek({
      title,
      description,
      image: imagePaths,
      price,
      discountPrice,
      category,
      quantity,
      rating,
      status,
    });

    await newDeal.save();
    res.status(201).json({ message: "Deal created successfully", data: newDeal });
  } catch (error) {
    console.error("Error creating deal:", error);
    res.status(500).json({ message: "Error creating deal", error });
  }
};


// Get all deals
exports.getDeals = async (req, res) => {
  try {
    const deals = await Dealoftheweek.find();
    res.status(200).json(deals);
  } catch (error) {
    console.error('Error fetching deals:', error);
    res.status(500).json({ message: 'Error fetching deals', error });
  }
};
