import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const LastestProduct = () => {
  return (
    <div className="py-11">
      <div className="container mx-auto px-8 ">
        <div className="latestHeader flex items-center justify-between">
          <h2 className="font-semibold text-[30px] text-my_gray_Text">
            Latest Products
          </h2>
          <div className="flex items-center gap-3">
            <Link
              className="font-semibold hover:text-my_orange transition-all duration-300 text-my_gray_Text text-[15px]"
              to="/product "
            >
              View all products{" "}
            </Link>
            <span>
              <i class="fa-solid fa-right-long text-my_orange text-[16px] cursor-pointer"></i>
            </span>
          </div>
        </div>
        <div className="productList pt-10">
          <Carousel className="">
            <CarouselContent>
              <CarouselItem className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2">
                <ProductCard />
              </CarouselItem>
              <CarouselItem className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2">
                <ProductCard />
              </CarouselItem>
              <CarouselItem className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2">
                <ProductCard />
              </CarouselItem>
              <CarouselItem className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2">
                <ProductCard />
              </CarouselItem>
              <CarouselItem className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2">
                <ProductCard />
              </CarouselItem>
              <CarouselItem className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2">
                <ProductCard />
              </CarouselItem>
              <CarouselItem className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2">
                <ProductCard />
              </CarouselItem>
              <CarouselItem className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2">
                <ProductCard />
              </CarouselItem>
              <CarouselItem className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2">
                <ProductCard />
              </CarouselItem>
              <CarouselItem className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2">
                <ProductCard />
              </CarouselItem>
              <CarouselItem className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2">
                <ProductCard />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default LastestProduct;
