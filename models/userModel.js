const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"username is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    address:{
        type: Array
    },
    phone:{
        type:String,
        required:[true,"phone number is required"]
    },
    usertype:{
        type:String,
        required:[true,"user type is required"],
        default:'client',
        enum:['client','vendor','driver','admin']
    },
    profile:{
        type:String,
        default:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1YOx3ImBmd_ExQzqVxI2mehp1sbxHWwlgyrRKl6H5oCX-u1ATB2AMAA&s'
    }
},{timestamps:true})

module.exports = mongoose.model('User',userSchema)