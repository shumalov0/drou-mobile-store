
import React from 'react'
import ContactArea from '../HomeUi/ContactArea';
import BigDiscount from '../HomeUi/BigDiscount';
import HurryUp from '../HomeUi/hurryUp';
import Banner from '../HomeUi/Banner';
import AppleSlider from '../HomeUi/AppleSlider';
import TrendingCategories from '../HomeUi/TrendingCategories';
import LastestProduct from '../HomeUi/LastestProduct';

const Home = () => {
  return (
    < >
        <AppleSlider/>
        <TrendingCategories/>
        <Banner/>
        <LastestProduct/>
        <HurryUp/>
        <BigDiscount/>
        <ContactArea/>

    </>
  )
}

export default Home