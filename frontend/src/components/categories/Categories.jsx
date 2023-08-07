import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryCard from "./CategoryCard";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchCategories();
  }, []);
  const fetchCategories = async () => {
    try {
      const allCategories = await axios.get("/api/category/allcategories");
      console.log("allcategories", allCategories);
      setCategories(allCategories.data);
    } catch (error) {
      console.error("error", error);
    }
  };
  return (
    <>
      <h2>Categories </h2>
      <div
        className="row row-cols-1 row-cols-md-4 g-4"
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          alignItems: "center",
         
        }}
      >
        {categories.map((category, key) => (
          <div className="col" key={key}>
            <CategoryCard category={category} />
          </div>
        ))}
      </div>
    </>
  );
};
export default Categories;
