const app = require('express').Router();
import { Request, Response } from 'express';

const { getUser } = require('../controllers/users.js')

app.get('/get-user', (req: Request, res: Response) => getUser(req, res))

module.exports = app