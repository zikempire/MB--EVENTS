import React from "react";
import Header from "../components/Header";
import err from "../assets/err.png";

const Error404 = () => {
  return (
    <>
      <Header />
      <div className="container text-center d-flex justify-content-center align-items-center">
        <div>
          <img src={err} className="img-fluid" alt="error 404" />
          <h2 className="my-3">Oh snap!, this is awkward.</h2>
          <p>
            But not as awkward as shaking someone that is to giving you a fist
            bump
          </p>
        </div>
      </div>
    </>
  );
};

export default Error404;
