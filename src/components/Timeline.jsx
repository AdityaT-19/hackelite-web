import "./Timeline.css";
import timelineElements from "./timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  let workIconStyles = { background: "#fff", color: "#fff" };
  let schoolIconStyles = { background: "#fff", color: "#fff" };

  return (
    <div className="timelineclass">
      <div className="title-container">
        <h1 className="title">Timeline</h1>
        <h1 className="hollow-text left">Timeline</h1>
        <h1 className="hollow-text right">Timeline</h1>
      </div>
      <VerticalTimeline>
        {timelineElements.map((element, index) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: "70px",
                    fontFamily: "'Racing Sans One', sans-serif",
                    background: "linear-gradient(45deg, #9DFFC4, #000000)", // Gradient text
                    color: "transparent", // Make text transparent for gradient effect
                    WebkitBackgroundClip: "text", // Clip gradient to text
                  }}
                >
                  {index + 1}
                </div>
              }
            >
              <h3
                className="vertical-timeline-element-title text-extrabold"
                style={{
                  fontSize: "24px",
                  color: "#BAE869",
                  fontWeight: "800",
                  marginBottom: ".5rem",
                }} // Apply styles ONLY to the title
              >
                {element.title}
              </h3>
              <span style={{ fontSize: "22px", color: "#fff", fontWeight: "bold" }}>
                {element.description}
              </span>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
