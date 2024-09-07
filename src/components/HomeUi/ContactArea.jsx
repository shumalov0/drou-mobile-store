import React from "react";
import delivery from "../../Assets/Image/delivery.png";
import usd from "../../Assets/Image/usd.png";
import personale from "../../Assets/Image/personale.png";

const contactApi = [
  {
    id: 1,
    img: delivery,
    title: "Free delivery",
    description: "And free returns. See checkout for delivery dates.",
  },
  {
    id: 2,
    img: usd,
    title: "Pay monthly at 0% APR",
    description: "Choose to check out with Apple Card Monthly Installments.",
  },
  {
    id: 3,
    img: personale,
    title: "Personalize it",
    description: "Engrave your device with your name or a personal note",
  },
];

const ContactArea = () => {
  return (
    <div className="bg-bg_white py-8">
      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-around ">
        {contactApi.map((e,key) => (
          <div key={key} className="listBox flex flex-col items-center">
            <img src={e.img} alt="usd" />
            <h2 className=" text-[20px] text-[#323232] font-bold">
              {e.title}
            </h2>
            <p className="text-[18px] text-[#444] max-w-[230px] text-center">
              {e.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactArea;
