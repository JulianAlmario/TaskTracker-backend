const User = require('../../models/User')

const registerUser = async (username, email, hashPassword) => {

 const newUser = new User({
      username: username,
      email: email,
      password: hashPassword
    })
await newUser.save()
}

module.exports = registerUser;