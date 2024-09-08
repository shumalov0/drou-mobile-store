import React from "react";
import hurrtUpImg from "../../Assets/Image/hurryUp.webp";
import { Link } from "react-router-dom";
import Countdown from "react-countdown";

const HurryUp = () => {
  const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Time is up!</span>;
    } else {
      return (
        <div>
          <ul className="flex items-center">
            <li className="flex flex-col items-center justify-center h-[80px] w-[80px] shadow-[0_0_10px_#0000001a]  rounded-[16px]">
              <h2 className="text-[21px] font-bold"> {days}</h2>
              <span className="text-my_gray_Text text-[12px]">DAYS</span>
            </li>
            <li className="flex flex-col items-center justify-center h-[80px] w-[80px] shadow-[0_0_10px_#0000001a]  rounded-[16px]">
              <h2 className="text-[21px] font-bold"> {hours}</h2>
              <span className="text-my_gray_Text text-[12px]">HRS</span>
            </li>
            <li className="flex flex-col items-center justify-center h-[80px] w-[80px] shadow-[0_0_10px_#0000001a]  rounded-[16px]">
              <h2 className="text-[21px] font-bold"> {minutes}</h2>
              <span className="text-my_gray_Text text-[12px]">MINS</span>
            </li>
            <li className="flex flex-col items-center justify-center h-[80px] w-[80px] shadow-[0_0_10px_#0000001a]  rounded-[16px]">
              <h2 className="text-[21px] font-bold"> {seconds}</h2>
              <span className="text-my_gray_Text text-[12px]">SECS</span>
            </li>

          </ul>
          
        </div>
      );
    }
  };

  return (
    <div className="bg-hurry-up py-9 bg-my_dark_gray md:bg-my_white">
      <img
        src={hurrtUpImg}
        alt="hurryupimg"
        className="hidden md:block w-full"
      />
      <div className="container mx-auto px-8 flex items-center justify-center relative">
        <div className="hurryUpText text-center flex flex-col gap-3 justify-center items-center relative md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-[100%] md:-translate-y-[110%]">
          <span className="font-medium px-[30px] py-[12px] bg-my_orange flex items-center justify-center text-my_white max-w-[150px]">
            Hurry Up !
          </span>
          <p className="text-my_gray_Text text-[30px] lg:text-[50px]   font-bold max-w-[600px]">
            Up To 25% Discount Check it Out
          </p>
          <div className="timer">
            <Countdown
              date={Date.now() + 1000000000}
              renderer={countdownRenderer}
            />
          </div>
          <Link to="/product" className="btn-shop text-my_gray_Text hover:text-my_orange  transition-all text-[21px] font-bold">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HurryUp;
