import React from "react";
import axios from "axios";
import BreadCumb from "../HomeUi/BreadCumb";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = async (data) => {
    try {
      const response = await axios.post(
        "https://drou-electronics-store.onrender.com/api/v1/auth/login",
        data
      );

      localStorage.setItem(
        "firstName",
        JSON.stringify(response.data.data.user.firstName)
      );
      console.log(response.data);

      console.log("Login uğurlu oldu:", response.data);
      navigate("/");
    } catch (error) {
      console.error("Login alınmadı:", error.response?.data || error.message);
    }
  };

  return (
    <>
      <BreadCumb page1="Home" mainPage="Account" />
      <div className="container mx-auto px-8 flex  items-center justify-center flex-col">
        <div className="LoginBox mt-[40px] mb-[20px] flex flex-col items-center px-[15px] py-[25px] max-w-[450px] w-full shadow-xl">
          <div className="loginText mb-[30px] flex flex-col items-center">
            <h1 className=" text-[28px] font-bold mb-[40px]">Login</h1>
            <p className="text-my_gray_Text">
              Please login using account detail below.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(submitForm)}
            className=" flex items-center flex-col"
          >
            <div className="flex flex-col items-between gap-9 ">
              <div className="inputBox flex items-start justify-between  ">
                <label className="mt-1" htmlFor="email">
                  Email
                </label>
                <div className=" flex-col flex items-center ">
                  <input
                    className="bg-[#ebebeb] outline-none px-[15px] py-[5px] focus:bg-my_white focus:border focus:border-current focus:rounded "
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
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
              <div className="inputBox flex items-start justify-between   ">
                <label className="mt-1" htmlFor="password">
                  Password
                </label>
                <div className=" flex-col flex items-center ">
                  <input
                    className="bg-[#ebebeb] outline-none px-[15px] py-[5px] focus:bg-my_white focus:border focus:border-current focus:rounded "
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
              Sign In
            </button>
          </form>
          <Link
            className="mt-10 pt-6 border-t-[1px] border-[#3333] w-full text-center "
            to="/register"
          >
            Create Account
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
