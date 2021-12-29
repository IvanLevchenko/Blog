"use strict";
exports.__esModule = true;
var app = require('express').Router();
var _a = require('../controllers/users.js'), getUser = _a.getUser, loginUser = _a.loginUser, registerUser = _a.registerUser;
app.get('/get-user', function (req, res) { return getUser(req, res); });
app.post('/sign-in', function (req, res) { return loginUser(req, res); });
app.post('/sign-up', function (req, res) { return registerUser(req, res); });
module.exports = app;
//# sourceMappingURL=user.js.map