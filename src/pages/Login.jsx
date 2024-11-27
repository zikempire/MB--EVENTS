import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import ActionBtn from "../components/ActionBtn";
import logo from "../assets/logo.png";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { loginSchema } from "../utils/formValidator";

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Initialize useForm with yupResolver for validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log("Form Submitted", data);
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="vh-100 d-flex justify-content-center justify-content-lg-betwee align-items-center py-2  myform container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-3 shadow-lg rounded-2"
      >
        <Link to="/">
          <img src={logo} alt="logo" className="d-block mx-auto my-2" />
        </Link>
        <h1 className="fs-3">Welcome Back</h1>
        <p className="fs-5 my-2">Sign in to your account</p>
        <input
          type="email"
          placeholder="Email Address"
          {...register("email")}
          className={`form-control shadow-none w-100 border border-1 border-secondary mb-1 py-3 ${
            errors.email ? "" : ""
          }`}
        />
        {errors.email && (
          <small className="text-danger">{errors.email.message}</small>
        )}
        <div className="position-relative w-100">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            {...register("password")}
            className="form-control shadow-none w-100 border border-1 border-secondary mb-1 mt-3 py-3"
          />
          {errors.password && (
            <small className="text-danger">{errors.password.message}</small>
          )}

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="bg-transparent border-0 text-secondary position-absolute eye"
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </div>

        <Link
          to="/forgot-password"
          className="text-dark mt-2 mb-3 d-inline-block "
          style={{ fontSize: "13px" }}
        >
          Forgot Password?
        </Link>
        <ActionBtn
          width={"100%"}
          content={isSubmitting ? "Signing In..." : "Sign In"}
          type="submit"
          className="specialbtn"
          disabled={isSubmitting}
        />
        <h2 className="my-3 fs-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-decoration-none main-color">
            Sign Up
          </Link>{" "}
        </h2>
      </form>
    </div>
  );
};

export default Login;
