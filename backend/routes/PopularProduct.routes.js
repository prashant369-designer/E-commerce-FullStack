const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  createPopularProduct,
  getPopularProducts,
  getPopularProductById,
  updatePopularProduct,
  deletePopularProduct,
} = require("../controllers/PopularProduct.controllers");

// Configure file upload storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Routes
router.post("/", upload.array("image", 5), createPopularProduct);
router.get("/", getPopularProducts);
router.get("/:id", getPopularProductById);
router.put("/:id", upload.array("image", 5), updatePopularProduct);
router.delete("/:id", deletePopularProduct);

module.exports = router;
