const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  createlatestProduct,
  getlatestProducts,
  getlatestProductById,
  updatelatestProduct,
  deletelatestProduct,
} = require("../controllers/LatestProduct.controller");

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
router.post("/", upload.array("image", 5), createlatestProduct);
router.get("/", getlatestProducts);
router.get("/:id", getlatestProductById);
router.put("/:id", upload.array("image", 5), updatelatestProduct);
router.delete("/:id", deletelatestProduct);

module.exports = router;
