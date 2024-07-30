import React from 'react'
import { Row } from 'react-bootstrap';

import Pagination from '../Uitily/Pagination';
import AllProductWishlistHook from "../../hook/product/allproducts-wishlist";
import ProductCarouselItem from "../Products/ProductCarouselItem";

const UserWishlist = () => {

    const [data, res, loading, wishlist] = AllProductWishlistHook();
    console.log(res);
    console.log(data.map((item) => item))

    const felo = data.map((item) => item);
    console.log(felo)

    return (
        <div>
            <div className="admin-content-text pb-4">Wishlist</div>
            <Row className='justify-content-start'>
                <ProductCarouselItem />
            </Row>
            <Pagination />
        </div>
    )
}

export default UserWishlist;