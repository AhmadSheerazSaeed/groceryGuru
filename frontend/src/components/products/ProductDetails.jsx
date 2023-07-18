
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetailCard";
import ProductDetailCard from "./ProductDetailCard";

export default function ProductDetails() {
  const [productDetail, setProductDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/products/productbyid/${id}`
      );
      setProductDetail(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Product Details</h1>
      <ProductDetailCard productDetail={productDetail} />
    </div>
  );
}
