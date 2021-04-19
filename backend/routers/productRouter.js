import express from 'express';
// import database from 'mime-db';
import Product from '../models/productModel.js';
import data from '../data.js';
import expressAsyncHandler from 'express-async-handler';
const productRouter = express.Router();
 
productRouter.get('/',expressAsyncHandler(async(req,res)=>{
 const products = await Product.find({});
 res.send(products);
}));


productRouter.get('/seed',expressAsyncHandler(async(req,res)=>{
 //await Product.remove({});
 const createdProducts = await Product.insertMany(data.products);
 res.send({createdProducts});
}))

productRouter.get('/:id',expressAsyncHandler(async(req,res)=>{
 const product = await Product.findById(req.params.id);
 if(product){
  res.send(product);
 }else{
  res.send(404).send({message:"Product Not found"});
 }
}))
export default productRouter;