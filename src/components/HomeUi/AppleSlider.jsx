import React from "react";
import AppleSlider1 from "../../Assets/Image/appleslider1.webp";
import AppleSlider2 from "../../Assets/Image/appleslider2.webp";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const AppleSlider = () => {
  //   const settings = {
  //     dots: true, // Göstergeleri eklemek için
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     arrows: false, // İleri ve geri oklarını kaldırmak isterseniz
  //   };
  return (
    <div className="py-10 bg-bg_white">
      <div className="container mx-auto ">
        <div className=" relative">
          <img src={AppleSlider1} alt="appleSlider1" className="w-full" />
          <div className="carouselText text-center md:text-start flex flex-col gap-0 md:gap-4  justify-center items-center md:items-start  absolute top-1/2 left-1/2  -translate-x-[50%] md:-translate-x-[145%] -translate-y-[50%] md:-translate-y-[73%]">
            <h4 className=" text-my_orange text-[24px]">
              New arrivals collection
            </h4>
            <h1 className="text-[32px] pb-3">iPhone Accessories </h1>
            <p className="text-[18px] text-my_gray_Text">
              Snap on a case, wallet, wireless charger battery pack{" "}
            </p>
            <p className="text-[18px] text-my_gray_Text">
              all accessories you’re looking
            </p>
            <Link className="font-medium px-[18px] py-[8px] bg-my_orange  flex items-center justify-center rounded-3xl text-my_white mt-3">
              Shop Now{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppleSlider;
