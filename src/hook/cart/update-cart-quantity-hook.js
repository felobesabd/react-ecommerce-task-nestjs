import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import notify from "../../hook/toastNotification";
import { updateCart } from "../../redux/actions/cartAction";

const UpdateCartQuantityHook = (cart)=> {
    const dispatch = useDispatch();

    const [itemCount, setItemCount] = useState(cart.quantity);
    const [loading, setLoading] = useState(true);

    const onChangeCount = (e) => {
        if (e.target.value < 1) {
            return;
        }
        setItemCount(e.target.value);
    }

    const res = useSelector(state => state.cartReducer.updateCart);

    const handleUpdateCart = async ()=> {
        setLoading(true);
        await dispatch(updateCart(cart.id, {
            productId: cart.productId,
            quantity: itemCount
        }));
        setLoading(false);
    }

    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res)
                if (res.status === 200) {
                    notify('Add quantity success', 'success');
                    setTimeout(() => {
                        window.location.reload(false);
                    }, 1000);
                } else {
                    notify('User unauthorized please login..', 'error');
                }
            }
        }
    }, [loading]);

    return [itemCount, onChangeCount, handleUpdateCart];
}

export default UpdateCartQuantityHook;