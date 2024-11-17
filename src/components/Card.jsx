import React, { forwardRef } from 'react';
import './card.css'; // Import component-specific CSS

const Card = forwardRef(({ title, search_url, content }, ref) => {
  return (
    <div className="card-container scroll-animation hidden" ref={ref}>
      <div className="content-container">
        <h3 className="title-container text-semibold">{title}</h3>
        <p className="card-content">{content}</p>
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
