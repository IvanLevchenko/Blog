"use strict";
exports.__esModule = true;
var app = require('express').Router();
var getUser = require('../controllers/users.js').getUser;
app.get('/get-user', function (req, res) { return getUser(req, res); });
module.exports = app;
//# sourceMappingURL=user.js.map