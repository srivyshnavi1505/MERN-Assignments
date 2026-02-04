
//update user 

import express from 'express'
import UserModel from '../models/UserModel.js'
import {compare, hash}  from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { verifyTokens} from '../middlerwares/verifyTokens.js'
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
    let hashedpassword = await hash(newUser.password,12)

newUser.password = hashedpassword;

    let newUserDoc = new UserModel(newUser)

    await newUserDoc.save()
    res.status(202).json({message:"user created"})
    } catch (err) {
        console.log("Validation error:", err.message)
        res.status(400).json({ message: "Validation failed", error: err.message })
    }
})


//userAuthentication route
userApp.post('/user-api/users/auth', async(req,res)=>{
  //get user cred obj 
  let userCred = req.body;
  //check for username 
  let userOfDB = await UserModel.findOne({username : userCred.username})

  if(userOfDB===null){
    return res.status(404).json({message: " invalid user "})
  }

  let status = await compare(userCred.password,userOfDB.password)
  if(status===false){
    return res.status(404).json({message:"invalid password "})

  }
// create signed token 
let signedToken =  jwt.sign( {username:userCred.username},'secret',{expiresIn : 10 }) // 10  => secs  , "10" => millisec ,"10d" => 10 days 
//'secret' key is used at the time of verification 
//send token in res 
//res.status(200).json({message:"login success",token : signedToken})
//save token as httponlyCookie
res.cookie('token',signedToken,{
  httpOnly : true , //it is httpOnly cookie , without this mention , it will treat as normal cookie 
  secure : false,
  sameSite : "lax" //accesible any application  "strict "=> high restriction  , "lax" = > moderate restructuion

});
res.status(200).json({message:"Login success "}); 

})

///protected route - must be defined BEFORE /:id route
userApp.get('/user-api/users/test', verifyTokens,(req,res)=>{
  res.json({message:"test route "}) 
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



// when we store signed token as http only cookie : browser cannot access it , anyone cannot access so which is why it very secure 
//application without all these security concerns , the application is not Robust , easily prone to attacks
