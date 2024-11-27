import React from "react";
import SectionHeading from "../SectionHeading";
import cat3 from "../../assets/cat3.png";
import cat2 from "../../assets/cat2.png";
import cat1 from "../../assets/cat1.png";
import { Link } from "react-router-dom";

const EventCategories = () => {
  const categories = [
    {
      id: 1,
      img: cat3,
      category: "Concert",
    },
    {
      id: 2,
      img: cat2,
      category: "Education",
    },
    {
      id: 3,
      img: cat1,
      category: "Party",
    },
  ];
  return (
    <div className="my-3 container">
      <SectionHeading heading="Event Categories" />
      <div className="d-flex justify-content-between align-items-center my-2 flex-wrapp event-container col-12 overflow-x-scroll gap-3">
        {categories.map((one) => {
          return (
            <div
              className="category-item position-relative mx-auto mx-xl-0 my-2 col-12"
              key={one.id}
            >
              <img
                src={one.img}
                alt={one.category}
                className="mx-auto mx-xl-0 my-3 my-xl-0 img-fluid myimg"
              />
              <div className="overlay"></div>
              <button className="btn btn-dark category-btn">
                <Link to="/events" className="text-white text-decoration-none">
                  {one.category}
                </Link>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventCategories;
