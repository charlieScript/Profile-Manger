const mongoose = require('mongoose')

const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  }, 
  password: {
    type: String,
    required: true,
    minlength: [6, 'Please enter a password between 6 to 18'],
    maxlength: [18, 'Please enter a password between 6 to 18'],
  },
  role: {
    type: String,
    required: true
  },
  secretKey: {
    type: Number,
  }
})

// hook
userSchema.pre('save', async function(next) {

  const salt = await bcrypt.genSalt()

  this.password = await bcrypt.hash(this.password, salt);
  
  next()

})

const User = mongoose.model('user', userSchema)

module.exports = User