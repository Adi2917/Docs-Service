import React from "react";
import "./ServiceIntro.css";

const ServiceIntro = ({ img, title, whatsappNumber }) => {
  const handleClick = () => {
    const message = `I want service of ${title}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    
    <div className="service-card">
      <img src={img} alt={title} className="service-img" />
      <h3 className="service-title">{title}</h3>
      <button className="service-btn" onClick={handleClick}>
        Get Service
      </button>
    </div>
  );
};

export default ServiceIntro;
