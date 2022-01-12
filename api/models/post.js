const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  author: { type: String, required: true },
  postData: { type: String, required: true }
}, { timestamps: true })

module.exports = mongoose.model('Post', PostSchema, 'posts') 