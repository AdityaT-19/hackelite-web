import { motion } from "framer-motion";

const TeamMember = ({ name, role, image, description, linkedinId }) => {
  return (
    <motion.div
      className="relative w-full h-[240px] mx-auto group overflow-visible cursor-pointer sm:w-[200px]"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      onClick={() => window.open(linkedinId, "_blank")} // Redirect to LinkedIn profile
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
        className="absolute bottom-10 left-4 right-4 p-2 text-center transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:translate-y-[-10px]"
      >
        <h3
          className="text-[16px] text-white font-normal tracking-wide"
          style={{
            fontFamily: "Montserrat",
            whiteSpace: "wrap", // Force name in one line
            overflow: "visible", // Allow overflow
            textOverflow: "unset", // Don't truncate
          }}
        >
          {name}
        </h3>
        <p
          className="text-[#FFD700] text-sm font-semibold"
          style={{
            fontFamily: "Montserrat",
          }}
        >
          {role}
        </p>
      </div>

      {/* Description on Hover */}
      <div
        className="absolute bottom-10 left-3 right-3 hidden group-hover:flex flex-col items-center justify-center text-center transition-all duration-300 ease-in-out"
      >
        <p
          className="text-[#FFD700] text-xs"
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
