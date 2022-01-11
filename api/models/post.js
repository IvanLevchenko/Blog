const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  author: { type: String, required: true },
  postText: { type: String, required: true }
}, { timestamps: true })

module.exports = mongoose.model('Post', PostSchema, 'posts') 