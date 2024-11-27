import React from "react";
import SectionHeading from "../SectionHeading";
import { events } from "../../data/data";
import EventCard from "../EventCard";
const UpcomingEvents = () => {
  return (
    <div className="my-5 container">
      <SectionHeading heading="Upcoming Events" />
      <div
        className=" d-flex justify-content-between align-items-center gap-4 event-container my-3"
        style={{ overflowX: "scroll" }}
      >
        {events.slice(3).map((event) => {
          return <EventCard key={event._id} {...event} />;
        })}
      </div>
    </div>
  );
};

export default UpcomingEvents;
