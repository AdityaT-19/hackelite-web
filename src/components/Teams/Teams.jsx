import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import teamData from "../../assets/teamData.json";
import TeamMember from "./TeamMember";

function Teams() {
  const [activeTab, setActiveTab] = useState("Organizer"); // Default to "Organizer"

  const tabs = ["Organizer", "Web", "Design", "Sponsorship", "Management", "Outreach"];

  const sliderSettings = {
    dots: false, // Disable dots for a cleaner look
    infinite: true, // Enable infinite scrolling
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay interval
    pauseOnHover: true, // Pause autoplay on hover
    cssEase: "linear", // Smooth scrolling
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
          cssEase: "linear",
        },
      },
    ],
  };

  return (
    <div id="teams" className="text-white py-16">
      <div className="container mx-auto px-6 relative">
        {/* Grid Background */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                              linear-gradient(to top, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                              linear-gradient(to left, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: "90px 90px",
            zIndex: -1,
          }}
        />
        <div className="mb-6 sm:mb-8 relative">
          <h2 className="inline-block bg-[#1a4d1a] px-4 sm:px-6 py-2 text-xl sm:text-2xl font-bold text-[#afafaf]">
            Teams
          </h2>
          <div className="mt-1 h-0.5 w-full bg-[#1a4d1a]" />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 mx-2 text-lg font-semibold border-b-2 ${
                activeTab === tab
                  ? "border-green-400 text-green-400"
                  : "border-transparent text-gray-400"
              } hover:text-green-400 transition`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Slider */}
        <div className="ml-2 md:ml-12">
          {teamData[activeTab] ? (
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
          ) : (
            <p className="text-center text-gray-400">No members available for this tab.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Teams;
