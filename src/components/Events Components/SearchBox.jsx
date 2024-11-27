import React from "react";
import { CiSearch } from "react-icons/ci";
import ActionBtn from "../ActionBtn";

const SearchBox = () => {
  return (
    <div className="bg-dark w-100">
      <div className="container py-5">
        <form>
          <div className=" form-container mx-auto position-relative">
            <CiSearch
              className="position-absolute fs-3"
              style={{ top: "15px", left: "5px" }}
            />
            <input
              type="text"
              className="form-control shadow-none ps-5"
              style={{ height: "56px" }}
              placeholder="Search Events"
            />
          </div>
          <div className="text-white my-3 my-lg-4 w-75 mx-auto d-flex flex-column flex-lg-row align-items-center justify-content-center gap-3 form-test">
            <select class="form-select">
              <option selected>Location</option>
              <option value="1">Online</option>
              <option value="2">Lagos</option>
              <option value="3">Abuja</option>
            </select>
            <select class="form-select">
              <option selected>Category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select class="form-select">
              <option selected>Tags</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select class="form-select">
              <option selected>Price</option>
              <option value="free">Free</option>
              <option value="paid">Paid</option>
            </select>

            <ActionBtn
              content="Apply"
              width={"128px"}
              type="submit"
              className="herobtn"
            />
            <button
              type="button"
              className="bg-transparent main-color border-0 reset-btn"
            >
              Reset Filters
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
