import Countdown from "react-countdown";

const CountdownTimer = () => {
  // Renderer function to format the countdown
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <div className="text-center text-xl text-red-500">
          Countdown Complete!
        </div>
      );
    } else {
      return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-40 text-white flex xl:px-10 px-4 md:px-6 justify-evenly items-center countdown z-20">
          <div
            className="absolute top-0 left-0 w-full h-full backdrop-blur-3xl "
            style={{
              clipPath:
                "polygon(10% 0%, 100% 0%, 100% 60%, 90% 100%, 0% 100%, 0% 40%)",
            }}
          />
          <svg
            className="absolute top-0 left-0 w-full h-full -z-0"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <polygon
              points="10,0 100,0 100,60 90,100 0,100 0,40"
              fill="rgba(74, 157, 61, 0.22)"
              stroke="#58ff16"
              strokeWidth="1"
            />
          </svg>
          {/* Hours */}
          <div className="flex flex-col items-center justify-center gap-2 z-10">
            <span className="text-3xl">Hours</span>
            <span className="text-3xl">{String(hours).padStart(2, "0")}</span>
          </div>
          {/* Minutes */}
          <div className="flex flex-col items-center justify-center gap-2 z-10">
            <span className="text-3xl">Mins</span>
            <span className="text-3xl">{String(minutes).padStart(2, "0")}</span>
          </div>
          {/* Seconds */}
          <div className="flex flex-col items-center justify-center gap-2 z-10">
            <span className="text-3xl">Secs</span>
            <span className="text-3xl">{String(seconds).padStart(2, "0")}</span>
          </div>
        </div>
      );
    }
  };

  return (
    <Countdown date={new Date("2024-12-14T12:00:00")} renderer={renderer} />
  );
};

export default CountdownTimer;
