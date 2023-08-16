import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
/*
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems") )|| []);



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
/*
  
  const addToCart = async (productId, quantity) => {
    try {
     // await axios.post('http://localhost:4000/api/cart/createcard', { customerId: 'YOUR_CUSTOMER_ID', items: [{ productId, quantity }] });
      console.log(productId);
      const cartItem = cartItems.findIndex(c => c.productId === productId)
      if(cartItem !=-1)
      {const newCardItems = [...cartItems]
        newCardItems[cartItem].quantity+=1;
      setCartItems (newCardItems)
      }else{
        console.log(quantity);
        setCartItems((prevCartItems) => [...prevCartItems, { productId, quantity }]);
      }
      
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };
/*
 
  const removeFromCart = async (productId) => {
    try {
     // await axios.patch(`http://localhost:4000/api/cart/deleteproduct/${productId}`);
      setCartItems((prevCartItems) =>
        prevCartItems.filter((item) => item.productId !== productId)
      );
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };*/

/* 
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

export { CartContext, CartProvider };*/

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = async (product) => {
    console.log(product);
    const exist = cartItems.find((item) => item._id == product._id);
    if (exist) {
      exist.quantity++;
      setCartItems(cartItems);
    } else {
      product.quantity = 1;
      setCartItems([...cartItems, product]);
    }
    /*  try {
      const cartItemIndex = cartItems.findIndex(c => c.productId === productId);

      if (cartItemIndex !== -1) {
        const newCartItems = [...cartItems];
        newCartItems[cartItemIndex].quantity += quantity;
        setCartItems(newCartItems);
      } else {
        setCartItems((prevCartItems) => [
          ...prevCartItems,
          {
            productId,
            quantity,
            purchasePrice,
  
            itemName,
            imageUrl,
          },
        ]);
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }*/
  };

  const removeFromCart = async (productId) => {
    try {
      setCartItems((prevCartItems) =>
        prevCartItems.filter((item) => item._id !== productId)
      );
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const updateQuantity = async (productId, quantityChange) => {
    /* try {
   setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item._id === productId
            ? { ...item, quantity: item.quantity + quantityChange }
            : item
        )
        
      );
     
    }*/
    try {
      const itemToEdit = cartItems.filter((item) => {
        if (item._id === productId) {
          if (quantityChange === 1) {
            return { ...item, quantity: item.quantity++ };
          }

          if (quantityChange === -1 && item.quantity > 1) {
            return { ...item, quantity: item.quantity-- };
          } else {
            return item;
          }
        }
      });

      const itemsWithoutItemToEdit = cartItems.filter((item) => {
        return item._id !== productId;
      });

      const updatedCart = [...itemToEdit, ...itemsWithoutItemToEdit];
      setCartItems(updatedCart);
    } catch (error) {
      console.error("Error updating item quantity:", error);
    }
  };

  // Calculate the total price for a cart item based on quantity, price, and VAT
  const calculateTotalPrice = (quantity, purchasePrice) => {
    const totalPrice = quantity * purchasePrice;
    return parseFloat(totalPrice.toFixed(2)); // Round to 2 decimal places
  };

  // Calculate the total price for the entire cart
  const calculateCartTotalPrice = () => {
    let total = 0;
    for (const item of cartItems) {
      total += calculateTotalPrice(item.quantity, item.purchasePrice);
    }
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        calculateTotalPrice,
        calculateCartTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
