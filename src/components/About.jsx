import React, { useEffect, useRef, useState } from 'react';
import '../App.css';
import data from '../assets/content.json'; // Assuming this contains the data for cards
import Card from './Card'; // Importing Card component

const About = () => {
  const [cards, setCards] = useState([]);
  const cardsRef = useRef([]); // Ref to track card elements

  useEffect(() => {
    setCards(data); // Set the card data

    // Create the IntersectionObserver for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in'); // Add animation class when visible
            entry.target.classList.remove('animate-out'); // Remove out-of-view class
          } else {
            entry.target.classList.add('animate-out'); // Add out-of-view class
            entry.target.classList.remove('animate-in'); // Remove animation class
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the card is visible
    );

    // Observe each card
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect(); // Clean up observer on component unmount
  }, [cards]);

  return (
    <>
      <h1 className="About_us text-semibold">About Us</h1>
      <div id="about" className="app-container gap-5">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            ref={(el) => (cardsRef.current[index] = el)} // Attach refs to cards
            title={card.title}
            content={card.content}
            search_url={card.search_url}
          />
        ))}
      </div>
    </>
  );
};

export default About;
