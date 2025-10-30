const express = require('express');
const router = express.Router();
const { createReview, getReviews, getReviewsById, updateReview, deleteReview } = require('../controllers/CurstomerReview.Controller');   
    
    
    // Routes
    router.post('/', createReview);
    router.get('/', getReviews);
    router.get('/:id', getReviewsById);
    router.put('/:id', updateReview);
    router.delete('/:id', deleteReview);
    
    module.exports = router;