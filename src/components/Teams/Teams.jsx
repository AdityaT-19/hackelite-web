import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeamMember from './TeamMember'; 

const teamData = {
  Core: [
    {
      name: "Aditya T",
      role: "Technical Lead",
      image: "/image 1.jpg"
    },
    {
      name: "Mayank Kumar Singh",
      role: "Technical Co Lead",
      image: "/image 1.jpg"
    },
    {
      name: "Sankalp ",
      role: "Event Coordinator Lead",
      image: "/api/placeholder/240/240"
    },
    {
      name: "Aditya Shekhar",
      role: "Creative Lead",
      image: "/api/placeholder/240/240"
    }
  ],
  Technical: [
    {
      name: "Srujan",
      role: "Technical Coordinator",
      image: "/api/placeholder/240/240"
    },
    {
      name: "Kunwar Yuvraj",
      role: "Frontend Developer",
      image: "/api/placeholder/240/240"
    },
    {
      name: "Prashant Kunar Singh",
      role: "Frontend Developer",
      image: "/api/placeholder/240/240"
    },
    {
      name: "Vivek B V",
      role: "UI/UX Designer",
      image: "/api/placeholder/240/240"
    },
    {
      name: "Chandana",
      role: "UI/UX Designer",
      image: "/api/placeholder/240/240"
    },
    {
      name: "Vasudev",
      role: "Technical Coordinator",
      image: "/api/placeholder/240/240"
    }
  ],
  Creative: [
    {
      name: "Satish",
      role: "Creative Director",
      image: "/api/placeholder/240/240"
    },
    {
      name: "Shubham",
      role: "Graphic Designer",
      image: "/api/placeholder/240/240"
    },
  ],
  Sponsorship: [
    {
      name: "Snehil",
      role: "Sponsorship Head",
      image: "/api/placeholder/240/240"
    },
  ],
  Publicity: [
    {
      name: "Hrishikesh",
      role: "Publicity Manager",
      image: "/api/placeholder/240/240"
    },
  ],
  Outreach: [
    {
      name: "Ananaya G N",
      role: "Outreach Lead",
      image: "/api/placeholder/240/240"
    },
  ]
};

const AnimatedBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
    
    <div className="absolute inset-0 bg-diamond-pattern opacity-10" />
    
    <div className="absolute inset-0">
      {[...Array(6)].map((_, i) => (
        <div
          key={`v-${i}`}
          className="absolute h-full w-px bg-gradient-to-b from-transparent via-green-500/20 to-transparent animate-pulse"
          style={{
            left: `${(i + 1) * (100 / 7)}%`,
            animationDelay: `${i * 0.5}s`
          }}
        />
      ))}
    </div>
    
    <div className="absolute inset-0">
      {[...Array(6)].map((_, i) => (
        <div
          key={`h-${i}`}
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent animate-pulse"
          style={{
            top: `${(i + 1) * (100 / 7)}%`,
            animationDelay: `${i * 0.5}s`
          }}
        />
      ))}
    </div>
  </div>
);

const Teams = () => {
  const [activeTab, setActiveTab] = useState('Core');
  const tabs = ['Core', 'Technical', 'Creative', 'Sponsorship', 'Publicity', 'Outreach'];


  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10 p-12">
        <div className="mb-6 sm:mb-8 relative">
          <div
            className="inline-block px-6 sm:px-8 py-4 text-xl sm:text-2xl font-semibold text-[#9f6bff] bg-[#1a4d1a] relative"
            style={{
              clipPath: 'polygon(0% 0%, 90% 0%, 100% 100%, 00% 100%)',
              zIndex: 0,
            }}
          >
            Our Team
          </div>
          <div
            className="mt-2 h-1 w-full bg-[#1a4d1a]"
            style={{
              clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)',
            }}
          />
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-6 mb-14">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-8 py-3 text-[24px] font-${activeTab === tab ? 'bold' : 'normal'} transition-all duration-300 ${
                activeTab === tab
                  ? 'text-black'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
              style={{
                fontFamily: 'Montserrat',
                fontWeight: activeTab === tab ? 'bold' : 'normal',
              }}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#58FF16] -skew-x-12"
                  initial={false}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  style={{
                    clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)',
                    zIndex: -1,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent animate-pulse" />
                </motion.div>
              )}
              {tab}
            </button>
          ))}
        </div>

        
        <div className="ml-20"> 
          <Slider {...sliderSettings}>
            {teamData[activeTab].map((member, index) => (
              <div key={index}>
                <TeamMember
                  name={member.name}
                  role={member.role}
                  image={member.image}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Teams;