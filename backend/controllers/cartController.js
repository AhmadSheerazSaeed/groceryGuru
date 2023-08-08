import { StatusCodes } from "http-status-codes";
import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

export const updateCartProductQuantity = async (req, res) => {
  const customerId = req.body.customerId;
  const productId = req.body.productId;
  const quantityChange = req.body.quantityChange;

  try {
    const updatedCart = await Cart.findOneAndUpdate(
      { customerId, "items.productId": productId },
      { $inc: { "items.$.quantity": quantityChange } },
      { new: true, arrayFilters: [{ "item.productId": productId }] }
    );
    if (!updatedCart) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json("Product not found or no customer ID");
    }

    return res
      .status(StatusCodes.OK)
      .json({ message: "Product quantity updated", updatedCart });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const customerId = req.body.customerId;
  const productId = req.body.productId;
  try {
    const updatedCart = await Cart.findOneAndUpdate(
      { customerId },
      { $pull: { items: { productId } } },
      { new: true }
    );
    if (!updatedCart) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json("Product not found or no customer ID");
    }
    return res
      .status(StatusCodes.OK)
      .json({ message: "Product deleted", updatedCart });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};

export const deleteCart = async (req, res) => {
  try {
    const cartToDelete = await Cart.findByIdAndDelete(req.params.id);
    if (!cartToDelete) {
      return res.status(StatusCodes.NOT_FOUND).json("Cart not found");
    }
    return res
      .status(StatusCodes.OK)
      .json({ message: "Cart deleted", deleteCart: cartToDelete });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};

export const createCart = async (req, res) => {
  try {
    const createdCart = await Cart.create({
      customerId: req.body.customerId,
      items: req.body.items,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ message: "Cart item created", createdCart });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};

export const fetchCartItems = async (req, res) => {
  const customerId = req.params.customerId;
  try {
    const cart = await Cart.findOne({ customerId });
    if (!cart) {
      return res.status(StatusCodes.NOT_FOUND).json("Cart not found");
    }

    return res.status(StatusCodes.OK).json(cart.items);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};

export default {
  createCart,
  updateCartProductQuantity,
  deleteCart,
  deleteProduct,
  fetchCartItems,
};