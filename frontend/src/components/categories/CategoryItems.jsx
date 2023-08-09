import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import "./cat.css";
import { CartContext } from "../context/CartContext";
import CategoryItemCard from "./CategoryItemCard";
export default function CategoryItems() {
  const { addToCart } = useContext(CartContext);
  const [productItem, setProductItem] = useState([]);
  const { id } = useParams();
  const btnText = true;
  console.log(id);
  useEffect(() => {
    axios.get(`/api/products/productbycategory/${id}`).then((res) => {
      setProductItem(res.data);
    });
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    console.log("hello", product);
  };
  console.log(productItem);
  return (
    <div className="main-cat">
      CategoryItems
      <div className="cat-card">
        {productItem.map((product, key) => (
          <div className="col first" key={key}>
            <CategoryItemCard
              handleAddToCart={handleAddToCart}
              product={product}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
