import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import ActionBtn from "../components/ActionBtn";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { resetPasswordScchema } from "../utils/formValidator";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const ResetPassword = () => {
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
    resolver: yupResolver(resetPasswordScchema),
  });
  const location = useLocation();

  const urlParams = new URLSearchParams(location.search);
  const token = urlParams.get("token");
  console.log({ token });

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <div>
      <div className="vh-100 d-flex justify-content-center align-items-center reset-container">
        <form onSubmit={handleSubmit(onSubmit)} className="p-2">
          <Link to="/">
            <img src={logo} alt="logo" className="d-block mx-auto my-2" />
          </Link>
          <h1 className="fs-3">Reset Password</h1>
          <p className="fs-5 my-3 fw-medium">Enter Your New Password</p>
          <div className="position-relative w-100">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              className="form-control shadow-none w-100 border border-1 border-secondary mb-1 py-2"
              {...register("password")}
            />
            <button
              type="button"
              onClick={toggleShow}
              className="bg-transparent border-0 text-secondary position-absolute eye"
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
              className="form-control shadow-none w-100 border border-1 border-secondary mb-1 mt-3 py-2"
              {...register("confirmPassword")}
            />
            <button
              type="button"
              onClick={toggleShow2}
              className="bg-transparent border-0 text-secondary position-absolute eye"
            >
              {show2 ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
            {errors.confirmPassword && (
              <small className="text-danger">
                {errors.confirmPassword.message}
              </small>
            )}
          </div>
          <ActionBtn
            width={"100%"}
            content={isSubmitting ? "Resetting Password" : "Reset Password"}
            type="submit"
            className="mt-3 specialbtn"
          />
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
