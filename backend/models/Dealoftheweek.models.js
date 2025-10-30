const mongoose  = require('mongoose');

const DealSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    image:[{
        type: String,
        required: true,
    }],
    price: {
        type: Number,
        required: true,
    },
    discountPrice:{
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    rating:{
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Dealoftheweek', DealSchema);   