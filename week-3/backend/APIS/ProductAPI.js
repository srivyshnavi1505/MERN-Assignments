import express from 'express';
import ProductModel from '../models/ProductModel.js';

export const prodApp = express.Router();

//get  products
prodApp.get('/products', async (req, res) => {
  try {
    const productsList = await ProductModel.find();
    res.status(200).json({
      message: "Products fetched successfully",
      payload: productsList
    });
  } catch (err) {
    console.log("Error fetching products:", err);
    res.status(500).json({ message: "Couldn't fetch the products" });
  }
});

// CREATE product
prodApp.post('/products', async (req, res) => {
  try {
    const newProduct = req.body;
    const newProdDoc = new ProductModel(newProduct);
    await newProdDoc.save();

    res.status(201).json({ message: "Product created successfully" });
  } catch (err) {
    console.log("Validation error:", err.message);
    res.status(400).json({ message: "Validation failed", error: err.message });
  }
});

// GET product by id (from mongo db)
prodApp.get('/products/:id', async (req, res) => {
  try {
    const objId = req.params.id;
    const product = await ProductModel.findById(objId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product found", payload: product });
  } catch (err) {
    res.status(400).json({ message: "Invalid product id" });
  }
});
// GET product by pid
prodApp.get('/products/pid/:pid', async (req, res) => {
  try {
    const pid = Number(req.params.pid);
    const product = await ProductModel.findOne({ pid });

    if (!product) {
      return res.status(404).json({ message: "Product not found with given pid" });
    }

    res.status(200).json({ message: "Product found", payload: product });
  } catch (err) {
    res.status(400).json({ message: "Error fetching product by pid" });
  }
});
// UPDATE product by Mongo _id
prodApp.put('/products/:id', async (req, res) => {
  try {
    const objId = req.params.id;
    const modifiedProduct = req.body;

    const latestProduct = await ProductModel.findByIdAndUpdate(
      objId,
      { $set: { ...modifiedProduct } },{ new: true, runValidators: true }
    );

    if (!latestProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product updated", payload: latestProduct });
  } catch (err) {
    res.status(400).json({ message: "Update failed", error: err.message });
  }
});
// DELETE product by Mongo _id
prodApp.delete('/products/:id', async (req, res) => {
  try {
    const objId = req.params.id;
    const deletedProduct = await ProductModel.findByIdAndDelete(objId);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted", payload: deletedProduct });
  } catch (err) {
    res.status(400).json({ message: "Delete failed", error: err.message });
  }
});
