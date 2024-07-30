import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import notify from "../toastNotification";
import {deleteOrderAction} from "../../redux/actions/orderAction";


const DeleteOrderHook = (order)=> {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    const onClickDelete = async ()=> {
        setLoading(true);
        await dispatch(deleteOrderAction(order.orderId));
        setLoading(false);
    }

    const res = useSelector(state => state.orderReducer.deleteOrder);

    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res);
                if (res.status === 204) {
                    notify('Deleted order success', 'warn');
                    setTimeout(()=> {
                        window.location.reload(false);
                    }, 1500)
                } else if (res.status === 404) {
                    notify('Not found order', 'error');
                }
            }
        }
    }, [loading]);

    return [res, onClickDelete]
}

export default DeleteOrderHook;