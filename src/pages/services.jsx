import React from "react";
import ServiceCard from "../components/Servicescard";

const Services = () => {
  const standardFeatures = [
    "Feature 1",
    "Feature 2",
    "Feature 3",
    "Feature 4 (Premium Only)",
    "Feature 5 (Premium Only)",
  ];

  const premiumFeatures = [
    "Feature 1",
    "Feature 2",
    "Feature 3",
    "Feature 4 (Premium Only)",
    "Feature 5 (Premium Only)",
  ];

  return (
    <div>
      <ServiceCard
        serviceType="Standard Service"
        features={standardFeatures}
        price="$10/month"
        isPremium={true}
      />
      <ServiceCard
        serviceType="Premium Service"
        features={premiumFeatures}
        price="$30/month"
        isPremium={true}
      />
    </div>
  );
};

export default Services;
