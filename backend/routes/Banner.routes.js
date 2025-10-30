const express = require('express');
const router = express.Router();
const multer = require('multer');
const { createBanner, getBanners, getBannerById, updateBanner, deleteBanner } = require('../controllers/Banner.controllers');

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
router.post('/', upload.array('image', 5), createBanner);
router.get('/', getBanners);
router.get('/:id', getBannerById);
router.put('/:id', upload.array('image', 5), updateBanner);
router.delete('/:id', deleteBanner);


module.exports = router;
