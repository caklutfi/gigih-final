const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    videoID: {
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
    channel: {
        required: true,
        type: String
    },
    description: {
        required: false,
        type: String
    },
    likes: {
        required: false,
        type: Number
    }
})

module.exports = mongoose.model('Video', videoSchema)