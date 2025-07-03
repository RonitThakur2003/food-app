const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware')
const { createResturantController, getReaturantDetails, getDetails, deleteRes } = require('../controllers/resturantController')
const router = express.Router()

router.post('/create',authMiddleware,createResturantController)
router.get('/info',getReaturantDetails)
router.get('/info/:resID',getDetails)
router.delete('/delete/:resID',authMiddleware,deleteRes)

module.exports = router