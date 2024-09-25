import React from "react";
import { Link } from "react-router-dom";
import BlogImg from "../../Assets/Image/blogimg.webp";

const BlogCardMain = () => {
  return (
    <div className="flex flex-col max-w-[270px] items-center shadow-lg pb-4 relative overflow-hidden group">
    <div className="relative overflow-hidden group">
        <div className="imgCategory bg-my_orange text-my_white  px-[11px] py-[4px] absolute  top-2 left-2 rounded-[6px] text-[14px] z-50 ">
            IPHONE
        </div>
      <img
        src={BlogImg}
        className="imgBox relative transition-all duration-500 group-hover:scale-110 ease-in-out"
        alt="img"
      />
    </div>
      <div className="blogText w-full  py-5 relative px-3">
        <div className="date flex items-center gap-1">
          <i className="fa-regular fa-calendar text-[14px] text-my_gray_Text"></i>
          <span className="text-[14px] text-my_gray_Text">January 21</span>
          <span className="text-[14px] text-my_gray_Text">, 2023</span>
        </div>
        <div className="blogTextTitle py-2">
          <h3 className="text-[18px] text-my_darkgray_Text">
            MacBook Air labore et dolore
          </h3>
        </div>
        <div className="flex items-center gap-4">
            <Link
              className="font-semibold hover:text-my_orange transition-all duration-300 text-my_gray_Text text-[15px]"
              to="/blogdetail "
            >
              Read more 
            </Link>
            <span>
              <i class="fa-solid fa-right-long text-my_orange text-[12px] cursor-pointer"></i>
            </span>
          </div>
      </div>
    </div>
  );
};

export default BlogCardMain;
