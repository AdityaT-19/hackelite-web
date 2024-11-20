import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { words } from "../constants/ui";
import Hover3D from "./Hover3D";
import { TypewriterEffect } from "./typewriter-effect";

function Hero() {
  return (
    <section
      className="relative max-xl:flex flex-col items-center justify-center max-xl:gap-10 max-xl:pb-2 w-full"
      style={{ minHeight: "calc(100vh - 3.5rem)" }}
      id="home"
    >
      <div className="flex items-center gap-16 lg:gap-24 flex-col p-4 z-10">
        <div className="flex items-center justify-center flex-col">
          <Hover3D>
            <img
              src="/logo.png"
              alt="logo"
              className="h-64 w-64 sm:h-72 sm:w-72"
            />
          </Hover3D>

          <h1 className="font-hackalite font-semibold z-10 text-white text-4xl md:text-6xl lg:text-8xl gradient-text">{`<HACKELITE>`}</h1>

          <div className="flex justify-between w-full sm:w-[60vw] max-lg:flex-col p-2 gap-2 max-xl:items-center">
            <h2 className="text-white text-sm sm:text-xl font-subhackalite flex-1 flex">
              <TypewriterEffect words={words} />
            </h2>
            <p className="text-purple-heading text-xl font-bold">
              13th-14th Dec 2024
            </p>
          </div>
        </div>
        <a
          href="https://unstop.com/o/vFHyfKr?lb=xisUOuLu&utm_medium=Share&utm_source=shortUrl"
          className="bg-[#b880df] h-16 sm:w-96 w-64 text-xl sm:text-3xl font-semibold text-white text-center flex items-center justify-center"
          style={{
            clipPath:
              "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)",
          }}
        >
          Register Now!
        </a>
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
            <a href="https://www.instagram.com/hackelite_24/profilecard/?igsh=MWQwOTBlMnljZjlncA==">
              <FiInstagram />
            </a>
            <a href="https://www.linkedin.com/company/hackelite-24-jssstu/">
              <FaLinkedin />
            </a>
            <a href="https://github.com/AdityaT-19/hackelite-web">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
