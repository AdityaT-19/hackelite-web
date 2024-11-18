import { useState } from "react";
import teamData from "../../assets/teamData.json";
import TeamMember from "./TeamMember";

function Teams() {
  const [activeTab, setActiveTab] = useState("Organizer");
  const tabs = ["Organizer", "Web", "Design", "Sponsorship", "Management", "Outreach"];

  return (
    <div id="teams" className="text-white py-16">
      <div className="container mx-auto px-4 relative">
        {/* Background Pattern */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                              linear-gradient(to top, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: "90px 90px",
            zIndex: -1
          }}
        />

        {/* Section Header */}
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

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* First Row: 2 cards */}
          {teamData[activeTab]?.slice(0, 2).map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              linkedinId={member.linkedinId}
              description={member.description}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {/* Remaining Rows: 3 cards per row */}
          {teamData[activeTab]?.slice(2).map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              linkedinId={member.linkedinId}
              description={member.description}
            />
          )) || (
            <p className="text-center text-gray-400 col-span-full">
              No members available for this tab.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Teams;
