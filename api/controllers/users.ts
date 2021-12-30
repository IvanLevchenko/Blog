require('dotenv').config()

import { Request, Response } from 'express';
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { User } = require('../models/index');

interface UserFromDB {
  user: string,
  password: string,
  _id: string
}

const loginUser = async (req: Request, res: Response) => {
  let user;
  let hashedPassword;

  console.log(req.body)

  if(req.body?.justRegistered) {
    user = req.body.registerResponse.user
    hashedPassword = req.body.registerResponse.password
  } else {
    user = req.body.login
    hashedPassword = crypto.createHash('md5').update(req.body.password).digest('hex')
  }

  let responseObject: UserFromDB = await User.findOne({user, hashedPassword})
  console.log(responseObject)
  const token = jwt.sign(responseObject._id + '', process.env.SECRET_KEY)

  res.status(200).send({responseObject, token})
}

const getUser = async (req: Request, res: Response) => {
  const userToken = req.query.token;
  const generatedToken = jwt.sign(req.query._id, process.env.SECRET_KEY)

  if(userToken == generatedToken) {
    let user: UserFromDB = await User.findOne({_id: req.query._id})
    res.status(200).send({user})
  }

}

const registerUser = async (req: Request, res: Response) => {
  const hashedPassword = crypto.createHash('md5').update(req.body.password).digest('hex')

  let responseObject: UserFromDB = await User.create({user: req.body.login, password: hashedPassword})

  res.status(200).send({responseObject})
}

module.exports = { loginUser, getUser, registerUser }
