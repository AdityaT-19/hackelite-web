// src/components/Card.js
import React, { forwardRef } from 'react';
import './Card.css'; // Import component-specific CSS

const Card = forwardRef(({ title, image, search_url, content }, ref) => {
  return (
    <div className="card-container" ref={ref}>
      <div className="image-container">
        <img src={image} alt="card" className="image" />
      </div>
      <div className="content-container">
        <div className="title-container mb-5 text-semibold">
          <h3>{title}</h3>
        </div>
        <p>{content}</p>
        <a href={search_url}>
          <button className="know p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
              Know More
            </div>
          </button>
        </a>
      </div>
    </div>
  );
});

export default Card;
