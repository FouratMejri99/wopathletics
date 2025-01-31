import React from "react";
import "../assets/ServiceCard.css"; // Ensure this path is correct
import ServiceCard from "./Servicescard"; // Import the ServiceCard component

const ServiceCardList = () => {
  // Define the data for each card
  const services = [
    {
      serviceType: "Standard Plan",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      price: "$10/month",
      isPremium: false,
    },
    {
      serviceType: "Pro Plan",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
      price: "$20/month",
      isPremium: false,
    },
    {
      serviceType: "Premium Plan",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
      price: "$30/month",
      isPremium: true,
    },
  ];

  return (
    <div className="service-card-list">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          serviceType={service.serviceType}
          features={service.features}
          price={service.price}
          isPremium={service.isPremium}
        />
      ))}
    </div>
  );
};

export default ServiceCardList;
