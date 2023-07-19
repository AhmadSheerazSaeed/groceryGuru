import React, { useState } from "react";
import "./Review.css";

export const Review = () => {
  const [activeStars, setActiveStars] = useState(0);

  const handleStartClick = (index) => {
    setActiveStars(index + 1);
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
