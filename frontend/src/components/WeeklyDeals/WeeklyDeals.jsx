import { productData } from "../../../productData.js";
import Card from "./Card/Card.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
export default function WeeklyDeals() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    fetchWeeklyDeals();
  }, []);
  const fetchWeeklyDeals = async () => {
    try {
      
      const allProducts = await axios.get('http://localhost:4000/api/products/allProducts');
      console.log("allProducts", allProducts)
      const filteredProducts = allProducts.data.filter(product => product.salePrice !== 0);
         setDeals(filteredProducts);
      
      
    } catch (error) {
      console.error("error", error);
    }
  };
  return (
    <>
      <h1 style={{ margin: "20px auto", textAlign: "center" }}>
        Weekly Deals{" "}
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
        {deals.map((product, key) => (
          <div className="col" key={key}>
            <Card product={product} />
          </div>
        ))}
      </div>
    </>
  );
}
