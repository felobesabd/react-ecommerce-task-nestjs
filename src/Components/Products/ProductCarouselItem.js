import React from 'react'

import ProductCard from "./ProductCard";
import dressShirt from '../../images/dress-shirt-img.png';
import Loader from "../Uitily/Loader";
import AllProductWishlistHook from "../../hook/product/allproducts-wishlist";

const ProductCarouselItem = () => {

    const [data, res, loading, wishlist] = AllProductWishlistHook();

    return (
        <>
            {
                loading === false ? (
                    data ? (
                        data?.map((item, index)=> {
                            return (
                                <ProductCard img={dressShirt} product={item} wishlist={wishlist} key={index} />
                            )
                        })
                    ) : <h3>Not Found Categories</h3>
                ): <Loader />
            }
        </>
    )
}

export default ProductCarouselItem;