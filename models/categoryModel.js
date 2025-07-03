const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"category title is required"]
    },
    imageURL:{
        type:String,
        default:"https://www.google.com/imgres?q=food%20logo&imgurl=https%3A%2F%2Fc8.alamy.com%2Fcomp%2FPCYG1J%2Fpizzeria-fast-food-logo-or-label-happy-chef-holding-pizza-and-scapula-in-hands-vector-illustration-PCYG1J.jpg&imgrefurl=https%3A%2F%2Fwww.alamy.com%2Fstock-photo%2Ffast-food-logo.html&docid=IZJPAk6ZZINFiM&tbnid=W08NwuXMmm0oLM&vet=12ahUKEwjwnZOtgqCOAxUWSGcHHU76Hd0QM3oECGAQAA..i&w=1158&h=1390&hcb=2&ved=2ahUKEwjwnZOtgqCOAxUWSGcHHU76Hd0QM3oECGAQAA"
    }
},{timestamps:true})

module.exports = mongoose.model('Category',categorySchema)