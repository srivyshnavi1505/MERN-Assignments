import { Schema, model } from 'mongoose';

// create schema 
const productSchema = new Schema(
  {
    pid: {
      type: Number,
      required: [true, "product id is required"],
      min: [2, "minimum pid value is 2"],
      max: [5, "maximum pid value is 5"],
         // pid should be unique
    },

    productName: {
      type: String,
      required: [true, "product name is required"],
      trim: true
    },

    price: {
      type: Number,
      required: [true, "price has to be listed"],
      min: [1, "price must be greater than 0"]
    }
  },
  {
    strict: "throw"
  }
);

const ProductModel = model("product", productSchema);
export default ProductModel;
