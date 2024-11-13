// src/components/Card.js
import React from 'react';
import './Card.css'; // Import component-specific CSS

const Card = ({ key, title, image, search_url, content }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={image} alt="card" className="image" />
      </div>
      <div className="content-container">
        <div className="title-container mb-5 text-semibold">
          <h3>{title}</h3>
        </div>
        <p>{content}</p>
        <a href={search_url}>
        <button className="know"  >Know More</button>
        </a>
        
     
      </div>
     
    </div>
  );
};

export default Card;