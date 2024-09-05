import React from "react";
import BreadCumb from "../HomeUi/BreadCumb";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <>
      <BreadCumb page1="Home" mainPage="Register" />
      <div className="container mx-auto px-8 flex items-center justify-center flex-col">
        <div className="RegisterBox mt-[40px] mb-[20px] flex flex-col items-center px-[15px] py-[25px] max-w-[450px] w-full shadow-xl">
          <div className="registerText mb-[30px] flex flex-col items-center">
            <h1 className="text-[28px] font-bold mb-[40px]">Register</h1>
            <p className="text-my_gray_Text">Please register with your details below.</p>
          </div>
          <form onSubmit={handleSubmit(submitForm)} className="flex items-center flex-col">
            <div className="flex flex-col items-between gap-9">
            
              <div className="inputBox flex items-start justify-between">
                <label className="mt-1" htmlFor="username">Username</label>
                <div className="flex-col flex items-center">
                  <input
                    className="bg-[#ebebeb] outline-none px-[15px] py-[5px] focus:bg-my_white focus:border focus:border-current focus:rounded"
                    {...register("username", {
                      required: "Username is required",
                      minLength: {
                        value: 3,
                        message: "Username must be at least 3 characters long",
                      },
                    })}
                    type="text"
                    placeholder="Username"
                    name="username"
                  />
                  {errors.username && (
                    <p className="error-message text-my_orange text-[13px] font-medium">
                      {errors.username.message}
                    </p>
                  )}
                </div>
              </div>
       
              <div className="inputBox flex items-start justify-between">
                <label className="mt-1" htmlFor="email">Email</label>
                <div className="flex-col flex items-center">
                  <input
                    className="bg-[#ebebeb] outline-none px-[15px] py-[5px] focus:bg-my_white focus:border focus:border-current focus:rounded"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    type="text"
                    placeholder="Email"
                    name="email"
                  />
                  {errors.email && (
                    <p className="error-message text-my_orange text-[13px] font-medium">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
            
              <div className="inputBox flex items-start justify-between">
                <label className="mt-1" htmlFor="password">Password</label>
                <div className="flex-col flex items-center">
                  <input
                    className="bg-[#ebebeb] outline-none px-[15px] py-[5px] focus:bg-my_white focus:border focus:border-current focus:rounded"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                    })}
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                  {errors.password && (
                    <p className="error-message text-my_orange text-[13px] font-medium">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <button
              className="font-medium px-[30px] py-[12px] bg-my_orange flex items-center justify-center rounded-3xl text-my_white mt-8"
              type="submit"
            >
              Sign Up
            </button>
          </form>
          <Link className="mt-10 pt-6 border-t-[1px] border-[#3333] w-full text-center" to="/login">
            Already have an account? Sign In
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
