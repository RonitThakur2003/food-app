const User = require("../models/userModel");
const bcrypt = require('bcryptjs')

const userInfoController = async(req,res)=>{
   try {
    const user = await User.findById({_id:req.user.id},)
    if(!user){
        return res.status(404).json({message: 'User Not Found'});
    }
    user.password = undefined
    res.status(200).json({message:'User Data Fetched Successfully',user});
   } catch (error) {
    console.log(error)
    res.status(500).json({error: 'Internal Server Error',error});
   }
}

const updateUser = async(req,res)=>{
    try {
        const userID = req.user.id;
        const updateUserData = req.body

        if (updateUserData.password) {
        const salt = bcrypt.genSaltSync(10);
        const hashPassword =await bcrypt.hash(updateUserData.password,salt)
        updateUserData.password=hashPassword
        }
        const response = await User.findByIdAndUpdate(userID,updateUserData,{
        new: true,
        runValidators: true
       })
       if(!response){
            return res.status(404).json({error:"User Not Found"})
       }
        console.log('User data updated');
        res.status(200).json({message:'User data updated',response});
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error',error});
    }
}

const deleteUser = async(req,res)=>{
    try {
        const userID = req.params.userID
        const response = await User.findByIdAndDelete(userID)

        if(!response){
            return res.status(404).json({error:"User Not Found"})
        }
         console.log('User data deleted');
        res.status(200).json({message:'User data deleted',response});
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error',error});
    }
}

module.exports = {userInfoController,updateUser,deleteUser}