import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

const TeamMember = ({ name, role, image, description, linkedinId, githubId, resetState }) => {
  const [showDescription, setShowDescription] = useState(false);

  // Reset the description state when resetState changes
  useEffect(() => {
    if (resetState) {
      setShowDescription(false);
    }
  }, [resetState]);

  const handleDescriptionToggle = (e) => {
    e.stopPropagation();
    setShowDescription(!showDescription);
  };

  const handleSocialClick = (url, e) => {
    e.stopPropagation();
    window.open(url, "_blank");
  };

  return (
    <motion.div
      className="relative w-full h-[240px] mx-auto group overflow-visible cursor-default sm:w-[200px]"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Card Background */}
      <div className="absolute bottom-0 left-0 right-0 h-[180px]">
        <div
          className="absolute inset-0 bg-[#58FF1622] opacity-80"
          style={{
            clipPath: "polygon(0% 15%, 40% 0%, 100% 0%, 100% 85%, 60% 100%, 0% 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-[6px] bg-[#38A300]"
          style={{
            clipPath: "polygon(0% 15%, 40% 0%, 100% 0%, 100% 85%, 60% 100%, 0% 100%)",
          }}
        />
      </div>

      {/* Image */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100px] h-[100px] overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Name and Role */}
      <div
        className={`absolute bottom-10 left-4 right-4 p-2 text-center transition-all duration-300 ease-in-out 
          ${showDescription ? "opacity-0 translate-y-[-10px]" : "opacity-100"}`}
      >
        <h3 className="text-[16px] text-white font-normal tracking-wide" style={{ fontFamily: "Montserrat" }}>
          {name}
        </h3>
        <p className="text-[#FFD700] text-sm font-semibold" style={{ fontFamily: "Montserrat" }}>
          {role}
        </p>
      </div>

      {/* Description and Social Links */}
      {showDescription && (
        <div
          className="absolute bottom-10 left-3 right-3 flex flex-col items-center justify-center text-center 
            transition-all duration-300 ease-in-out"
        >
          <p className="text-[#FFD700] text-xs mb-2" style={{ fontFamily: "Montserrat" }}>
            {description}
          </p>
          <div className="flex space-x-4">
            <button onClick={(e) => handleSocialClick(linkedinId, e)} className="text-white hover:text-[#0077B5]">
              <Linkedin size={20} />
            </button>
            
          </div>
        </div>
      )}

      {/* Know Me Button */}
      <button
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 
          bg-[#38A300] text-white px-3 py-1 rounded-full text-xs"
        onClick={handleDescriptionToggle}
      >
        {showDescription ? "Back" : "Know Me"}
      </button>
    </motion.div>
  );
};

export default TeamMember;
