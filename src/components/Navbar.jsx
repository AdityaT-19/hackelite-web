import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLink1, navLink2 } from "../constants/ui";

function Navbar() {
  // State to manage the visibility of the mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Smooth scrolling function
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false); // Close the menu after navigation
    }
  };

  return (
    <nav id="nav" className="h-18 md:h-14 flex justify-between sticky top-0 z-50">
      <div className="w-[40%] bg-primary-green bg-opacity-[22%] h-full clip-left hidden md:flex">
        <ul className="flex text-white items-center justify-evenly w-full text-lg max-lg:text-sm pr-[60px] font-semibold">
          {navLink1.map((link, index) => (
            <li
              key={index}
              className="cursor-pointer"
              onClick={() => handleScroll(link.name.toLowerCase())}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-[40%] bg-primary-green bg-opacity-[22%] h-full clip-right rotate-180 hidden md:flex backdrop-blur-lg">
        <ul className="flex text-white items-center justify-evenly w-full rotate-180 text-lg pl-[60px] max-xl:text-sm font-semibold">
          {navLink2.map((link, index) => (
            <li
              key={index}
              className="cursor-pointer"
              onClick={() => handleScroll(link.name.toLowerCase())}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="md:hidden flex justify-between w-full items-center">
        <img src="/logo.png" alt="logo" className="h-16 w-16 m-2" />
        {!menuOpen && (
          <button
            onClick={toggleMenu}
            className="text-primary-green text-3xl p-4 focus:outline-none"
          >
            <FiMenu />
          </button>
        )}
      </div>

      {menuOpen && (
        <div
          className="absolute right-4 top-4 w-[70vw] h-fit bg-[#181817] bg-opacity-22 text-white rounded-lg p-4 md:hidden flex flex-col items-center transition-all duration-300 ease-in-out z-10 border border-opacity-60 border-purple-heading"
          style={{
            transform: menuOpen ? "scale(1)" : "scale(0.95)",
            opacity: menuOpen ? "1" : "0",
          }}
        >
          <button
            className="ml-auto text-2xl text-primary-green pb-2 focus:outline-none"
            onClick={toggleMenu}
          >
            <FiX />
          </button>
          <ul className="w-full flex flex-col items-center gap-4 text-lg max-xl:text-sm font-semibold pb-4">
            {navLink1.concat(navLink2).map((link, index) => (
              <li
                key={index}
                className="cursor-pointer hover:underline"
                onClick={() => handleScroll(link.name.toLowerCase())}
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
