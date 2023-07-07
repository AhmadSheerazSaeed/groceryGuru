import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = ({ selectedCategory, addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    if (selectedCategory) {
      axios.get(`/api/products?categoryId=${selectedCategory}`)
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
        });
    }
  }, [selectedCategory]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: {product.price} EUR</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
