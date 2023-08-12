import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import { CartContext } from "../context/CartContext";
import CategoryItemCard from "./CategoryItemCard";
import categoryItemsCss from "./categoryItems.module.css";

export default function CategoryItems() {
  const { addToCart } = useContext(CartContext);
  const [productItem, setProductItem] = useState([]);
  const { id } = useParams();
  const btnText = true;
  // console.log(id);
  useEffect(() => {
    axios.get(`/api/products/productbycategory/${id}`).then((res) => {
      setProductItem(res.data);
    });
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    // console.log("hello", product);
  };
  // console.log(productItem);
  return (
    <div className={categoryItemsCss.heading}>
      CategoryItems
      <div className={categoryItemsCss.categoryWrapper}>
        {productItem.map((product, key) => (
          <div className={categoryItemsCss.categoryContainer} key={key}>
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
