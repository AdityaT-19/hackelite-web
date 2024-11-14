// src/App.js
import React, { useEffect, useState } from 'react';
import '../App.css';
import data from '../assets/content.json';
import Card from './card';

const About = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(data);
  }, []);

  return (
    <>
    <div className="app-container">
      <h1 className="About_us text-semibold">About Us</h1>
      {cards.map((card) => (
        <Card
          key={card.id}           
          title={card.title}       
          image={card.image}      
          content={card.content} 
          search_url={card.search_url}  // Use `card.content`
        />
      ))}
        
    </div>
  
    </>
  );
};

export default About;
