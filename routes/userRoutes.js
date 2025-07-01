const express = require('express')
const { userInfoController } = require('../controllers/userController')
const authMiddleware = require('../middlewares/authMiddleware')
const router = express.Router()

router.get('/info',authMiddleware,userInfoController)

module.exports = router