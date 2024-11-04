import React, { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Image/logo-Drou.png";
import Selects from "../HomeUi/Select";
import HoverCards from "../HomeUi/HoverCard";
import SheetUi from "../HomeUi/SheetUi";
import LoginButton from "../HomeUi/LoginButton";
import UserBadge from "../HomeUi/UserBadge";
import { CartContext } from '../../components/context/cardContext';

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const firstName = JSON.parse(localStorage.getItem("firstName"));
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="sectionHeader transition border-b-[1px] border-solid border-my_gray py-[3px] hidden md:block">
        <div className="flex items-center justify-between container mx-auto px-8">
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
              <span className="">
                <Selects />
              </span>
            </div>
            <div className="border-l-[1px] border-solid bordee-gray login/SignUp flex items-center cursor-pointer">
            {firstName ? <UserBadge name={firstName} /> : <LoginButton />}
            </div>
          </div>
        </div>
      </div>
      <nav
        className={`transition-all ${
          isScrolled
            ? "fixed top-0 left-0 right-0 z-50 bg-white shadow-lg bg-my_white"
            : ""
        }`}
      >
        <div className="sectionMain px-8 py-4 flex items-center justify-between container mx-auto">
          <div className="logo flex items-center w-[166px]  transition-all">
            <Link to="/">
              <img src={Logo} alt="logo" className="w-full " />
            </Link>
          </div>
          <div className="menuList hidden md:block transition-all">
            <HoverCards />
          </div>
          <div className="iconsMenu flex items-center gap-5 md:gap-3 transition-all">
            <i className="fa-solid fa-magnifying-glass text-[20px] cursor-pointer text-my_darkgray_Text"></i>
            <Link to="/wishlist">
              <i className="fa-regular fa-heart text-[20px] text-my_darkgray_Text"></i>
            </Link>
            <Link to="/basket">
            <div className="relative">
              <i className="fa-solid fa-bag-shopping text-[20px] cursor-pointer text-my_darkgray_Text"></i>
              <span className="absolute w-[10px] h-[10px] bg-my_orange bottom-[-3px] left-3 flex items-center justify-center p-2 rounded-lg text-my_white text-[10px] font-bold">
              {cartItems.length}
              </span>
            </div>
            </Link>
            <div className="burgerBar block md:hidden transition-all ">
              <SheetUi />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
