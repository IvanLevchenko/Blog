const app = require('express').Router();

import { Request, Response } from 'express';

const { loginUser } = require('../controllers/users.js')

app.post('/sign-in', (req: Request, res: Response) => loginUser(req, res) )

module.exports = app

export {}