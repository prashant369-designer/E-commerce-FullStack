const mongoose = require('mongoose');

const customerReview = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    reviewtitle:{
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
}, { timestamps: true });    

module.exports = mongoose.model('customerReview', customerReview);