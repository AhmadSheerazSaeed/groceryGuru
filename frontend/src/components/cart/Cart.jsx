import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleUpdateQuantity = (productId, quantityChange) => {
    updateQuantity(productId, quantityChange);
  };
  console.log(cartItems);
  return (
    <>
    <div className="main">
      <h2>Your Cart</h2>
      {cartItems == null || cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li className="cart-list" key={item._id}>
              <span> {item.itemName} Quantity: {item.quantity} 
              
              </span>
              <img src={item.imageUrl} alt="" />
              <div className="sub-main">
              <div className="price">  {item.purchasePrice.toFixed(2)} 
              </div>
              
              
              
              <button
                className="delete"
                onClick={() => handleRemoveFromCart(item._id)}
              >
                Delete Cart
              </button>
              <button
                className="add"
                onClick={() => handleUpdateQuantity(item._id, 1)}
              >
                ADD +
              </button>
              <button
                className="remove"
                onClick={() => handleUpdateQuantity(item._id, -1)}
              >
                remove -
              </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <button> Checkout

      </button>

    </div>
    </>
  );
};

export default Cart;
