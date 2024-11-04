import React from "react";
import { Link } from "react-router-dom";
const LoginButton = () => {
  return (
    <>
      <Link
        className="font-medium px-4 text-[14px] text-my_gray_Text"
        to="/login"
      >
        Log In / Sign Up
      </Link>
    </>
  );
};

export default LoginButton;
