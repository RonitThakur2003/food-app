const User = require('../models/userModel')
const bcrypt = require('bcryptjs')

const registerController = async(req,res)=>{
    try {
        const { username, email, password, phone, address } = req.body;
        if(!username || !email || !password || !phone){
            return res.status(500).send({message:'please provide all fields'})
        }
        const existing = await User.findOne({email})
        if(existing){
            return res.status(401).send({message:'email already exist'})
        }
        // hashing
        const salt = bcrypt.genSaltSync(10);
        const hashPassword =await bcrypt.hash(password,salt)

        // const response = await newUser.save()
        const user = await User.create({
            username, 
            email, 
            password: hashPassword, 
            address, 
            phone
        });
        console.log('data saved');
        res.status(200).json({message:'successfully registered',user});
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error'});
    }
}

const loginController = async(req,res)=>{
    try {
        const {email,password} = req.body
        if(!email || !password){
            return res.status(500).send({message:'please provide email and password'})
        }
        const user =await User.findOne({email})
        if(!user){
            return res.status(404).send({message:'user not found, enter correct email'})
        }
        const isMatch =await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(500).send({message:'Invalid password'})
        }
        user.password = undefined
        res.status(200).json({message:'login successfully',user});
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error'});
    }
}

module.exports = {registerController,loginController}