const db = require('./db')
const User = require('./user')

const userList = ['Jacob','Will','Mark','Ben','Josh','Aron','Jesse','Irina','Sam','Katie','Lyla']


const seedDB = async () => {
  await db.sync({force: true})

  const createUsers = await Promise.all(
    userList.map(user => {
      let userName = {userName: user}
      User.create(userName)
  })
  )

}

seedDB()
