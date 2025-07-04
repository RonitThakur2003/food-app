const foodModel = require("../models/foodModel");

const createFood = async(req,res) =>{
    try {
        const data = req.body
        const newFood = new foodModel(data)
        if(!newFood){
            return res.status(403).json({error: 'Please enter correct details'});
        }
        await newFood.save()
        res.status(201).json({message: 'New food added successfully',newFood});
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error'});
    }
}

const getFoodInfo = async(req,res) => {
    try {
        const response = await foodModel.find({})
        if(!response){
            return res.status(404).send({message:"Food not found"})
        }
        res.status(201).send({message:"Foods Info",response})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error',error});
    }
}

const updateFood = async(req,res)=>{
    try {
        const foodID = req.params.id;
        const updateFoodData = req.body

        const response = await foodModel.findByIdAndUpdate(foodID,updateFoodData,{
        new: true,
        runValidators: true
       })
       if(!response){
            return res.status(404).json({error:"Food Not Found"})
       }
        console.log('Food data updated');
        res.status(200).json({message:'Food data updated',response});
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error',error});
    }
}

const deleteFood = async(req,res) =>{
    try {
        const foodID = req.params.id
        const response = await foodModel.findByIdAndDelete(foodID)
        if(!response){
            return res.status(404).json({message: 'Food not found'})
        }
        console.log("data deleted successfully")
        res.status(200).json({message:'Food data deleted successfully',response});
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error',error});
    }
}
module.exports = {createFood,getFoodInfo,updateFood,deleteFood}