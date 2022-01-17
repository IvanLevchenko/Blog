require('dotenv').config()

import { Request, Response } from 'express'
const { Post } = require('../models/index')

const uploadPost = async (req: Request, res: Response) => {
  console.log(req.body)
  try {
    const createdPost = await Post.create({ postData: req.body.data, author: req.body.author })

    res.status(200).send(createdPost)
  } catch(e) {
    console.log(e)
  }
}

module.exports = { uploadPost }