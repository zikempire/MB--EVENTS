import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Layout from "../components/Layout";

const UsersEvent = () => {
  const { pathname } = useLocation();

  // Links array for navigation tabs
  const links = [
    { id: 1, label: "Hosting", to: "/your-events" },
    { id: 2, label: "Attending", to: "attending" },
    { id: 3, label: "Previous", to: "previous" },
    // { id: 4, label: "Saved", to: "saved" },
  ];

  // Function to render links with appropriate classes based on current pathname
  const renderLinks = (isLargeScreen) =>
    links.map(({ id, label, to }) => (
      <Link
        key={id}
        to={to}
        className={`border border-2 border-dark rounded-2 text-dark text-decoration-none 
          ${
            isLargeScreen
              ? "fs-4 d-flex justify-content-center align-items-center"
              : "py-2 px-2 px-md-3 fs-6"
          } 
          ${
            pathname === to || (pathname.includes(to) && to !== "/your-events")
              ? "bg-dark text-white"
              : ""
          }`}
        style={isLargeScreen ? { width: "294px", height: "64px" } : {}}
      >
        {label}
      </Link>
    ));

  return (
    <Layout>
      <div className="container">
        <h1 className="my-4">Your Events</h1>

        {/* Small screen links (scrollable) */}
        <div className="d-flex gap-2 gap-md-4 align-items-center my-3 overflow-x-auto event-container d-lg-none">
          {renderLinks(false)}
        </div>

        {/* Large screen links (fixed size) */}
        <div className="gap-2 gap-md-4 align-items-center my-3 overflow-x-auto event-container d-none d-lg-flex">
          {renderLinks(true)}
        </div>
      </div>
      <Outlet />
    </Layout>
  );
};

export default UsersEvent;
