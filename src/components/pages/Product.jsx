import React from "react";
import BreadCumb from "../HomeUi/BreadCumb";
import Filter from "../ProductUi/Filter";
import ProductCard from "../HomeUi/ProductCard";
const Product = () => {
  return (
    <div>
      <BreadCumb page1="Home" mainPage="Electronisc" />
      <div className="container px-8 mx-auto flex py-11 my-11 ">
        <div className=" w-[20%] flex flex-col gap-5 px-4">
          <div className="clearAll cursor-pointer  text-[#444] flex items-center justify-center gap-1 rounded-md px-4 py-[10px] bg-bg_white hover:bg-my_orange">
            <i class="fa-solid fa-trash  "></i>
            Clear all
          </div>
          <div className="FilterListBox flex flex-col gap-5 ">
            <Filter title='Brand' />
            <Filter title='Brand' />
            <Filter title='Brand' />
            <Filter title='Brand' />
            <Filter title='Brand' />
          </div>
        </div>
        <div className="w-[80%] "> 
          <div className="ProductCardList flex flex-wrap gap-4 items-center justify-center ">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
