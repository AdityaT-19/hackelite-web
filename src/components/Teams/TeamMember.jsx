import { motion } from "framer-motion";

const TeamMember = ({ name, role, image, description, linkedin }) => {
  return (
    <motion.div
      className="relative w-full h-[450px] mx-auto group overflow-visible cursor-pointer md:w-[300px] lg:w-[350px]"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      onClick={() => window.open(linkedin, "_blank")} // Redirects to LinkedIn profile
    >
      {/* Card Background */}
      <div className="absolute bottom-0 left-0 right-0 h-[320px]">
        <div
          className="absolute inset-0 bg-[#58FF1622] opacity-80"
          style={{
            clipPath: "polygon(0% 15%, 40% 0%, 100% 0%, 100% 85%, 60% 100%, 0% 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-[10px] bg-[#38A300]"
          style={{
            clipPath: "polygon(0% 15%, 40% 0%, 100% 0%, 100% 85%, 60% 100%, 0% 100%)",
          }}
        />
      </div>

      {/* Image */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[240px] h-[240px] overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Name and Role */}
      <div
        className="absolute bottom-12 left-8 right-8 p-4 text-center transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-[-10px]"
      >
        <h3
          className="text-[32px] text-white font-normal tracking-wide"
          style={{
            fontFamily: "Montserrat",
            whiteSpace: "nowrap", // Force name in one line
            overflow: "visible", // Allow overflow
            textOverflow: "unset", // Don't truncate
          }}
        >
          {name}
        </h3>
        <p
          className="text-[#FFD700] text-2xl font-semibold"
          style={{
            fontFamily: "Montserrat",
          }}
        >
          {role}
        </p>
      </div>

      {/* Description on Hover */}
      <div
        className="absolute bottom-8 left-4 right-4 hidden group-hover:flex flex-col items-center justify-center text-center p-2"
        style={{
          transition: "all 0.3s ease-in-out",
        }}
      >
        <p
          className="text-[#FFD700] text-xl"
          style={{
            fontFamily: "Montserrat",
          }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default TeamMember;
