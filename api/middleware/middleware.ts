import { NextFunction, Request, Response } from 'express'
require('dotenv').config()

const jwt = require('jsonwebtoken')

function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token = req.query.token
  const _id = req.query._id

  console.log(token, _id)

  const checkId = jwt.verify(token, process.env.SECRET_KEY)
  console.log(checkId == _id)

  next()
}

module.exports = { verifyToken }