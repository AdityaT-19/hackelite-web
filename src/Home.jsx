import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Canvas } from "@react-three/fiber";
import Galaxy from "./components/Galaxy";
import CountdownTimer from "./components/CountdownTimer";

function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        {/* Canvas Background */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 ">
          <div className="absolute flex h-[80vh] w-full">
            <div className="radial-gradient-bg h-full w-full" />
            <div className="radial-gradient-bg h-full w-full" />
            <div className="radial-gradient-bg h-full w-full" />
          </div>

          <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
            <Galaxy />
          </Canvas>
        </div>

        {/* Foreground Sections */}
        <CountdownTimer />
      </div>
    </>
  );
}

export default Home;
