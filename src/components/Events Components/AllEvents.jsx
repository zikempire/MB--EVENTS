import React from "react";
import { events } from "../../data/data";
import EventCard from "../EventCard";
import Empty from "../Empty";
const AllEvents = () => {
  return (
    <div className="container py-4">
      <h2 className="mt-3">All Events</h2>

      {false ? (
        <Empty
          content="Sorry, there are no events for this selection"
          height="300px"
        />
      ) : (
        <div className="d-flex justify-content-between flex-wrap">
          {events.map((event) => {
            return <EventCard key={event._id} {...event} />;
          })}
        </div>
      )}
    </div>
  );
};

export default AllEvents;
