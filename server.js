const db = require('./db/users')
const express = require('express')
const app = express();
const User = require('./db/users')

const server = () => {
  app.use(express.json())

  app.listen(8080, () => console.log('App is listening on Port 8080!'));

}


app.get('/', async (req, res, next) => {
  try {
    const users = await User.find({})
    res.json(users)
  } catch (error) {
    next(error)
  }
})


server()
