import exp from 'express'
export const productApp=exp.Router()
import { productModel } from '../models/productModel.js'
productApp.post("/products",async(req,res)=>{
     let newProd = req.body;
    //create dcument 
    let prodDoc = new productModel(newProd)
    await prodDoc.save()
    res.status(201).json({message:"product created"})
})
productApp.get("/products",async(req,res)=>{
    let prodList=await productModel.find()
    res.status(200).json({message:"products ",payload:prodList})
})

