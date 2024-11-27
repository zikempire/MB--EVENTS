import React from "react";

const Pagination = () => {
  const buttonStyles = (isDisabled) => ({
    cursor: isDisabled ? "not-allowed" : "pointer",
  });
  return (
    <div className="container d-flex justify-content-between align-items-center py-5 pagination-container">
      <button
        className="border border-dark border-2 text-dark rounded-1 fs-5 fw-medium"
        style={buttonStyles(true)}
      >
        Previous
      </button>
      <p>Page 1 of 10</p>
      <button
        className="main-bg-color text-white rounded-1 border-0 fs-5 fw-medium specialbtn"
        style={buttonStyles(false)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
