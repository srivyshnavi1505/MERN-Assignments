
//update user 

import express from 'express'
import UserModel from '../models/UserModel.js'
// adjust path if needed

export const userApp = express.Router()

// GET users
userApp.get('/user-api/users', async (req, res) => {
  try {
    let usersList = await UserModel.find()
    res.json({
      message: "Users fetched successfully",
      payload: usersList
    })
  } catch (err) {
    console.log("Error fetching users:", err)
    res.status(500).json({ message: "Error fetching users" })
  }
})
 
userApp.post('/user-api/users',async (req,res)=>{
    try {
    let newUser = req.body;
    //create document 

    let newUserDoc = new UserModel(newUser)

    await newUserDoc.save()
    res.status(202).json({message:"user created"})
    } catch (err) {
        console.log("Validation error:", err.message)
        res.status(400).json({ message: "Validation failed", error: err.message })
    }
})


    //read user by obj id 
userApp.get("/user-api/users/:id", async (req, res) => {
    let objId = req.params.id;

    let userObj = await UserModel.findById(objId)

res.status(201).json({ message: "User not found",payload : userObj });

});
//UPDATE BY OBJ ID

userApp.put("/user-api/users/:id", async(req,res)=>{
  //get objId from url params
    let objId = req.params.id;
    //get modified user from req
    let modifiedUser = req.body;

   // await UserModel.updateOne({username : "bhanu"},{$set : {username : "vyshnavi"}})

  let latestUser =  await UserModel.findByIdAndUpdate(objId,{$set:{...modifiedUser}},
    {new : true});
  res.status(200).json({ message: "User modified",payload : latestUser });
})

userApp.delete("/user-api/users/:id", async(req,res)=>{

   let objId = req.params.id;

   let deletedUser = await UserModel.findByIdAndDelete(objId)
   
   res.status(200).json({ message: "User deleted",payload : deletedUser });

})