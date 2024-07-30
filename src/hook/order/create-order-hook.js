import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {addOrderAction} from "../../redux/actions/orderAction";
import notify from "../toastNotification";

const CreateOrderHook = ()=> {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    const clickAddOrder = async ()=> {
        setLoading(true);
        await dispatch(addOrderAction());
        setLoading(false);
    }

    const res = useSelector(state => state.orderReducer.addOrder);

    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res);
                if (res.status === 201) {
                    notify('Add order success', 'success');
                    setTimeout(() => {
                        window.location.reload(false);
                    }, 1500);
                } else if (res.status === 400) {
                    notify(res.data.message, 'error');
                } else if (res.status === 404) {
                    notify('Not found product in cart..', 'error');
                } else if (res.status === 401) {
                    notify('Username unauthorized please login..', 'error');
                }
            }
        }
    }, [loading]);

    return [clickAddOrder];
}

export default CreateOrderHook;