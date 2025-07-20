const express = require('express')
const userController=require('../controllers/userController')
const router = express.Router()



router.post('/login', async (req, res) => {
  const { username,password } = req.body
  try {
   const data=await userController.login(username,password)

   if(data.message){
    return res.status(400).json({ message: data.message })
   }

    const { password:_, ...userData } = data.toObject()
    res.json({
      _id: userData._id,
      username: userData.username,
      email: userData.email,
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error retrieving user' })
  }
})

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body
  try {

  const result=await userController.register(username, email, password)

  if(result.message){
    return res.status(400).json({ message: result.message})
  }
    res.status(201).json({ result: 'User saved successfully', item: result })
  } catch (err) {
    res.status(500).json({ error: `Error saving the user,error:${err}` })
  }
})

module.exports = router
