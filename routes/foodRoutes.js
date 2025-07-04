const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware')
const { createFood, getFoodInfo, updateFood, deleteFood } = require('../controllers/foodController')
const router = express.Router()

router.post('/create',createFood)
router.get('/getinfo',getFoodInfo)
router.put('/update/:id',authMiddleware,updateFood)
router.delete('/delete/:id',authMiddleware,deleteFood)


module.exports = router