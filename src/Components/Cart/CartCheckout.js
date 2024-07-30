import React, {useEffect, useState} from 'react';
import { Row, Col } from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import { Link } from 'react-router-dom';

import notify from "../../hook/toastNotification";
import { getTotalPrice } from "../../redux/actions/cartAction";
import CreateOrderHook from "../../hook/order/create-order-hook";

const CartCheckout = () => {
    const [clickAddOrder] = CreateOrderHook();

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const get = async ()=> {
            setLoading(true);
            await dispatch(getTotalPrice())
            setLoading(false);
        }

        get()
    }, [])

    const res = useSelector(state => state.cartReducer.totalPrice);
    // const [res, setRes] = useState([]);
    // setRes(useSelector(state => state.cartReducer.totalPrice));

    const totalPrice = res ? res[0]?.sum : 0;

    // useEffect(() => {
    //     if (loading === false) {
    //         if (res) {
    //
    //         }
    //     }
    // }, [res]);

    return (
        <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
            <Col xs="12" className="d-flex  flex-column  ">
                <div className="product-price d-inline w-100 my-3  border">{totalPrice} EGP</div>
                <div
                    // to="/order/paymethoud"
                    // style={{ textDecoration: "none" }}
                    className="product-cart-add  d-inline ">
                    <button onClick={clickAddOrder} className="product-cart-add w-100 px-2">checkout</button>
                </div>
            </Col>
        </Row>
    )
}

export default CartCheckout;