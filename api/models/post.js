const mongoose = require('mongoose');

const Post = mongoose.Schema({
  title: String,
  text: String
})

module.exports = mongoose.model('Post', Post);