import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Link } from "react-router-dom";

const HomePage = [
  {
    id: 1,
    title: "Home Demo One",
    to: "/home1",
  },
  {
    id: 2,
    title: "Home Demo Two",
    to: "/home2",
  },
  {
    id: 3,
    title: "Home Demo Three",
    to: "/home3",
  },
  {
    id: 4,
    title: "Home Demo Four",
    to: "/home4",
  },
  {
    id: 5,
    title: "Home Demo Five",
    to: "/home5",
  },
];
const pageCategory = [
  {
    id:1,
    SmartPhone:{
      id:1,
      

    }
  }
];

const HoverCards = () => {
  return (
    <div className="flex gap-2 lg:gap-5 items-center  ">
      <HoverCard openDelay={0} closeDelay={0}>
        <HoverCardTrigger className=" cursor-pointer flex items-center hover:text-my_red  font-semibold text-my_gray_Text relative">
          <Link to="/">
            <span className="absolute top-[-17px] left-[0] rounded-lg px-1 bg-my_red text-my_white text-[11px] before:absolute before:rotate-[50deg]   before:bg-my_red before:content-[''] before:bottom-[-0.8px] before:w-[5px] before:h-[5px] ">
              new
            </span>
            HOME
         
          </Link>
        </HoverCardTrigger>
        {/* <HoverCardContent>
          <ul className="flex items-center flex-col gap-5">
            {HomePage.map((pages) => (
              <li className=" cursor-pointer hover:text-my_red hover:font-bold">
                <Link to={pages.to}>{pages.title}</Link>
              </li>
            ))}
          </ul>
        </HoverCardContent> */}
      </HoverCard>
      <HoverCard openDelay={0} closeDelay={0}>
        <HoverCardTrigger className=" text-my_gray_Text cursor-pointer flex items-center hover:text-my_red  font-semibold">
          <Link to="/product">
            ELECTRONICS
       
          </Link>
        </HoverCardTrigger>

        {/* <HoverCardContent>
          
        </HoverCardContent> */}
      </HoverCard>
      <HoverCard openDelay={0} closeDelay={0}>
        <HoverCardTrigger className="  text-my_gray_Text cursor-pointer flex items-center hover:text-my_red  font-semibold">
          <Link to="/blog">
            BLOG
           
          </Link>
        </HoverCardTrigger>


      </HoverCard>
      <HoverCard openDelay={0} closeDelay={0}>
        <HoverCardTrigger className="  text-my_gray_Text cursor-pointer flex items-center hover:text-my_red  font-semibold">
          PAGES
          <i class="fa-solid fa-chevron-down "></i>
        </HoverCardTrigger>

        <HoverCardContent >
         <ul className="flex items-center flex-col">
          <li><Link className="text-[17px] text-my_gray_Text font-semibold hover:text-my_orange transition-all" to="/faq">Faq</Link></li>
          <li><Link className="text-[17px] text-my_gray_Text font-semibold hover:text-my_orange transition-all" to="/blog">Blog</Link></li>
         </ul>
        </HoverCardContent>
        <Link
          to="/contact"
          className="  text-my_gray_Text cursor-pointer flex items-center hover:text-my_red  font-semibold"
        >
          CONTACT
        </Link>
      </HoverCard>
    </div>
  );
};

export default HoverCards;
