const mongoose = require('mongoose');

const marqueeSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    designimgae: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('marquee', marqueeSchema);