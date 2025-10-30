const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    button: {
        type: String,
        required: true,
    },
    // totalproduct
}, { timestamps: true });

module.exports = mongoose.model('category', categorySchema);