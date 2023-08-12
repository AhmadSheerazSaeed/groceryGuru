import React, { useState, useEffect } from "react";
import "./Review.css";
import axios from "axios";

export const Review = ({ product, onUpdateReviews }) => {
  const [activeStars, setActiveStars] = useState(0);

  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    calculateAverageRating(product);
  }, [product]);

  const calculateAverageRating = (product) => {
    const reviews = product.reviews;
    if (reviews.length === 0) {
      setAverageRating(0);
      return;
    }

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const avgRating = totalRating / reviews.length;
    setAverageRating(avgRating);
    setActiveStars(avgRating);
  };

  const handleStartClick = async (index) => {
    const userRating = index + 1;
    setActiveStars(userRating);
    //call the create-review endpoint
    console.log(`userRating proudct=${userRating}`);
    const reviewRequest = {
      customerId: "6491a18065840b8a895c5076", //get custumer id from context later and dont show rating for non custumer(guest)
      productId: product._id,
      rating: userRating,
    };
    try {
      console.log("revie req", index);
      const reviewResponse = await axios.post(
        "/api/reviews/newreview",
        reviewRequest
      );
      console.log(`review response=>${reviewResponse}`);
      // Fetch the updated product to calculate the new average rating
      const updatedProduct = await axios.get(
        `api/products/productbyid/${product._id}`
      );
      console.log(`updatedProduct=>${JSON.stringify(updatedProduct)}`);
      calculateAverageRating(updatedProduct.data);
      onUpdateReviews(updatedProduct.data);
    } catch (error) {
      console.log("Error adding review ", error);
    }
  };

  return (
    <div className="rating-box">
      <div className="star-container">
        {[...Array(5)].map((_, index) => (
          <i
            key={index}
            className={`stars${index < activeStars ? "active" : ""}`}
            onClick={() => handleStartClick(index)}
          >
            🧡
          </i>
        ))}
      </div>
    </div>
  );
};

export default Review;
