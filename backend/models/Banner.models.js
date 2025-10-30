const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
    subtitle:{
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: [{
        type: String,
        required: true,
    }],
    button: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Banner', bannerSchema);