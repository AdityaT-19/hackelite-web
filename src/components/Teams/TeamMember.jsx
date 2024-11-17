import { motion } from 'framer-motion';

const TeamMember = ({ name, role, image }) => {
  return (
    <motion.div
      className="relative w-[320px] h-[400px] mb-16 mx-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Main card with polygon shape */}
      <div className="absolute bottom-0 left-0 right-0 h-[320px]">
        <div
          className="absolute inset-0 bg-[#58FF1622] opacity-80"
          style={{
            clipPath: 'polygon(0% 15%, 40% 0%, 100% 0%, 100% 85%, 60% 100%, 0% 100%)', // Polygon shape
          }}
        />
        {/* Slanted Bottom Border Trying */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[10px] bg-[#38A300]"  // Apply bottom border
          style={{
            clipPath: 'polygon(0% 15%, 40% 0%, 100% 0%, 100% 85%, 60% 100%, 0% 100%)', // Make it slanted along the same line as the card
          }}
        />
      </div>
      <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[240px] h-[240px] overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>


      <div className="absolute bottom-12 left-8 right-8 p-4">
        <h3
          className="text-[32px] text-white mb-2 font-normal tracking-wide whitespace-nowrap overflow-visible"
          style={{ fontFamily: 'Montserrat', whiteSpace: 'nowrap' }}
        >
          {name}
        </h3>
        <p
          className="text-[#FFD700] text-2xl font-semibold whitespace-nowrap"
          style={{ fontFamily: 'Montserrat' }}
        >
          {role}
        </p>
      </div>
    </motion.div>
  );
};

export default TeamMember;