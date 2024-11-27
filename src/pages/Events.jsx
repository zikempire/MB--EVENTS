import React from "react";
import Layout from "../components/Layout";
import SearchBox from "../components/Events Components/SearchBox";
import AllEvents from "../components/Events Components/AllEvents";
import Pagination from "../components/Pagination";
const Events = () => {
  return (
    <>
      <Layout>
        <SearchBox />
        <AllEvents />
        <Pagination />
      </Layout>
    </>
  );
};

export default Events;
