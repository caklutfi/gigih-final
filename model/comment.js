const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    videoID: {
        required: true,
        type: String
    },
    username: {
        required: true,
        type: String
    },
    email: {
        required: false,
        type: String
    },
    comment: {
        required: true,
        type: String
    },
    timeStamp: {
        required: true,
        type: String
    },
    commentLike: {
        required: false,
        type: Number
    }


})

module.exports = mongoose.model('Comment', commentSchema)