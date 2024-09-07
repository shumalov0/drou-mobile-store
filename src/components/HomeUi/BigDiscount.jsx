import React from 'react';
import discountImg from '../../Assets/Image/shopNow.jpg';
import { Link } from 'react-router-dom';

const BigDiscount = () => {
  return (
    <div className='mb-[60px]'>
      <div className="container mx-auto px-8">
        <div className="relative overflow-hidden">
          <img
            className="transition-all duration-500 hover:scale-110 ease-in-out"
            src={discountImg}
            alt="discountImg"

          />
          <div className="discountText relative md:absolute  text-center flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 md:-translate-y-1/2 -translate-y-0">
            <h2 className=' uppercase  text-[#666]'>Big Discount</h2>
            <p className='text-[20px]'>Google Pixel Smart Phone</p>
            <span className='font-bold text-my_orange text-[22px]'>$350.00</span>
            <Link className="font-medium px-[30px] py-[12px] bg-my_orange  flex items-center justify-center rounded-3xl text-my_white mt-3"  to="/product">Shop Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigDiscount;
