import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteOneFromCart} from "../../redux/actions/cartAction";
import notify from "../toastNotification";

const DeleteProductFromCart = (cart)=> {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    const clickDelete = async ()=> {
        setLoading(true);
        await dispatch(deleteOneFromCart(cart.id));
        setLoading(false);
    }

    const resDeleteCart = useSelector(state => state.cartReducer.deleteOne);

    useEffect(() => {
        if (loading === false) {
            if (resDeleteCart) {
                if (resDeleteCart.status === 204) {
                    notify('Delete product from cart success', 'warn');
                    setTimeout(()=> {
                        window.location.reload(false);
                    }, 1500);
                }
            }
        }
    }, [loading]);

    return [clickDelete];
}

export default DeleteProductFromCart;