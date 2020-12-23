const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://yosef:yosef123@cluster0.pxmvl.mongodb.net/test'


const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true },
  );

  const User = mongoose.model('User', userSchema);



  (async () => {
    const connector = mongoose.connect(connectionString)

  let users = ['Jacob','Will','Mark','Ben','Josh','Aron','Jesse','Irina','Sam','Katie','Lyla']
  users.forEach(async user => {
    await new User({user})
    console.log(`created: ${user}`)
  })

})()

export default User
