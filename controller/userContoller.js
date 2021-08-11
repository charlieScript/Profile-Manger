const User = require('../models/Users')
const jwt = require('jsonwebtoken')

const maxAge = 3 * 24 * 60 * 60;


// @POST siggnp users
const userSignup = async (req, res) => {
  const { email, password, role } = req.body



  try {
    const user = await User.create({
      email, password, role
    })
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: 3600,
    });
    res.status(200).json({ msg: 'User created', token })
  } catch (error) {
    res.status(400).json({ msg: 'an error occured'})
    console.log(error)
  }
}

module.exports = {
  userSignup
}