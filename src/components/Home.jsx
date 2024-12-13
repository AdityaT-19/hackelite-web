import { Canvas } from "@react-three/fiber";
import Galaxy from "./Galaxy";
import CountdownTimer from "./CountdownTimer";
import { useState, useEffect } from "react";
import Modal from "./Info_Popover";

function Home() {
  const [isInfo, setIsInfo] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Function to check the current time
    const checkTime = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();

      // Show initial message until 3:00 PM
      if (currentHour === 14 && currentMinute >= 20) {
        setIsInfo(true);
        setTitle("It's Lunch Time");
        setMessage(
          "Lunch will be open till 3:00. First checkpoint will be at 3:00. Half of the team will stay back while the other half please have your lunch."
        );
      }

      // Change modal content at 3:00 PM
      if (currentHour >= 15 && currentMinute >= 0) {
        setTitle("1st Checkpoint Reminder");
        setMessage(
          "First checkpoint has started. Please make sure to be ready for your turn."
        );
      }
    };

    // Check every minute
    const interval = setInterval(checkTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
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
      <Modal
        isVisible={isInfo}
        title={title}
        message={message}
        onClose={() => setIsInfo(false)}
      />
    </div>
  );
}

export default Home;
