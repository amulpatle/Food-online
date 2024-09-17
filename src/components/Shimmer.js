import React from "react";

// Constants for the number of shimmer cards to display
const shimmerCardCount = 15;

// Shimmer card to display with animation
const CardShimmer = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img shimmer-animate"></div>
      <div className="shimmer-title shimmer-animate"></div>
      <div className="shimmer-tags shimmer-animate"></div>
      <div className="shimmer-details shimmer-animate"></div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {new Array(shimmerCardCount).fill(0).map((_, index) => (
        <CardShimmer key={index} />
      ))}
    </div>
  );
};

export default Shimmer;
