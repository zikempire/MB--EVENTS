import React from "react";
import { BounceLoader } from "react-spinners";

const FallBackLoader = () => {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <BounceLoader color="#9747FF" />
      <span className="ms-2">Loading...</span>
    </div>
  );
};

export default FallBackLoader;
