import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../Assets/Image/logo-Drou.png'
import Selects from "../HomeUi/Select";
import HoverCards from "../HomeUi/HoverCard";
import SheetUi from "../HomeUi/SheetUi";
import Search from "../HomeUi/Search";
const Header = () => {
  return (
    <nav className="transition-all   ">
      <div className="sectionHeader  border-b-[1px] border-solid border-my_gray py-[3px] hidden md:block">
        <div className="flex items-center justify-between  container mx-auto px-8">
          <div className="headerBox flex items-center gap-2">
            <p className="font-medium text-[14px] border-r-[1px] border-solid border-gray px-1 text-my_gray_Text ">
              (08)123 456 7890
            </p>
            <Link
              className="font-medium text-[14px] text-my_gray_Text"
              to="map"
            >
              Store location
            </Link>
          </div>
          <div className="headerBox flex items-center">
            <p className="font-medium text-[14px] text-my_gray_Text">
              Tell a friend about Drou & get 20% off*
            </p>
          </div>
          <div className="headerBox flex items-center gap-1 cursor-pointer">
            <div className="usdBox text-[14px] flex text-my_gray_Text font-bold items-center ">
              <span className="  ">
                <Selects/>
              </span>
              {/* <span className=" px-2">
                <i class="fa-solid fa-chevron-down"></i>
              </span> */}
            </div>
            <div className=" border-l-[1px] border-solid bordee-gray login/SignUp flex items-center cursor-pointer ">
              <Link
                className="font-medium px-4 text-[14px] text-my_gray_Text"
                to="/login"
              >
                Log In / Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="sectionMain px-8 py-4 flex items-center justify-between container mx-auto">
        <div className="logo w-[166px] h-[60px]">
          <Link to='/'>
           <img src={Logo} alt="logo" className=" w-full h-full" />
          </Link>
        </div>
        <div className="menuList hidden md:block">
              <HoverCards/>
        </div>
        <div className="iconsMenu flex items-center gap-5 md:gap-3 "> 
        <i class="fa-solid fa-magnifying-glass text-[27px] cursor-pointer text-my_darkgray_Text"></i>
        <Link to="/wishlist ">
        <i  class="fa-regular fa-heart text-[27px] text-my_darkgray_Text"></i>
        </Link>
        <div className="relative">

        <i class="fa-solid fa-bag-shopping text-[27px] cursor-pointer text-my_darkgray_Text"></i>
        <span className="absolute w-[10px] h-[10px] bg-my_orange bottom-[-3px] left-3 flex items-center justify-center p-2 rounded-lg text-my_white text-[10px] font-bold">0</span>
        </div>


        <div className="burgerBar block md:hidden  transition-all ">
        <SheetUi/>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
