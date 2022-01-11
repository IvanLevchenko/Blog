"use strict";
exports.__esModule = true;
require('dotenv').config();
var jwt = require('jsonwebtoken');
function verifyToken(req, res, next) {
    var token = req.query.token;
    var _id = req.query._id;
    console.log(token, _id);
    var checkId = jwt.verify(token, process.env.SECRET_KEY);
    console.log(checkId == _id);
    next();
}
module.exports = { verifyToken: verifyToken };
//# sourceMappingURL=middleware.js.map