import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts} from "../../redux/actions/productAction";
import {getUserWishlist} from "../../redux/actions/wishlistAction";

const AllProductWishlistHook = ()=> {

    const dispatch = useDispatch();

    const [load, setLoad] = useState(true)
    const [wishlist, setWishlist] = useState([])

    useEffect(()=> {
        dispatch(getAllProducts())

        const getWishlist = async ()=> {
            setLoad(true)
            await dispatch(getUserWishlist());
            setLoad(false)
        }

        getWishlist();
    }, [])

    const data = useSelector(state => state.productReducer.product);
    const loading = useSelector(state => state.productReducer.loading);

    const res = useSelector(state => state.wishlistReducer.getWishlist);

    useEffect(()=> {
        if (localStorage.getItem('token') !== null) {
            if (load === false) {
                if (res.length > 0) {
                    console.log(res)
                    const mappingRes = res?.map((item) => item.wishlist_product);
                    setWishlist(mappingRes);
                } else {
                    setWishlist([])
                }
            }
        }
    }, [load])

    return [data, res, loading, wishlist];
}

export default AllProductWishlistHook;