import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(localStorage.getItem("cartItems") || []);



  useEffect(()=>{
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  },[cartItems])
 
  /*useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/cart/fetchcartitems");
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };
    fetchCartItems();
  }, []);*/

  
  const addToCart = async (productId, quantity) => {
    try {
     // await axios.post('http://localhost:4000/api/cart/createcard', { customerId: 'YOUR_CUSTOMER_ID', items: [{ productId, quantity }] });
      
      setCartItems((prevCartItems) => [...prevCartItems, { productId, quantity }]);
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

 
  const removeFromCart = async (productId) => {
    try {
     // await axios.patch(`http://localhost:4000/api/cart/deleteproduct/${productId}`);
      setCartItems((prevCartItems) =>
        prevCartItems.filter((item) => item.productId !== productId)
      );
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

 
  const updateQuantity = async (productId, quantityChange) => {
    try {
   //   await axios.patch(`http://localhost:4000/api/cart/editproductquantity/productid/${productId}/productquantity/${quantityChange}/cartid/YOUR_CART_ID`);
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity + quantityChange } : item
        )
      );
    } catch (error) {
      console.error('Error updating item quantity:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
