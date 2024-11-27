import React from "react";
import { Link } from "react-router-dom";

const SectionHeading = ({ heading }) => {
  return (
    <div className="d-flex justify-content-between align-items-center my-2">
      <h2 className="fs-5">{heading} </h2>
      <Link to="/events" className="text-decoration-none text-dark fs-5">
        See All
      </Link>
    </div>
  );
};

export default SectionHeading;
