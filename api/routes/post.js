"use strict";
exports.__esModule = true;
var app = require('express').Router();
var uploadPost = require('../controllers/post').uploadPost;
app.post('/upload-post', function (req, res) { return uploadPost(req, res); });
module.exports = app;
//# sourceMappingURL=post.js.map