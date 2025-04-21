const express = require('express')
const User = require('../models/User')
const bycrypt = require('bcrypt')
require('dotenv').config({ path: './.env' });

const router = express.Router()



router.post('/login', async (req, res) => {
  const { username,password } = req.body
  try {
    const data = await User.findOne({ username })

    if (!data) {
      return res.status(404).json({ message: 'User not found' })
    }
    const isMatch = await bycrypt.compare(password, data.password)
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password' })
    }

    const { password:_, ...userData } = data
    res.json({
      _id:userData._id,
      username:userData.username,
      email:userData.email,
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error retrieving user' })
  }
})

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body
  try {
    const hashPassword = await bycrypt.hash(password, Number(process.env.salt))
    const newUser = new User({
      username: username,
      email: email,
      password: hashPassword
    })
    await newUser.save()
    res.status(201).json({ message: 'User saved successfully', item: newUser })
  } catch (err) {
    res.status(500).json({ error: `Error saving the user,error:${err}` })
  }
})

module.exports = router
