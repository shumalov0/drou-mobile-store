import React from "react";
import iphoneLarge from "../../Assets/Image/iphone-large.webp";

const ProductCard = () => {
  return (
    <div className="flex flex-col max-w-[270px] items-center shadow-lg pb-4 relative overflow-hidden group">
      <img
        src={iphoneLarge}
        className="transition-all duration-500  group-hover:scale-110 ease-in-out"
        alt="imgPhone"
      />

      <div className="iconBox flex items-center gap-3 justify-center absolute bottom-1 left-[20%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="addWish h-[40px] w-[40px] flex items-center justify-center bg-my_gray_Text hover:bg-my_orange cursor-pointer rounded-[100%]">
          <i className="text-my_white fa-solid fa-bag-shopping"></i>
        </div>
        <div className="addCard h-[40px] w-[40px] flex items-center justify-center bg-my_gray_Text rounded-[100%] hover:bg-my_orange cursor-pointer">
          <i className="fa-regular fa-heart text-my_white"></i>
        </div>
        <div className="Compare h-[40px] w-[40px] flex items-center justify-center bg-my_gray_Text rounded-[100%] hover:bg-my_orange cursor-pointer">
          <i className="text-my_white fa-solid fa-signal"></i>
        </div>
      </div>

      <div className="cardText flex flex-col w-full items-center relative overflow-hidden">
        <h5 className="title text-[18px] text-my_gray_Text">DroSafe Charger</h5>
        <div className="price">
          <span className="text-my_orange font-bold text-[18px]">$55.00</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
// export default class Car {
//   constructor(brand, motor, color) {
//     this._brand = brand;
//     this._motor = motor;
//     this._color = color;
//   }

//   static get [Symbol.species]() {
//     return this;
//   }

//   cloneCar() {
//     const ModelCar = this.constructor[Symbol.species];
//     return new ModelCar();
//   }
// }

