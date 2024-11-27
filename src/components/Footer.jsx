import React from "react";
import footerlogo from "../assets/footerlogo.png";
import { Link } from "react-router-dom";
import ActionBtn from "./ActionBtn";
import { FiFacebook, FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const quicklinks = [
    {
      id: 1,
      content: "Home",
      to: "/",
    },
    {
      id: 2,
      content: "Events",
      to: "/event",
    },
    {
      id: 3,
      content: "About",
      to: "/error",
    },
    {
      id: 4,
      content: "Contact",
      to: "/error",
    },
  ];
  const logos = [
    <FiFacebook />,
    <FaXTwitter />,
    <FaInstagram />,
    <FiYoutube />,
  ];

  return (
    <footer className="bg-dark py-5 text-white">
      <div className="container">
        <div>
          <img src={footerlogo} alt="footer logo" />
        </div>
        <div className="row mt-4 justify-content-between">
          <div className="col-lg-4">
            <p>
              Stay connected and informed with our updates Subscribe to our
              newsletter for the latest updates on mental health tips, app
              features, and exclusive offers. Join our community to receive
              valuable insights and support right in your inbox
            </p>
            <div
              className="form-control d-flex mt-2"
              style={{ maxWidth: "434px" }}
            >
              <input
                type="email"
                className="border-0 form-control shadow-none"
                placeholder="Email Address"
              />
              <ActionBtn content="Subscribe" width={"200px"} />
            </div>
          </div>
          <div className="col-lg-3">
            <h3 className="mb-2 mt-3 mt-lg-0 fs-3">Quick Links</h3>
            <div className="d-flex flex-column gap-3">
              {quicklinks.map((link) => {
                return (
                  <Link
                    key={link.id}
                    to={link.to}
                    className="text-decoration-none text-white"
                  >
                    {link.content}{" "}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="col-lg-3 mt-3 mt-lg-0">
            <h3 className="mb-2 fs-3">Socials</h3>
            <div className="d-flex gap-3">
              {logos.map((l, i) => (
                <p key={i} className="fs-5">
                  {l}{" "}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
