import { productData } from "../../../productData.js";
import Card from "./Card/Card.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import weeklyDealstyle from "./weeklyDeals.module.css";

export default function WeeklyDeals() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    fetchWeeklyDeals();
  }, []);
  const fetchWeeklyDeals = async () => {
    try {
      const allProducts = await axios.get("/api/products/allProducts");
      // console.log("allProducts", allProducts);
      const filteredProducts = allProducts.data.filter(
        (product) => product.salePrice !== 0
      );
      setDeals(filteredProducts);
    } catch (error) {
      console.error("error", error);
    }
  };
  return (
    <div>
      <h1 className={weeklyDealstyle.H1}>Weekly Deals</h1>

      <div className={weeklyDealstyle.cardWrapper}>
        {deals.map((product, key) => (
          <div key={key} className={weeklyDealstyle.cardParentContainer}>
            <Card product={product} className={weeklyDealstyle.cardComponent} />
          </div>
        ))}
      </div>
    </div>
  );
}
