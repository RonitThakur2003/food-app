const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Food title is required"]
    },
    description:{
        type:String,
        required:[true,"Food description is required"]
    },
    price:{
        type:Number,
        required:[true,"Food price is required"]
    },
    foodTags:{
        type:String
    },
    category:{
        type:String
    },
    code:{
        type:String
    },
    isAvailable:{
        type:Boolean,
        default:true
    },
    resturant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resturant'
    },
    rating:{
        type:Number,
        default:5,
        min:1,
        max:5
    }
},{timestamps:true})

module.exports = mongoose.model('Foods',foodSchema)