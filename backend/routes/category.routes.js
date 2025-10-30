const express = require('express');
const router = express.Router();
const multer = require('multer');
const { 
  createcategory, 
  getcategorys, 
  getcategoryById, 
  updatecategory, 
  deletecategory 
} = require('../controllers/Category.controllers');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Routes
router.post('/', upload.array('image', 1), createcategory);
router.get('/', getcategorys);
router.get('/:id', getcategoryById);
router.put('/:id', upload.array('image', 1), updatecategory);
router.delete('/:id', deletecategory);

module.exports = router;
