"use strict";
exports.__esModule = true;
require('dotenv').config();
var Post = require('../models/index').Post;
var uploadPost = function (req, res) {
    console.log(req.body);
};
module.exports = { uploadPost: uploadPost };
//# sourceMappingURL=post.js.map