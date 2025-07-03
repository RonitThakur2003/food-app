const resturantModel = require("../models/resturantModel")

const createResturantController = async(req,res) =>{
    try {
        const {title, imageUrl, foods, time, pickup, delivery, isOpen, logoUrl, rating, ratingCount, code, coords} = req.body

        if(!title || !coords){
            return res.status(500).json({message: 'please provide title and address'})
        }

        const newResturant = new resturantModel({title, imageUrl, foods, time, pickup, delivery, 
            isOpen, logoUrl, rating, ratingCount, code, coords})

        await newResturant.save()    
        res.status(200).json({message:'New Resturant created successfully'});
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error',error});
    }
}

const getReaturantDetails = async(req,res) =>{
    try {
        const resturant = await resturantModel.find({})
        if(!resturant){
            return res.status(404).json({message: 'Resturant not found'})
        }
        console.log("data fetched successfully")
        res.status(200).json({message:'Resturant data fetched successfully',totalCount:resturant.length ,resturant});
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error',error});
    }
}

const getDetails = async(req,res) =>{
    try {
        const resID = req.params.resID
        const resturant = await resturantModel.findById(resID)
        if(!resturant){
            return res.status(404).json({message: 'Resturant not found'})
        }
        console.log("data fetched successfully")
        res.status(200).json({message:'Resturant data fetched successfully',resturant});
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error',error});
    }
}

const deleteRes = async(req,res) =>{
    try {
        const resID = req.params.resID
        const resturant = await resturantModel.findByIdAndDelete(resID)
        if(!resturant){
            return res.status(404).json({message: 'Resturant not found'})
        }
        console.log("data deleted successfully")
        res.status(200).json({message:'Resturant data deleted successfully',resturant});
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error',error});
    }
}


module.exports = {createResturantController, getReaturantDetails,getDetails,deleteRes}