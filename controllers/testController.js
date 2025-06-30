const testUserController =(req,res)=>{
   try {
        res.status(200).send({message:'test api is working'})
   } catch (error) {
        console.log('Error in test api',error)
   }
}

module.exports = {testUserController}