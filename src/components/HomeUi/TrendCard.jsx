
import React from 'react'
import Iphone from '../../Assets/Image/iphoneTrend.avif'
const TrendCard = () => {
  return (
    <div className='max-w-[220px] flex flex-col items-center shadow px-9 py-9 mt-11 '>
        <img src={Iphone} className='w-full object-cover transition-all duration-500 hover:scale-110 ease-in-out ' alt="phone" />
        <div className="boxText text-my_gray_Text text-[18px]">
            iPhone
        </div>
    </div>
  )
}

export default TrendCard;