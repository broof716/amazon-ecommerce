import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/product.Model.js';

const productRouter = express.Router();

productRouter.get(
  '/seed',
  expressAsyncHandler(async(req, res) => {
    // await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({products: createdProducts});
  })
);

export default productRouter;