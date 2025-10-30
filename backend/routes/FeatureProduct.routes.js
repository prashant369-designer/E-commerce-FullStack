const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  createfeatureProduct,
  getfeatureProducts,
  getfeatureProductById,
  updatefeatureProduct,
  deletefeatureProduct,
} = require("../controllers/FeatureProduct.controller");

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
router.post("/", upload.array("image", 5), createfeatureProduct);
router.get("/", getfeatureProducts);
router.get("/:id", getfeatureProductById);
router.put("/:id", upload.array("image", 5), updatefeatureProduct);
router.delete("/:id", deletefeatureProduct);

module.exports = router;
