
import React from 'react'
import ProductCard from './ProductCard'
const PopularProduct = () => {
  return (
    <div className='py-11'>
        <div className="container mx-auto px-8">
            <h1 className='font-semibold text-[30px] text-my_gray_Text'>Popular Products</h1>
            <div className="boxList pt-10 flex items-center flex-wrap gap-5 justify-center">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    </div>
  )
}

export default PopularProduct