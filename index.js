const express = require('express');
const app = express();
const path = require('path')

const { User, Post } = require('./api/routes')
const { connectMongo } = require('./db')

app.use(express.json())
app.use(express.static('./build'))
app.use('/api/v1', User, Post)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "./build/index.html"));
})

connectMongo()
app.listen(3000, () => console.log("Server is running"))


// "files": [
//   "./api/controllers/users.ts",
//   "./api/models/user.ts",
//   "./api/routes/user.ts",
//   "./api/middleware/middleware.ts"
// ]