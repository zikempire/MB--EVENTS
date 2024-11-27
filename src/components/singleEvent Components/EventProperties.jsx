import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import PaymentCard from "./PaymentCard";
const EventProperties = ({
  _id,
  image,
  title,
  host,
  category,
  location,
  date,
  tickets,
  tags,
}) => {
  return (
    <div className="container ">
      <img
        src={image}
        alt={title}
        className="w-100 object-fit-cover rounded-2"
        height={"345px"}
      />

      <div className="row mt-5 mb-3 justify-content-between">
        <div className="col-md-7">
          <h1 className="fs-3">
            <FaCalendarAlt /> {date} 7:00PM
          </h1>
          <h1 className="fs-4 my-3">
            <FaLocationDot /> {location}{" "}
          </h1>
          <div className="d-flex gap-3 my-4 align-items-center">
            {tags.map((tag, index) => {
              return (
                <p
                  key={index}
                  className="border border-3 py-1 px-2 rounded-2 text-capitalize"
                >
                  {tag}{" "}
                </p>
              );
            })}
          </div>
          <h1>{title} </h1>
          <p>
            Digital marketing has become an essential skill in today's business
            landscape, and a comprehensive course can equip you with the
            knowledge to excel. Dive into the world of digital marketing with an
            in-depth curriculum covering SEO, social media marketing, content
            creation, and email campaigns. Learn the latest techniques to
            optimize your online presence and drive traffic to your website.
            From understanding analytics to mastering PPC advertising, this
            course will guide you through every step. With real-world case
            studies and hands-on projects, you'll gain practical experience and
            confidence. By the end, you'll be ready to boost any brand's digital
            footprint and achieve measurable success in the ever-evolving online
            market.
          </p>
        </div>
        <div className="col-md-4  text-white d-flex justify-content-start justify-content-md-end ">
          <PaymentCard />
        </div>
      </div>
    </div>
  );
};

export default EventProperties;
