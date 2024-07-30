import React from 'react';
import HomeCategory from '../../Components/Home/HomeCategory';
import ProductsCardContainer from "../../Components/Products/ProductsCardContainer";
import DiscountSection from './../../Components/Home/DiscountSection';

const HomePage = () => {
    return (
        <>
            {/*<Slider />*/}
            <DiscountSection />
            <HomeCategory title="Category" btntitle="More" pathText="/allcategory" />
            <ProductsCardContainer />
        </>
    )
}

export default HomePage