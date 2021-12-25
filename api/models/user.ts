import { Schema } from "mongoose";

const mongoose = require('mongoose');

interface User {
  user: String,
  password: String
}

const userSchema = new Schema<User>({
  user: { type: String, required: true },
  password: { type: String, required: true }
})

module.exports = mongoose.model('User', userSchema, 'users')