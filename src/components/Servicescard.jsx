import React from "react";
import "../assets/ServiceCard.css"; // Ensure this path is correct

const ServiceCard = ({ serviceType, features, price, isPremium }) => {
  return (
    <div className={`service-card ${isPremium ? "premium" : "standard"}`}>
      <div className="service-header">
        <h2>{serviceType}</h2>
        {isPremium && <span className="premium-badge">Premium</span>}
      </div>
      <ul className="service-features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <div className="service-price">
        <p>{price}</p>
      </div>
      <button className="service-button">
        {isPremium ? "Get Premium" : "Get Standard"}
      </button>
    </div>
  );
};

export default ServiceCard;
