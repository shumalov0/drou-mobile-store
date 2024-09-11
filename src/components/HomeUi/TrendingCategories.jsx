import React from "react";
import TrendCard from "./TrendCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const TrendingCategories = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto px-8">
        <h1 className="text-[30px] font-semibold text-my_darkgray_Text">
          Trending Categories
        </h1>
        <div className="trendingCardList">
          <div className="trendBox flex items-center">
            <Carousel className="">
              <CarouselContent>
             
                <CarouselItem className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2">
                  <TrendCard />
                </CarouselItem>
                <CarouselItem className=" sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2">
                  <TrendCard />
                </CarouselItem>
                <CarouselItem className=" sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2">
                  <TrendCard />
                </CarouselItem>
                <CarouselItem className=" sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2">
                  <TrendCard />
                </CarouselItem>
                <CarouselItem className=" sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2">
                  <TrendCard />
                </CarouselItem>
                <CarouselItem className=" sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2">
                  <TrendCard />
                </CarouselItem>
                <CarouselItem className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2">
                  <TrendCard />
                </CarouselItem>
                <CarouselItem className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2">
                  <TrendCard />
                </CarouselItem>
                <CarouselItem className=" sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2">
                  <TrendCard />
                </CarouselItem>
                <CarouselItem className=" sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2">
                  <TrendCard />
                </CarouselItem>
              </CarouselContent>

       
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCategories;
