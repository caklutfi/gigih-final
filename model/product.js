const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    videoID: {
        required: true,
        type: String
    },
    productID: {
        required: true,
        type: String
    },
    source: {
        required: true,
        type: String
    },
    thumbnail: {
        required: false,
        type: String    
    },
    title: {
        reqired: true,
        type: String
    },
    description: {
        required: false,
        type: String
    },
    price: {
        required: true,
        type: Number
    }

})

module.exports = mongoose.model('Product', productSchema)