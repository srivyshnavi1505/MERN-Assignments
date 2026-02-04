import exp from 'express'
import { model } from 'mongoose'
import { userModel } from '../models/userModel.js'
export const userApp=exp.Router()

userApp.get("/users",async(req,res)=>{
    let userList=await userModel.find()
    res.json({message:"users ",payload:userList})

})
userApp.post("/users",async(req,res)=>{
    let newUser = req.body;
    //create document 
    let newUserDoc = new userModel(newUser)
    await newUserDoc.save()
    res.status(201).json({message:"user created"})
})
userApp.post("/user-cart",async(req,res)=>{
    
})
//updating cart 
userApp.put('/user-cart/userid/:userid/product/:productid', async (req, res) => {
    try {
        const { userid, productid } = req.params
        const user = await userModel.findById(userid)
        if (!user) return res.status(404).json({ message: 'User not found' })

        user.cart.push({ product: productid })
        await user.save()
        res.json({ message: 'Product added to cart', payload: user.cart })
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message })
    }
})