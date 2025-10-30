const mongoose = require('mongoose');

const popularProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    skutype:{
        type: String,
        required: true,
    },
    productdetails:{
        type: String,
        required: true,
    },
    image:[{
        type: String,
        required: true,
    }],
    rating: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    //in stock
    discountPrice:{
        type: Number,
        required: true,
    },
})

module.exports = mongoose.model('popularProduct', popularProductSchema);