
import React from 'react'
import { Link } from "react-router-dom";
import BlogCard from './BlogCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
const BlogEvents = () => {
  return (
    <div className='py-11'>
        <div className="container mx-auto px-8">
                <h2 className='font-semibold text-[30px] text-my_gray_Text'>Blog & Events</h2>
                <div className="blogList w-full">
          <Carousel className="">
            <CarouselContent>
              <CarouselItem className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5  ">
                <Link to='/blogDetail' >
                <BlogCard/>
                </Link>
              </CarouselItem>
              <CarouselItem className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5  ">
                <Link to='/blogDetail' >
                <BlogCard/>
                </Link>
              </CarouselItem>
              <CarouselItem className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5  ">
                <Link to='/blogDetail' >
                <BlogCard/>
                </Link>
              </CarouselItem>
              <CarouselItem className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5  ">
                <Link to='/blogDetail' >
                <BlogCard/>
                </Link>
              </CarouselItem>
              <CarouselItem className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5  ">
                <Link to='/blogDetail' >
                <BlogCard/>
                </Link>
              </CarouselItem>
              <CarouselItem className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5  ">
                <Link to='/blogDetail' >
                <BlogCard/>
                </Link>
              </CarouselItem>
              <CarouselItem className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5  ">
                <Link to='/blogDetail' >
                <BlogCard/>
                </Link>
              </CarouselItem>
              <CarouselItem className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5  ">
                <Link to='/blogDetail' >
                <BlogCard/>
                </Link>
              </CarouselItem>

            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
                </div>
        </div>
    </div>
  )
}

export default BlogEvents