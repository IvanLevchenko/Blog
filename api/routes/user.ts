const app = require('express').Router();
import { Request, Response } from 'express';

const { getUser, loginUser, registerUser } = require('../controllers/users.js')
const { verifyToken } = require('../middleware/middleware.js')

app.get('/get-user', verifyToken, (req: Request, res: Response) => getUser(req, res))
app.post('/sign-in', (req: Request, res: Response) => loginUser(req, res) )
app.post('/sign-up', (req: Request, res: Response) => registerUser(req, res))

module.exports = app




