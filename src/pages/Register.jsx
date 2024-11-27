import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";
import ActionBtn from "../components/ActionBtn";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import logo from "../assets/logo.png";

import { registerSchema } from "../utils/formValidator";

const Register = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const toggleShow = () => setShow(!show);
  const toggleShow2 = () => setShow2(!show2);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center py-2 myform container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-3 p-lg-5 shadow-lg rounded-3"
      >
        <Link to="/">
          <img src={logo} alt="logo" className="d-block mx-auto my-2" />
        </Link>
        <h1 className="fs-3">Create Account</h1>
        <p className="fs-6 my-2">
          Let’s get you started so you can start joining and creating events
        </p>

        <input
          type="text"
          placeholder="Full Name"
          className={`form-control shadow-none w-100 border border-1 border-secondary mb-1 py-2`}
          {...register("fullName")}
        />
        {errors.fullName && (
          <small className="text-danger">{errors.fullName.message}</small>
        )}

        <input
          type="email"
          placeholder="Email Address"
          className={`form-control shadow-none w-100 border border-1 border-secondary mb-1 mt-3 py-2 `}
          {...register("email")}
        />
        {errors.email && (
          <small className="text-danger">{errors.email.message}</small>
        )}

        <div className="position-relative w-100">
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            className={`form-control shadow-none w-100 border border-1 border-secondary mb-1 mt-3 py-2`}
            {...register("password")}
          />
          <button
            type="button"
            onClick={toggleShow}
            className="bg-transparent border-0 text-secondary position-absolute eye"
            style={{ top: "10%" }}
          >
            {show ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
          {errors.password && (
            <small className="text-danger">{errors.password.message}</small>
          )}
        </div>

        <div className="position-relative w-100">
          <input
            type={show2 ? "text" : "password"}
            placeholder="Confirm Password"
            className={`form-control shadow-none w-100 border border-1 border-secondary mb-1 mt-3 py-2 `}
            {...register("confirmPassword")}
          />
          <button
            type="button"
            onClick={toggleShow2}
            className="bg-transparent border-0 text-secondary position-absolute eye"
            style={{ top: "10%" }}
          >
            {show2 ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
          {errors.confirmPassword && (
            <small className="text-danger">
              {errors.confirmPassword.message}
            </small>
          )}
        </div>

        <div className="form-check mt-2 mb-1 w-100">
          <input
            className="form-check-input"
            type="checkbox"
            {...register("terms")}
            id="flexCheckDefault"
          />
          <label
            className="form-check-label fw-normal"
            style={{ fontSize: "13px" }}
            htmlFor="flexCheckDefault"
          >
            I Agree to <span className="text-decoration-underline">Terms</span>{" "}
            and <span className="text-decoration-underline">Conditions</span>
          </label>
        </div>
        {errors.terms && (
          <small className="text-danger">{errors.terms.message}</small>
        )}

        <ActionBtn
          width={"100%"}
          content={isSubmitting ? "Signing Up..." : "Sign Up"}
          type="submit"
          className="specialbtn"
        />

        <h2 className="my-3 fs-6">
          Already have an account?
          <Link to="/login" className="text-decoration-none main-color ms-1">
            Sign In
          </Link>
        </h2>
      </form>
    </div>
  );
};

export default Register;
