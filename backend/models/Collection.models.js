const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    collectionName:{
        type: String,
        required: true,
    },
    button: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('collection', collectionSchema);