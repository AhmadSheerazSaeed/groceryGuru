import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity,calculateCartTotalPrice } = useContext(CartContext);

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
          {cartItems.sort((a, b) => a.itemName.localeCompare(b.itemName)).map((item) => (
            <li className="cart-list" key={item._id}>
              <span> {item.itemName} Quantity: {item.quantity} 
              
              </span>
              <img src={item.imageUrl} alt="" />
              <div className="sub-main">
              <div className="price">  {item.purchasePrice.toFixed(2)} 
              </div>
              
              
              
              <button
                className="btn1"
                onClick={() => handleRemoveFromCart(item._id)}
              >
                Delete all
              </button>
              <button
                className="btn1 plusminus"
                onClick={() => handleUpdateQuantity(item._id, 1)}
              >
                 +
              </button>
              <button
                className="btn1 plusminus"
                onClick={() => handleUpdateQuantity(item._id, -1)}
              >
                 -
              </button>
              <div>
                 Price:{(item.quantity * item.purchasePrice).toFixed(2)}€
              </div>
              </div>
            </li>
          ))}
          <div className="grand"> Grand Total
            :        {calculateCartTotalPrice().toFixed(2)}€
          </div>
        </ul>
      )}
      <div className="checkout-container">
      <button className="checkout"> Checkout

      </button>
      </div>
    </div>
    </>
  );
};

export default Cart;
