const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware')
const { createCatController, getCatController, updateCategory, deleteCategory } = require('../controllers/categoryController')
const router = express.Router()

router.post('/create',authMiddleware,createCatController)
router.get('/info',getCatController)
router.put('/update/:id',authMiddleware,updateCategory)
router.delete('/delete/:id',deleteCategory)


module.exports = router