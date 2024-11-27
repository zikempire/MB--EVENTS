import React from "react";

const AuthWrapper = ({ children, background }) => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="d-none d-lg-block">
        <img src={background} alt="" />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default AuthWrapper;
