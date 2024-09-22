import React from "react";
import BlogImg from "../../Assets/Image/blogimg.webp";
const BlogCard = () => {
  return (
    <div className="flex flex-col max-w-[290px] items-center pb-4 relative overflow-hidden group px-1">
      <img src={BlogImg} className="imgBox relative transition-all duration-500  group-hover:scale-110 ease-in-out" alt="img" />
      <div className="blogText w-full py-5">
        <div className="date flex items-center gap-1">
          <i class="fa-regular fa-calendar text-[14px] text-my_gray_Text"></i>
          <span className="text-[14px] text-my_gray_Text">January 21</span>
          <span className="  text-[14px] text-my_gray_Text">, 2023</span>
        </div>
        <div className="blogTextTitle py-2">
    <h3 className="text-[18px] text-my_darkgray_Text">     MacBook Air  labore et dolore</h3>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
