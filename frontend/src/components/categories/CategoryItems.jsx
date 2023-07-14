import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";
export default function CategoryItems() {
  const [productItem, setProductItem] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/products/productbycategory/${id}`)
      .then((res) => {
        setProductItem(res.data);
      });
  }, []);
  console.log(productItem);
  return (
    <div>
      CategoryItems
      <div>
        {productItem.map((category, key) => (
          <div className="col" key={key}>
            <CategoryCard category={category} />
          </div>
        ))}
      </div>
    </div>
  );
}
