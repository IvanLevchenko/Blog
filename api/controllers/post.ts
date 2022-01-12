require('dotenv').config()

import { Request, Response } from 'express'
const { Post } = require('../models/index')

const uploadPost = (req: Request, res: Response) => {
  console.log(req.body)
}

module.exports = { uploadPost }