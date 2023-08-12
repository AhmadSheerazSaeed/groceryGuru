import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryCard from "./CategoryCard";
import categoriesCss from "./categories.module.css";

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
    <div className={categoriesCss.allCategoriesWrapper}>
      <h2 className={categoriesCss.H2}>Categories </h2>
      <div className={categoriesCss.cardWrapper}>
        {categories.map((category, key) => (
          <div className={categoriesCss.cardParentContainer} key={key}>
            <CategoryCard
              category={category}
              className={categoriesCss.cardComponent}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
