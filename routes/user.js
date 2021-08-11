const router = require('express').Router()

const { userSignup } = require('../controller/userContoller')

router.post('/signup', userSignup)



module.exports = router