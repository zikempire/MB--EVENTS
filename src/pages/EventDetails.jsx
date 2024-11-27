import React from "react";
import Layout from "../components/Layout";
import OthersLiked from "../components/singleEvent Components/OthersLiked";
import { events } from "../data/data";
import EventProperties from "../components/singleEvent Components/EventProperties";

const EventDetails = () => {
  const { ...all } = events[1];
  return (
    <>
      <Layout>
        <div className="container">
          <h3 className="my-4 fs-5">
            Home {">"} Events {">"}{" "}
            <span className="main-color">Event Details</span>
          </h3>
        </div>
        <EventProperties {...all} />
        <OthersLiked />
      </Layout>
    </>
  );
  j;
};

export default EventDetails;
