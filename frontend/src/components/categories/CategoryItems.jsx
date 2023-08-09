import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import "./cat.css";
export default function CategoryItems() {
  const [productItem, setProductItem] = useState([]);
  const { id } = useParams();
  const btnText = true;
  console.log(id);
  useEffect(() => {
    axios.get(`/api/products/productbycategory/${id}`).then((res) => {
      setProductItem(res.data);
    });
  }, []);
  console.log(productItem);
  return (
    <div className="main-cat">
      CategoryItems
      <div className="cat-card">
        {productItem.map((category, key) => (
          <div className="col first" key={key}>
            <CategoryCard category={category} btnText={btnText}/>
          </div>
        ))}
      </div>
    </div>
  );
}
