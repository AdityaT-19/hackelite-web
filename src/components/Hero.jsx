import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import Hover3D from "./Hover3D";
import { TypewriterEffect } from "./typewriter-effect";
import { words } from "../constants/ui";

function Hero() {
  return (
    <section
      className="relative max-xl:flex flex-col items-center justify-center max-xl:gap-10 max-xl:pb-2"
      style={{ minHeight: "calc(100vh - 3.5rem)" }}
    >
      <div className="flex items-center gap-16 lg:gap-24 flex-col p-4">
        <Hover3D>
          <div className="flex items-center justify-center flex-col">
            <img
              src="/logo.png"
              alt="logo"
              className="h-64 w-64 sm:h-72 sm:w-72"
            />
            <h1 className="font-hackalite text-white text-4xl md:text-6xl lg:text-8xl gradient-text">{`<HACKALITE>`}</h1>
            <div className="flex justify-between w-full sm:w-[60vw] max-lg:flex-col p-2 gap-2 max-xl:items-center">
              <h2 className="text-white text-sm sm:text-xl font-subhackalite flex-1 flex">
                <TypewriterEffect words={words} />
              </h2>
              <p className="text-purple-heading text-xl font-bold">
                1st Dec 2024
              </p>
            </div>
          </div>
        </Hover3D>
        <button
          className="bg-[#b880df] h-16 sm:w-96 w-64 text-xl sm:text-3xl font-semibold text-white"
          style={{
            clipPath:
              "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)",
          }}
        >
          Register Now!
        </button>
      </div>
      <div
        className="border border-[#4a9d3c] absolute top-4 left-6 w-16 hidden sm:flex flex-col justify-between items-center p-2"
        style={{ height: "calc(100vh - 5.5rem)" }}
      >
        <img src="/2globe.png" alt="grpahic" className="h-18 w-15" />
        <div className="flex flex-col items-center justify-between h-72">
          <p className="text-[#4a9d3d] flex items-center justify-center transform rotate-90 w-32 h-16 text-lg">
            Follow us on
          </p>
          <div className="text-purple-heading p-2 text-3xl flex flex-col gap-3">
            <a href="">
              <FiInstagram />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
            <a href="">
              <FaGithub />
            </a>
            <a href="">
              <FaDiscord />
            </a>
          </div>
        </div>
      </div>
      <div className="relative xl:absolute w-72 sm:w-96 h-20 xl:h-24 xl:right-8 xl:bottom-4 text-white flex xl:px-10 justify-evenly items-center countdown">
        <svg
          className="absolute top-0 left-0 w-full h-full -z-0"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <polygon
            points="10,0 100,0 100,60 90,100 0,100 0,40"
            fill="rgba(74, 157, 61, 0.22)"
            stroke="#4a9d3d"
            strokeWidth="1"
          />
        </svg>

        <div className="flex flex-col items-center justify-center gap-2 z-10">
          <span className="text-sm sm:text-lg">Days</span>
          <span className="text-2xl sm:text-3xl">00</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 z-10">
          <span className="text-sm sm:text-lg">Hours</span>
          <span className="text-2xl sm:text-3xl">00</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 z-10">
          <span className="text-sm sm:text-lg">Mins</span>
          <span className="text-2xl sm:text-3xl">00</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
