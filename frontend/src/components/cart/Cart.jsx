import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleUpdateQuantity = (productId, quantityChange) => {
    updateQuantity(productId, quantityChange);
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.productId}>
              <span>Product ID: {item.productId}</span>
              <span>Quantity: {item.quantity}</span>
              <button onClick={() => handleRemoveFromCart(item.productId)}>
                Remove from Cart
              </button>
              <button onClick={() => handleUpdateQuantity(item.productId, 1)}>
                Increase Quantity
              </button>
              <button onClick={() => handleUpdateQuantity(item.productId, -1)}>
                Decrease Quantity
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
