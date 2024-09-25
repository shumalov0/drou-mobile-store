import React from 'react'
import BreadCumb from '../HomeUi/BreadCumb'
import Search from '../HomeUi/Search'
import BlogCardMain from '../BlogUi/BlogCardMain'
import RecentCard from '../BlogUi/RecentCard'
const Blog = () => {
  return (
    <div>
      <BreadCumb page1="Home" mainPage="News"/>
      <div className="container mx-auto px-8 flex flex-col md:flex-row  pt-11 mt-11">
          <div className="  hidden sidebar flex-1 gap-5 md:flex flex-col">
            <div className="search px-[20px] py-[40px] max-w-[290px] bg-bg_white">
                <h2 className='text-[20px] font-semibold mb-[22px] text-my_gray_Text'>Search</h2>
                <Search/>
                
            </div>
            <div className="recentPost px-[20px] py-[40px] max-w-[290px] bg-bg_white">
            <h2 className='text-[20px] font-semibold mb-[22px] text-my_gray_Text'>Recent Post</h2>
            <div className="recendCardList flex flex-col gap-4">
              <RecentCard/>
              <RecentCard/>
              <RecentCard/>
              <RecentCard/>
            </div>

            </div>
            <div className="popularTags px-[20px] py-[40px] max-w-[290px] bg-bg_white">
            <h2 className='text-[20px] font-semibold mb-[22px] text-my_gray_Text flex'>Popular tags</h2>
                <div className="category flex items-center gap-4 flex-wrap">
                  <span className=' py-[3px] px-[12px]  bg-my_white rounded-[26px]  flex items-center justify-center text-my_gray_Text hover:bg-my_orange hover:text-my_white transition-all duration-200 cursor-pointer'>iphone </span>
                  <span className=' py-[3px] px-[12px]  bg-my_white rounded-[26px]  flex items-center justify-center text-my_gray_Text hover:bg-my_orange hover:text-my_white transition-all duration-200 cursor-pointer'>macbook </span>
                  
                </div>
            </div>

          </div>
          <div className="main flex-[2]">
            <div className="blogCardList flex flex-wrap gap-4 items-center justify-center">

           <BlogCardMain/>
           <BlogCardMain/>
           <BlogCardMain/>
           <BlogCardMain/>
           <BlogCardMain/>
           <BlogCardMain/>
           <BlogCardMain/>
           <BlogCardMain/>
           <BlogCardMain/>
            </div>
          </div>
          <div className=" mt-11  md:hidden sidebar  gap-5 flex flex-col">
            <div className="search px-[20px] py-[40px] w-full bg-bg_white">
                <h2 className='text-[20px] font-semibold mb-[22px] text-my_gray_Text'>Search</h2>
                <Search/>
                
            </div>
            <div className="recentPost px-[20px] py-[40px] w-full bg-bg_white">
            <h2 className='text-[20px] font-semibold mb-[22px] text-my_gray_Text'>Recent Post</h2>
            <div className="recendCardList flex flex-col gap-4">
              <RecentCard/>
              <RecentCard/>
              <RecentCard/>
              <RecentCard/>
            </div>

            </div>
            <div className="popularTags px-[20px] py-[40px] w-full bg-bg_white">
            <h2 className='text-[20px] font-semibold mb-[22px] text-my_gray_Text flex'>Popular tags</h2>
                <div className="category flex items-center gap-4 flex-wrap">
                  <span className=' py-[3px] px-[12px]  bg-my_white rounded-[26px]  flex items-center justify-center text-my_gray_Text hover:bg-my_orange hover:text-my_white transition-all duration-200 cursor-pointer'>iphone </span>
                  <span className=' py-[3px] px-[12px]  bg-my_white rounded-[26px]  flex items-center justify-center text-my_gray_Text hover:bg-my_orange hover:text-my_white transition-all duration-200 cursor-pointer'>macbook </span>
                  
                </div>
            </div>

          </div>

      </div>
       
    </div>
  )
}

export default Blog