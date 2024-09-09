import React from "react";
import bannerImg1 from "../../Assets/Image/sub-banner-1.webp";
import bannerImg2 from "../../Assets/Image/sub-banner-2.webp";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className=" my-9">
      <div className="container mx-auto px-8 flex flex-col md:flex-row gap-5 md:gap-5 items-center justify-between ">
        <div className="bannerImgBox max-w-[350px]  md:max-w-[600px] relative overflow-hidden">
          <img
            className=" transition-all duration-500 hover:scale-110 ease-in-out "
            src={bannerImg1}
            alt="bannerImg1"
          />
          <div className="bannerText relative md:absolute  text-center flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 md:-translate-y-[95%] -translate-y-0">
            <h2 className="text-my_gray_Text text-[15px]">Security Smart Camera</h2>
            <p className="text-[24px] font-normal text-my_gray_Text">Just Starting At $850</p>
            <Link className="font-medium px-[18px] py-[8px] bg-my_orange  flex items-center justify-center rounded-3xl text-my_white mt-3">Shop Now</Link>
          </div>
        </div>
        <div className="bannerImgBox max-w-[350px]  md:max-w-[600px] relative overflow-hidden">
          <img
            className=" transition-all duration-500 hover:scale-110 ease-in-out "
            src={bannerImg2}
            alt="bannerImg1"
          />
          <div className="bannerText relative md:absolute  text-center flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 md:-translate-y-[95%] -translate-y-0">
            <h2 className="text-my_gray_Text text-[15px]">Entertainment & Games</h2>
            <p className="text-[24px] font-normal text-my_gray_Text">Just Starting $850 Hurry up!</p>
            <Link className="font-medium px-[18px] py-[8px] bg-my_orange  flex items-center justify-center rounded-3xl text-my_white mt-3">Shop Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
