import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import favOff from '../../images/fav-off.png';
import favOn from '../../images/fav-on.png';
import {addToWishlist, deleteFromWishlist} from "../../redux/actions/wishlistAction";
import notify from "../../hook/toastNotification";

const WishlistAddDeleteHook = (product, wishlist)=> {
    const dispatch = useDispatch();
    const [imageFav, setImageFav] = useState(favOff);
    const statusWishlist = wishlist ? wishlist.some((item) => item === product.id) : '';
    const [isFav, setIsFav] = useState(statusWishlist);
    const [loadingAdd, setLoadingAdd] = useState(true);
    const [loadingRemove, setLoadingRemove] = useState(true);

    useEffect(()=> {
        setIsFav(statusWishlist);
    }, [wishlist])

    const handleIsFav = ()=> {
        if (isFav) {
            removeProductFromWishlist();
        } else {
            addProductToWishlist();
        }
    }

    useEffect(()=> {
        if (isFav === true) {
            setImageFav(favOn)
        } else {
            setImageFav(favOff)
        }
    }, [isFav]);

    const data = useSelector(state => state.wishlistReducer.addToWishlist);
    const res = useSelector(state => state.wishlistReducer.deleteFromWishlist);


    const addProductToWishlist = async ()=> {
        setIsFav(true);
        setImageFav(favOn);

        setLoadingAdd(true);
        await dispatch(addToWishlist({
            wishlist_product: product.id
        }));
        setLoadingAdd(false);
    }

    const removeProductFromWishlist = async ()=> {
        setIsFav(false);
        setImageFav(favOff);

        setLoadingRemove(true);
        await dispatch(deleteFromWishlist(product.id));
        setLoadingRemove(false);
    }

    useEffect(()=> {
        if (loadingAdd === false) {
            // add
            if (data) {
                if (data.status === 201) {
                    console.log(data)
                    notify('Product added to wishlist successfully', 'success');
                }
            }
        }
    }, [loadingAdd]);

    useEffect(()=> {
        if (loadingRemove === false) {
            // delete
            if (res) {
                if (res.status === 200) {
                    console.log(res)
                    notify('Product deleted from wishlist', 'warn');
                }
            }

        }
    }, [loadingRemove]);

    return [imageFav, handleIsFav]
}

export default WishlistAddDeleteHook;