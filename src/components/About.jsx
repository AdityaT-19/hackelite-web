import { useState, useEffect } from "react";
import { about } from "../constants/ui";

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change content every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === about.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Handle manual selection
  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full justify-center items-center flex md:flex-col md:p-8 h-[700px]">
      <div className="flex flex-col items-center p-4 md:p-8 w-full xl:w-[80vw] justify-evenly h-full">
        <h1 className="text-purple-heading text-2xl md:text-6xl font-semibold md:px-10 py-4 md:py-6">
          About us
        </h1>
        <div className="h-[500px] xs:h-[600px]">
          {/* Display the currently selected content */}
          <div className="w-full h-full bg-opacity-[22%] relative flex items-center justify-center">
            {/* SVG with clipped background */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute h-full w-full"
            >
              <defs>
                <clipPath id="clip-path">
                  <path d="M0,0 H100 V85 L90,100 H0 Z" />
                </clipPath>
              </defs>
              <rect
                x="0"
                y="0"
                width="100"
                height="100"
                fill="rgba(88, 255, 22, 0.22)"
                clipPath="url(#clip-path)"
              />
              <path
                d="M0,0 H100 V85 L90,100 H0 Z"
                fill="none"
                stroke="#58ff16"
                strokeWidth="0.5"
              />
            </svg>
            <div className="flex flex-col md:flex-row h-full w-full px-4 py-3 gap-3">
              <div className="h-16 md:w-16 w-full md:h-full border border-stroke-green flex md:flex-col gap-4 p-2">
                <img src="/about/Vector.svg" alt="" />
                <img src="/about/Group.svg" alt="" />
                <div className="flex-1 flex justify-end items-end max-md:hidden">
                  <img src="/about/bottom.svg" alt="" />
                </div>
              </div>
              <div className="xs:w-[calc(100%-4rem)] flex flex-col md:flex-row items-center z-10">
                <img
                  src={about[currentIndex].image}
                  alt="Logo"
                  className="h-40 w-40 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-96 lg:w-96"
                />
                <div className="xs:flex-1 xs:p-4 h-full flex flex-col gap-2 xs:gap-4 justify-center">
                  <h1 className="text-white font-bold text-md xs:text-lg md:text-xl">
                    {about[currentIndex].title}
                  </h1>
                  <p className="text-white text-[12px] text-xs xs:text-sm md:text-md xl:text-lg">
                    {about[currentIndex].content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Indicators */}
        <div className="flex justify-center items-center gap-4 mt-4">
          {about.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex
                  ? "bg-purple-500"
                  : "bg-gray-400 opacity-50"
              }`}
              onClick={() => handleIndicatorClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
