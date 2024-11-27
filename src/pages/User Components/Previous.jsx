import React from "react";
import EventCard from "../../components/EventCard";
import { events } from "../../data/data";
import Pagination from "../../components/Pagination";
import Empty from "../../components/Empty";

const Previous = () => {
  return (
    <div className="container">
      <h2 className="my-3">Previous Events</h2>
      <div className="d-flex justify-content-between flex-wrap">
        {events.slice(2, 5).map((event) => {
          return <EventCard key={event._id} {...event} />;
        })}
      </div>
      <Pagination />
    </div>
  );
};

export default Previous;
