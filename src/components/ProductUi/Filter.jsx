import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Checkbox } from "../../components/ui/checkbox";

const Filter = ({title}) => {
  return (
    <div className=" bg-bg_white">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
      
            <h2 className="text-[#323232] text-[20px]">{title}</h2>
          </AccordionTrigger>
          <AccordionContent>
            <h5 className="py-5 text-my_gray_Text"> 0 selected</h5>
            <ul className="flex flex-col gap-3 ">
              <li className="flex items-center gap-3  cursor-pointer">
                <Checkbox id="terms2"  />
                <label
                  htmlFor="terms2"
                  className="text-sm   text-my_gray_Text cursor-pointer"
                >
                  Accept terms and conditions
                </label>
              </li>
              <li className="flex items-center gap-3  cursor-pointer">
                <Checkbox id="terms3"  />
                <label
                  htmlFor="terms3"
                  className="text-sm   text-my_gray_Text cursor-pointer"
                >
                  Accept terms and conditions
                </label>
              </li>
              <li className="flex items-center gap-3  cursor-pointer">
                <Checkbox id="terms4"  />
                <label
                  htmlFor="terms4"
                  className="text-sm   text-my_gray_Text cursor-pointer"
                >
                  Accept terms and conditions
                </label>
              </li>

            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Filter;
