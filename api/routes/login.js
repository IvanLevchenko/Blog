"use strict";
exports.__esModule = true;
var app = require('express').Router();
var loginUser = require('../controllers/users.js').loginUser;
app.post('/sign-in', function (req, res) { return loginUser(req, res); });
module.exports = app;
//# sourceMappingURL=login.js.map