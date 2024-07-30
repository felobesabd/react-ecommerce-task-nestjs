import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {allOrdersAction} from "../../redux/actions/orderAction";

const AllOrdersHook = ()=> {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState('');

    useEffect(()=> {
        if (localStorage.getItem('user') !== null) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }
    }, []);

    useEffect(() => {
        const getAllOrders = async ()=> {
            setLoading(true);
            await dispatch(allOrdersAction());
            setLoading(false);
        }

        getAllOrders();
    }, [])

    const res = useSelector(state => state.orderReducer.allOrders);

    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res);
                // if (res.status === 200) {
                //     notify('Updated user success', 'success');
                // } else if (res.status === 401) {
                //     notify('Username unauthorized please login..', 'error');
                // }
            }
        }
    }, [loading]);

    return [res, loading, user];
}

export default AllOrdersHook;