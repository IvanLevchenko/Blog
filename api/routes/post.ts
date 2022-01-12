const app = require('express').Router();
import { Request, Response } from 'express';

const { uploadPost } = require('../controllers/post')

app.post('/upload-post', (req: Request, res: Response) => uploadPost(req, res))

module.exports = app