import React from "react";

const Empty = ({ height, content }) => {
  return (
    <div
      style={{ height }}
      className="d-flex justify-content-center align-items-center my-3"
    >
      <div>
        <h1 className="fs-3 text-center">Oops! No Events</h1>
        <h2 className="text-dark text-center fs-5 fw-normal">{content}</h2>
      </div>
    </div>
  );
};

export default Empty;
