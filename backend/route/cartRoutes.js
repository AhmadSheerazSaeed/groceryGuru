import express from "express";
import {createCart,updateCartProductQuantity,deleteCart,deleteProduct,fetchCartItems} from '../controllers/cartController.js'
const router = express.Router();

router.post("/createcart", createCart)
router.patch("/editproductquantity/productid/:id/productquantity/:quantity/cartid/:id",updateCartProductQuantity)
router.patch("/deleteproduct/:id", deleteProduct);
router.get("/fetchcartitems", fetchCartItems);


router.delete("/deletecart/:id", deleteCart)


export default router;