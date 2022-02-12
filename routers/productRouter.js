import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Product from "../Models/productModel.js";

const productRouter = express.Router();
//sending a list of products to frontend
productRouter.get('/' , expressAsyncHandler(async (req , res)=>{
        const products = await Product.find({});
        res.send(products);
})
);


//to create 6 products 
productRouter.get('/seed' , expressAsyncHandler(async (req , res)=>{
    const createdProduct = await Product.insertMany(data.products);
    res.send({createdProduct});
})
);

//returning details of a product to frontend
productRouter.get('/:id' , expressAsyncHandler(async (req , res)=>{
    const product = await Product.findById(req.params.id);
    if(product){
        res.send(product);
    }
    else{
        res.status(404).send({message : 'Product not found'});
     }
}))

export default productRouter;