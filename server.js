const db = require('./db/db')
const express = require('express')
const app = express();

const path = require('path');
const User = require('./db/user')


const server = () => {
  app.use(express.json())

  app.listen(8080, () => console.log('App is listening on Port 8080!'));

}

app.get('/', async (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname + '/index.html'));
  } catch (error) {
    next(error)
  }
})

app.get('/user', async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (error) {
    next(error)
  }
})


server()
