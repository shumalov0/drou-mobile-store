
import React from 'react'
import RecendImg from '../../Assets/Image/blogimg.webp'
const RecentCard = () => {
  return (
    <div className='flex items-start gap-3 pb-4 border-b-[1px] border-b-my_dark_gray'>
        <div className="left max-w-[90px]">
            <img className='w-full' src={RecendImg} alt="recend card" />
        </div>
        <div className="right">
            <div className="title text-[15px] text-[#333] font-semibold pb-3">
            Music magnate headphones
            </div>
            <div className="date text-[#444] hover:text-my_orange transition-all duration-200">
            Jan 21, 2023
            </div>
        </div>

    </div>
  )
}

export default RecentCard