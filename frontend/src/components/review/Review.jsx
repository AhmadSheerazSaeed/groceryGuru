import React, { useState, useEffect } from "react";
import "./Review.css";
import axios from "axios";

export const Review = ({ product }) => {
  const [activeStars, setActiveStars] = useState(0);

  const [averageRating, setAverageRating] = useState(0);


  useEffect(() => {
    calculateAverageRating();
  }, [product]);

  const calculateAverageRating = () => {
    const reviews = product.reviews;
    if (reviews.length === 0) {
      setAverageRating(0);
      return;
    }

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const avgRating = totalRating / reviews.length;
    setAverageRating(avgRating);
  };

  const handleStartClick = async (index) => {
    setActiveStars(index + 1);
    //call the create-review endpoint
    console.log(`reviewd proudct=${ product._id}`)
    const reviewRequest = {
      customerId: "6491a18065840b8a895c5076",//get custumer id from context later and dont show rating for non custumer(guest)
      productId: product._id,
      rating: index+1,
    };
    try {
      console.log("revie req",index)
      const reviewResponse = await axios.post('/api/reviews/newreview', reviewRequest)
      console.log(`review response=>${reviewResponse}`)
    } catch (error) {
      console.log("Error adding review ", error)
    }
  };

  return (
    <div className="rating-box">
      <div className="star-container">
        {[...Array(5)].map((_, index) => (
          <i
            key={index}
            className={`stars${index < averageRating ? "active" : ""}`}
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
