import { useState, useEffect } from "react";
import teamData from "../../assets/teamData.json";
import TeamMember from "./TeamMember";

function Teams() {
  const [activeTab, setActiveTab] = useState("Technical Core");
  const [resetState, setResetState] = useState(false);
  const [members, setMembers] = useState(teamData[activeTab]); // New state for members
  const tabs = [
    "Technical Core",
    "Publicity Core",
    "Organizational Core",
    "Web Team",
    "Faculty Coordinator",
  ];

  // Update members state when activeTab changes
  useEffect(() => {
    setResetState(true); // Trigger reset
    setTimeout(() => setResetState(false), 0); // Reset back
    setMembers(teamData[activeTab] || []); // Update members
  }, [activeTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div id="team" className="text-white py-16">
      <div className="container mx-auto px-4 relative">
        {/* Background Pattern */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                              linear-gradient(to top, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: "90px 90px",
            zIndex: -1,
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
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* First Row: 2 cards */}
          {members.slice(0, 2).map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              linkedinId={member.linkedinId}
              description={member.description}
              resetState={resetState}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {/* Remaining Rows: 3 cards per row */}
          {members
            .slice(2)
            .map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                linkedinId={member.linkedinId}
                description={member.description}
                resetState={resetState}
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
