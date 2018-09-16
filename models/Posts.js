const mongoose = require('mongoose')

var PostSchema = new mongoose.Schema({
    postType: String,
    postBy: String,
    comments: String,
    createdAt: String,
    updatedAt: String
})

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;