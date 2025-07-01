const express = require('express')
const { userInfoController, updateUser, deleteUser } = require('../controllers/userController')
const authMiddleware = require('../middlewares/authMiddleware')
const router = express.Router()

router.get('/info',authMiddleware,userInfoController)
router.put('/update',authMiddleware,updateUser)
router.delete('/delete/:userID',authMiddleware,deleteUser)

module.exports = router