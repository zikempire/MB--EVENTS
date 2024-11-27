import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import ActionBtn from "../components/ActionBtn";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotPasswordSchema } from "../utils/formValidator";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center reset-container">
      <form onSubmit={handleSubmit(onSubmit)} className="p-2">
        <Link to="/">
          <img src={logo} alt="logo" className="d-block mx-auto my-2" />
        </Link>
        <h1 className="fs-3">Forgot Password ?</h1>
        <p className="fs-5 my-3">
          No worries, we’ll send you instruction to help
        </p>
        <input
          type="email"
          placeholder="Email Address"
          className="form-control shadow-none w-100 border border-1 border-secondary mb-1 py-2"
          {...register("email")}
        />
        {errors.email && (
          <small className="text-danger">{errors.email.message}</small>
        )}
        <ActionBtn
          width={"100%"}
          content="Reset Password"
          type="submit"
          className="specialbtn mt-2"
        />
      </form>
    </div>
  );
};

export default ForgotPassword;
