import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,

  SheetTrigger,
} from "../ui/sheet";
import Search from "./Search";
import AccordionUi from "./AccordionUi";
import { Link } from "react-router-dom";


const SheetUi = () => {
  return (
    <Sheet >
      <SheetTrigger>
        <i class="fa-solid fa-bars text-[30px] cursor-pointer"></i>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetDescription>
            <div className="sheetHeader flex flex-col items-start gap-4 transition-all ">
              <p className="text-my_white text-[15px]">
                {" "}
                Tell a friend about Drou & get 20% off*
              </p>
              <div className="searchBox w-full transition-all">
                <Search />
              </div>
              <div className="accordion w-full pb-5 transition-all">
                <AccordionUi />
              </div>
              <div className=" transition-all location py-5 border-y-[0.5px] border-my_dark_gray w-full gap-5 flex  flex-col">
                <h2 className="text-my_gray text-[16px] font-bold">Store location</h2>
                <Link className="text-my_gray text-[16px] font-bold" to="/login">Log In / Sign Up</Link>
                <div className="text-my_gray text-[16px] font-bold">0708559001</div>
                <div>
                
                </div>
              </div>
              <div className="socialIcons">

                <ul className="flex items-center gap-4 ">
                  <li className="w-5 h-5 flex items-center justify-center bg-my_white rounded-[100%] p-4"><Link to='#'><i class="fa-brands fa-twitter text-[16px] text-my_gray_Text"></i></Link></li>
                  <li className="w-5 h-5 flex items-center justify-center bg-my_white rounded-[100%] p-4"><Link to='#'><i class="fa-brands fa-instagram text-[16px] text-my_gray_Text"></i></Link></li>
                  <li className="w-5 h-5 flex items-center justify-center bg-my_white rounded-[100%] p-4"><Link to='#'><i class="fa-brands fa-facebook text-[16px] text-my_gray_Text"></i></Link></li>
                  <li className="w-5 h-5 flex items-center justify-center bg-my_white rounded-[100%] p-4"><Link to='#'><i class="fa-brands fa-google text-[16px] text-my_gray_Text"></i></Link></li>
                  <li className="w-5 h-5 flex items-center justify-center bg-my_white rounded-[100%] p-4"><Link to='#'><i class="fa-brands fa-linkedin text-[16px] text-my_gray_Text"></i></Link></li>

                </ul>


              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SheetUi;
