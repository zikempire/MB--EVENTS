import React from "react";
import ActionBtn from "../ActionBtn";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const contents = [
    {
      id: 1,
      heading: "Join An Event",
      para: `Discover exciting events that match your interests and join with
              just a few clicks. Whether it's a concert, workshop, or social
              gathering, our platform makes it simple to find and book tickets.
              Stay updated with event details and enjoy seamless entry with
              digital tickets. Join the fun and make memories!`,
      btnContent: "Join Event",
      to: "/events",
      extraClass: "joinevent",
      extraClassBtn: "herobtn",
    },
    {
      id: 2,
      heading: "Create An Event",
      para: `Bring your vision to life by creating and hosting your own event.
              From intimate meetups to large-scale gatherings, our easy-to-use
              platform helps you manage everything—from ticketing to promotion.
              Engage with your audience, track your attendees, and make your
              event a success in just a few steps.`,
      btnContent: "Create Events",
      to: "/create-event",
      extraClass: "createevent",
      extraClassBtn: "joinbtn",
    },
  ];
  return (
    <div className="container mt-5">
      <h2 className="text-center my-2">How it Works</h2>
      <div className=" d-flex flex-column gap-4 gap-lg-2 flex-lg-row justify-content-between mt-4">
        {contents.map((content) => {
          const {
            id,
            heading,
            para,
            extraClass,
            extraClassBtn,
            btnContent,
            to,
          } = content;
          return (
            <div
              key={id}
              className={`rounded-2 p-3 p-xl-5 mx-auto mx-lg-0 h-100 d-flex justify-content-start align-items-center ${extraClass}`}
            >
              <div>
                <h1 className="display-6 fw-bold mb-3"> {heading} </h1>
                <p className="fs-6">{para} </p>
                <Link to={to}>
                  <ActionBtn
                    content={btnContent}
                    width={"264px"}
                    className={extraClassBtn}
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorks;
