<<<<<<< HEAD
// src/About.jsx
import React, { useEffect, useRef, useState } from 'react';
import '../App.css';
import data from '../assets/content.json'; // Assuming this contains the data for cards
import Card from './card'; // Importing Card component

const About = () => {
  const [cards, setCards] = useState([]);
  const cardsRef = useRef([]);  // Ref to track card elements

  useEffect(() => {
    setCards(data);  // Set the card data

    // Create the IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry.isIntersecting);  // Debug: log visibility status
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');  // Add 'visible' when card is in view
            entry.target.classList.remove('hidden');  // Remove 'hidden'
          } else {
            entry.target.classList.add('hidden');  // Add 'hidden' when card is out of view
            entry.target.classList.remove('visible');  // Remove 'visible'
          }
        });
      },
      { threshold: 0.2 }  // Trigger when 20% of the card is visible
=======
function About() {
    return (
       <div id='about'>
        <h1>This is about section</h1>
       </div>
>>>>>>> dev
    );

    // Observe each card
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();  // Clean up observer on component unmount
  }, [cards]);

  return (
    <div className="app-container gap-5">
      <h1 className="About_us text-semibold">About Us</h1>
      {cards.map((card, index) => (
        <Card
          key={card.id}
          ref={(el) => (cardsRef.current[index] = el)}  // Attach refs to cards
          title={card.title}
          image={card.image}
          content={card.content}
          search_url={card.search_url}
        />
      ))}
    </div>
  );
};

export default About;
