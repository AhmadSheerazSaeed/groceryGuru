import React, { useEffect, useState,useContext } from 'react';
import { CartContext } from '../context/CartContext';

import axios from 'axios';
import Card from './Card';

export default function Products() {


  const [theProduct, setTheProduct] = useState([]);
  const {CartItems}   =   useContext(CartContext)
console.log("hello",CartItems); 
  useEffect(() => {
    fetchProduct();
  }, []);
  const fetchProduct = async () => {
    try {
      const allProducts = await axios.get('http://localhost:4000/api/products/allProducts');
      console.log("allProducts", allProducts)
      setTheProduct(allProducts.data);
    } catch (error) {
      console.error("error", error);
    }
  };

 

  return (
    <>
      <h1 style={{ margin: "20px auto", textAlign: "center" }}>
       All Products{" "}
      </h1>
      <div
        className="row row-cols-1 row-cols-md-3 g-4"
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          alignItems: "center",
        }}
      >
        {theProduct.map((product, key) => (
          <div className="col" key={key}>
            <Card product={product}  />
          </div>
        ))}
      </div>
    </>
  );
}
