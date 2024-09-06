import React from "react";
import { Link } from "react-router-dom";
import PlayStore from '../../Assets/Image/google-play.jpg'
import AppStore from '../../Assets/Image/app-store.jpg'
import PaymetMethod from '../../Assets/Image/payment-method.png'
const Footer = () => {
  return (
    <div className="">
      <div className="container mx-auto px-8 flex-wrap py-[70px]">
        <div className="footerList flex items-start justify-between flex-wrap">
          <div className="listBox">
            <h2 className="text-[20px] font-bold pb-4">Contact us</h2>
            <ul className=" flex flex-col gap-3">
              <li className="text-[#444444]">
                <Link to="/blog1">Drou Demo Store</Link>
              </li>
              <li className="text-[#444444]">
                <Link to="/blog1">No. 1259 Freedom, New</Link>
              </li>
              <li className="text-[#444444]">
                <Link to="/blog1">York</Link>
              </li>
              <li className="text-[#444444]">
                <Link to="/blog1">United States</Link>
              </li>
              <li className="text-[#444444]">
                <Link to="/blog1">+91-987654321</Link>
              </li>
              <li className="text-[#444444]">
                <Link to="/blog1">demo@exampledemo.com</Link>
              </li>
            </ul>
          </div>
          <div className="listBox">
            <h2 className="text-[20px] font-bold pb-4">Information</h2>
            <ul className=" flex flex-col gap-3">
              <li className="text-[#444444]">
                <Link to="/blog1">Product Support</Link>
              </li>
              <li className="text-[#444444]">
                <Link to="/blog1">Checkout</Link>
              </li>
              <li className="text-[#444444]">
                <Link to="/blog1">License Policy</Link>
              </li>
              <li className="text-[#444444]">
                <Link to="/blog1">Affiliate</Link>
              </li>
            </ul>
          </div>
          <div className="listBox">
            <h2 className="text-[20px] font-bold pb-4">Customer Service</h2>
            <ul className=" flex flex-col gap-3">
              <li className="text-[#444444]">
                <Link to="/blog1">Help Center</Link>
              </li>
              <li className="text-[#444444]">
                <Link to="/blog1">Redeem Voucher</Link>
              </li>
              <li className="text-[#444444]">
                <Link to="/blog1">Contact Us</Link>
              </li>
              <li className="text-[#444444]">
                <Link to="/blog1">Policies & Rules</Link>
              </li>
            </ul>
          </div>
          <div className="listBox">
            <h2 className="text-[20px] font-bold pb-4">Download Our App</h2>
            <ul className=" flex flex-col gap-3 max-w-[270px] leading-8">
              <li className="text-[#444444]">
                <Link to="/blog1">Download our App and get extra 15% Discount on your first Order..!</Link>
              </li>
              <li className="text-[#444444]">
                <div className="downloadBox flex items-center pt-4  justify-between">
                    <Link className="border">
                          <img src={PlayStore} alt="playStore" />
                    </Link>
                    <Link className="border">
                          <img src={AppStore} alt="playStore" />
                    </Link>
                </div>

              </li>

     
            </ul>
          </div>
        </div>
      </div>
        <div className="footerBottom bg-bg_white mt-4">
          <div className="container mx-auto px-8 flex items-center justify-between flex-wrap py-5 ">

          <div className="Footertext">
          Copyright © Team90Degree | Built with Drou by Team90Degree.
          </div>
          <div className="footerImager">
            <Link>
              <img src={PaymetMethod} alt="payment" />
            </Link>
          </div>
          </div>
        </div>

    </div>
  );
};

export default Footer;
