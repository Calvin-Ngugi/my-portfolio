import { useRef } from "react";
import { BiSkipNextCircle, BiSkipPreviousCircle } from "react-icons/bi";

const HorizontalTimeline = ({ events }: any) => {
  const timelineRef = useRef<HTMLDivElement>(null);

  const scrollToNextItem = () => {
    const timeline = timelineRef.current;
    if (timeline) {
      const containerWidth = timeline.clientWidth;
      const scrollDistance = Math.floor(containerWidth * 0.8); // Adjust scroll distance as needed
      timeline.scrollTo({
        left: timeline.scrollLeft + scrollDistance,
        behavior: "smooth",
      });
    }
  };

  const scrollToPreviousItem = () => {
    const timeline = timelineRef.current;
    if (timeline) {
      const containerWidth = timeline.clientWidth;
      const scrollDistance = Math.floor(containerWidth * 0.8); // Adjust scroll distance as needed
      timeline.scrollTo({
        left: timeline.scrollLeft - scrollDistance,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="overflow-auto md:w-[60%] w-[70%] m-auto">
      <div
        className="timeline overflow-x-hidden flex pt-3 ps-3"
        ref={timelineRef}
      >
        {events.map((event: any, index: any) => (
          <div
            className="event p-8 ps-4 border-t-2 border-t-black relative"
            key={index}
          >
            <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gray-400 rounded-full"></div>
            <div className="event-title font-semibold mb-2 text-[18px]">
              {event.title}
            </div>
            <div className="event-date mb-2 text-[14px]">{event.date}</div>
            <div className="event-description w-[230px] text-[16px]">
              {event.description}
            </div>
          </div>
        ))}
      </div>
      <div className="timeline-nav flex justify-end gap-3 w-[80%] m-auto">
        <button onClick={scrollToPreviousItem}>
          <BiSkipPreviousCircle className="w-8 h-8" />
        </button>
        <button onClick={scrollToNextItem}>
          <BiSkipNextCircle className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default HorizontalTimeline;
