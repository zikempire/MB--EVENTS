import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Home Components/Hero";
import EventCategories from "../components/Home Components/EventCategories";
import HowItWorks from "../components/Home Components/HowItWorks";
import FreeEvents from "../components/Home Components/FreeEvents";
import UpcomingEvents from "../components/Home Components/UpcomingEvents";

const Homepage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <UpcomingEvents />
        <EventCategories />
        <HowItWorks />
        <FreeEvents />
      </Layout>
    </>
  );
};

export default Homepage;
