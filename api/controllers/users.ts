require('dotenv').config()

import { Request, Response } from 'express';
// const express = require('express');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { User } = require('../models/index');

interface UserFromDB {
  user: string,
  password: string,
  _id: string
}

const loginUser = async (req: Request, res: Response) => {
  const enteredUser = req
  const enteredPassword = crypto.createHash('md5').update(req.body.password).digest('hex')

  let responseObject: UserFromDB[] = await User.find({enteredUser, enteredPassword})

  const token = jwt.sign(responseObject[0]._id + '', process.env.SECRET_KEY)

  res.status(200).send({responseObject, token})
}

const getUser = async (req: Request, res: Response) => {
  const userToken = req.query.token;
  const generatedToken = jwt.sign(req.query._id, process.env.SECRET_KEY)

  if(userToken == generatedToken) {
    let user: UserFromDB = await User.find({_id: req.query._id})
    res.status(200).send({user})
  }

}

// export = {}
module.exports = { loginUser, getUser }