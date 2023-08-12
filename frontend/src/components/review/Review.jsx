import React, { useState, useEffect, useContext } from "react";
import "./Review.css";
import axios from "axios";
import { CustomerContext } from "../context/CustomerContext";

export const Review = ({ product, onUpdateReviews }) => {
  const [activeStars, setActiveStars] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const { customerId } = useContext(CustomerContext);

  // Calculate the average rating whenever the product rating changes
  useEffect(() => {
    calculateAverageRating(product);
  }, [product]);

  const calculateAverageRating = (product) => {
    const reviews = product.reviews;

    if (reviews.length === 0) {
      setAverageRating(0);
      return;
    }

    // Calculate the total rating by summing up all review ratings
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const avgRating = totalRating / reviews.length;

    // Update the state with the calculated average rating
    setAverageRating(avgRating);
    setActiveStars(avgRating);
  };

  /**
   * Function to handle the review of a product when a star is clicked
   * @param {*} index
   */
  const handleProductReview = async (index) => {
    // Only allow reviews if a customer is logged in
    if (customerId) {
      const userRating = index + 1;
      setActiveStars(userRating);
      
      const reviewRequest = {
        customerId: customerId,
        productId: product._id,
        rating: userRating,
      };

      try {
        // Send the review data to the server
        const reviewResponse = await axios.post(
          "/api/reviews/newreview",
          reviewRequest
        );

        // Fetch the updated product to calculate the new average rating
        const updatedProduct = await axios.get(
          `api/products/productbyid/${product._id}`
        );

        // Recalculate the average rating with the updated product data
        calculateAverageRating(updatedProduct.data);

        // Update the parent component with the updated product data after customer rating
        onUpdateReviews(updatedProduct.data);
      } catch (error) {
        console.log("Error adding review ", error);
      }
    }
  };

  return (
    <div className="rating-box">
      <div className="star-container">
        {[...Array(5)].map((_, index) => (
          <i
            key={index}
            className={`stars${index < activeStars ? "active" : ""}`}
            onClick={() => handleProductReview(index)}
          >
            🧡
          </i>
        ))}
      </div>
    </div>
  );
};

export default Review;
