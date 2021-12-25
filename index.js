const express = require('express');
const app = express();

const { Login, User } = require('./api/routes')
const { connectMongo } = require('./db')

app.use(express.json())
app.use('/', express.static('./build'))
app.use('/api/v1', Login, User)

connectMongo()
app.listen(3000, () => console.log("Server is running"))