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
    const db = await User.findAll()
    res.json(repo)
  } catch (error) {
    next(error)
  }
})


server()
