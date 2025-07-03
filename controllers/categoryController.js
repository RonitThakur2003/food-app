const categoryModel = require("../models/categoryModel")

const createCatController = async(req,res) =>{
    try {
        const {title, imageURL} = req.body

        if(!title){
            return res.status(500).send({message:"Please provide title"})
        }
        const response = new categoryModel({title, imageURL})
        await response.save()
        res.status(201).send({message:"New category created",response})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error',error});
    }
}

const getCatController = async(req,res) => {
    try {
        const response = await categoryModel.find({})
        if(!response){
            return res.status(404).send({message:"Category not found"})
        }
        res.status(201).send({message:"Categories",response})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error',error});
    }
}

const updateCategory = async(req,res)=>{
    try {
        const catID = req.params.id;
        const updateUserData = req.body

        const response = await categoryModel.findByIdAndUpdate(catID,updateUserData,{
        new: true,
        runValidators: true
       })
       if(!response){
            return res.status(404).json({error:"Category Not Found"})
       }
        console.log('Category data updated');
        res.status(200).json({message:'Category data updated',response});
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error',error});
    }
}

const deleteCategory = async(req,res)=>{
    try {
        const catID = req.params.id;
        if(!catID){
            return res.status(403).send({message:"Please provide ID"})
        }
        const response = await categoryModel.findByIdAndDelete(catID)
       if(!response){
            return res.status(404).json({error:"Category Not Found"})
       }
        console.log('Category data deleted');
        res.status(200).json({message:'Category data deleted',response});
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error',error});
    }
}

module.exports = {createCatController,getCatController,updateCategory,deleteCategory}