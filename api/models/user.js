"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var mongoose = require('mongoose');
var userSchema = new mongoose_1.Schema({
    user: { type: String, required: true },
    password: { type: String, required: true }
});
module.exports = mongoose.model('User', userSchema, 'users');
//# sourceMappingURL=user.js.map