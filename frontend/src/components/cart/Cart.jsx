
import React, { useState } from 'react';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };

  const handleUpdateQuantity = (product, quantity) => {
    updateQuantity(product, quantity);
  };

  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (event, item) => {
    const { value } = event.target;
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item.id]: parseInt(value, 10),
    }));
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Price: {item.price} EUR</p>
              <p>
                Quantity:
                <input
                  type="number"
                  min="1"
                  value={quantities[item.id] || item.quantity}
                  onChange={(event) => handleQuantityChange(event, item)}
                />
              </p>
              <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
              <button onClick={() => handleUpdateQuantity(item, quantities[item.id] || item.quantity)}>
                ADD +
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;

