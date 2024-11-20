import { useEffect, useRef } from "react";
import "./Timeline.css";
import timelineElements from "./timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  // // const particlesRef = useRef([]);
  const observer = useRef(null);
  const timelineRef = useRef(null); // Reference for VerticalTimeline

  const workIconStyles = { background: "#fff", color: "#fff" };
  const schoolIconStyles = { background: "#fff", color: "#fff" };

  // Particle creation and animation effect
  // useEffect(() => {
  //   const timelineContainer = document.querySelector(".vertical-timeline");
  //   if (!timelineContainer) return;

  //   const particleContainer = document.createElement("div");
  //   particleContainer.className = "particles-container";
  //   particleContainer.style.cssText = `position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1;`;;
  //   timelineContainer.appendChild(particleContainer);

  //   const numParticles = 250; // Increased number of particles
  //   const baseSpeed = 0.2; // Fixed speed for particle movement

  //   // Create particles
  //   for (let i = 0; i < numParticles; i++) {
  //     const particle = document.createElement("div");
  //     particle.className = "particle";
  //     particle.style.cssText = `position: absolute; background-color: rgba(239, 236, 243, 0.7); border-radius: 50%; pointer-events: none; transition: background-color 0.35s ease, transform 0.3s ease;`;

  //     const size = Math.random() * 4 + 4; // Random size between 3 and 6px
  //     particle.style.width = `${size}px`;
  //     particle.style.height = `${size}px`;

  //     // Set initial positions
  //     const x = Math.random() * 100;
  //     const y = Math.random() * 100;
  //     particle.style.left = `${x}%`;
  //     particle.style.top = `${y}%`;

  //     particleContainer.appendChild(particle);

  //     particlesRef.current.push({
  //       element: particle,
  //       x,
  //       y,
  //       speedX: (Math.random() - 0.5) * baseSpeed,
  //       speedY: (Math.random() - 0.5) * baseSpeed,
  //     });
  //   }

  //   // Animation loop with fixed speed
  //   let lastTime = 0;
  //   const animate = (timestamp) => {
  //     if (!lastTime) lastTime = timestamp;
  //     const delta = timestamp - lastTime;
  //     lastTime = timestamp;

  //     particlesRef.current.forEach((particle) => {
  //       particle.x += particle.speedX; // Fixed speed
  //       particle.y += particle.speedY; // Fixed speed

  //       // Wrap around edges
  //       if (particle.x > 100) particle.x = 0;
  //       if (particle.x < 0) particle.x = 100;
  //       if (particle.y > 100) particle.y = 0;
  //       if (particle.y < 0) particle.y = 100;

  //       // Apply position
  //       particle.element.style.left = `${particle.x}%`;
  //       particle.element.style.top = `${particle.y}%`;

  //       // Mouse proximity effect
  //       const rect = particle.element.getBoundingClientRect();
  //       const particleX = rect.left + rect.width / 2;
  //       const particleY = rect.top + rect.height / 2;
  //       const distance = Math.hypot(window.innerWidth / 2 - particleX, window.innerHeight / 2 - particleY);

  //       if (distance < 150) {
  //         particle.element.style.backgroundColor = "#58FF16"; // Green when close to mouse
  //         particle.element.style.transform = "scale(3.5)"; // Slightly larger when close
  //       } else {
  //         particle.element.style.backgroundColor = "#B880FF"; // Default color
  //         particle.element.style.transform = "scale(1)"; // Normal size
  //       }
  //     });

  //     requestAnimationFrame(animate);
  //   };

  //   requestAnimationFrame(animate);

  //   return () => {
  //     if (particleContainer && timelineContainer) {
  //       timelineContainer.removeChild(particleContainer);
  //     }
  //     particlesRef.current = [];
  //   };
  // }, []); // Empty dependency array so this effect runs only once

  // Intersection observer logic to trigger animation every time the element comes into view
  useEffect(() => {
    const elements = document.querySelectorAll('.vertical-timeline-element-content');
    const timelineElement = timelineRef.current;

    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('bounce-in'); // Trigger animation when in view
        } else {
          entry.target.classList.remove('bounce-in'); // Reset animation when out of view
        }
      });
    };

    // Observe VerticalTimeline as well as individual timeline elements
    observer.current = new IntersectionObserver(callback, { threshold: 0.5 });

    if (timelineElement) {
      observer.current.observe(timelineElement);
    }

    elements.forEach(element => {
      observer.current.observe(element);
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const timeline = document.querySelector('.vertical-timeline');
      if (!timeline) return;
      
      const timelineRect = timeline.getBoundingClientRect();
      const timelineStart = timelineRect.top;
      const timelineEnd = timelineRect.bottom;
      const windowHeight = window.innerHeight;
      
      // Calculate the scroll progress
      let progress;
      if (timelineStart >= windowHeight) {
        // Timeline hasn't entered viewport yet
        progress = 0;
      } else if (timelineEnd <= 0) {
        // Timeline has passed viewport completely
        progress = 100;
      } else {
        // Timeline is partially in viewport
        const totalHeight = timelineEnd - Math.min(timelineStart, windowHeight);
        const scrolledHeight = windowHeight - timelineStart;
        progress = (scrolledHeight / totalHeight) * 86;
        progress = Math.min(100, Math.max(0, progress));
      }
  
      // Update the CSS variable
      document.documentElement.style.setProperty('--scroll-progress', `${progress}%`);
    };
  
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial call to set initial state
    handleScroll();
  
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="timelineclass" id="timeline">
      <div className="title-container">
        <h1 className="title">&nbsp;TIMELINE&nbsp;</h1>
        <h1 className="hollow-text hollow-text-0">&nbsp;TIMELINE&nbsp;</h1>
        <h1 className="hollow-text hollow-text-1">&nbsp;TIMELINE&nbsp;</h1>
        <h1 className="hollow-text hollow-text-2">&nbsp;TIMELINE&nbsp;</h1>
        <h1 className="hollow-text hollow-text-3">&nbsp;TIMELINE&nbsp;</h1>
        <h1 className="hollow-text hollow-text-4">&nbsp;TIMELINE&nbsp;</h1>
      </div>
      <VerticalTimeline ref={timelineRef} className="vertical-timeline">
        {timelineElements.map((element, index) => {
          let isWorkIcon = element.icon === "work";
          return (
            <VerticalTimelineElement
              contentStyle={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 79%, 92% 100%, 0 100%, 0% 50%)", // Apply a clip-path to content
              }}
              key={element.key}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: "3rem",
                    fontFamily: "'Racing Sans One', sans-serif",
                    background: "linear-gradient(45deg, #9DFFC4, #000000)",
                    color: "transparent",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  {index + 1}
                </div>
              }
            >
              <h3
                className="vertical-timeline-element-title text-extrabold"
                style={{
                  fontSize: "24px",
                  color: "#BAE869",
                  fontWeight: "800",
                  marginBottom: ".5rem",
                }}
              >
                {element.title}
              </h3>
              <span style={{ fontSize: "22px", color: "#fff", fontWeight: "bold" }}>
                {element.description}
              </span>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;