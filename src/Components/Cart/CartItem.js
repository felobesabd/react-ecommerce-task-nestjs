import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Col, Row} from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';

import mobile from '../../images/mobile.png';
import deleteIcon from '../../images/delete.png';
import notify from "../../hook/toastNotification";
import DeleteProductFromCart from "../../hook/cart/delete-product-from-cart";
import UpdateCartQuantityHook from "../../hook/cart/update-cart-quantity-hook";

const CartItem = ({ cart }) => {
    console.log(cart);
    const [ clickDelete ] = DeleteProductFromCart(cart);
    const [itemCount, onChangeCount, handleUpdateCart] = UpdateCartQuantityHook(cart);

    return (
        <Col xs="12" className="cart-item-body my-2 d-flex px-2">
            <img width="160px" height="197px" src={mobile} alt="" />
            <div className="w-100">
                <Row className="justify-content-between">
                    <Col sm="12" className=" d-flex flex-row justify-content-between">
                        <div className="d-inline pt-2 cat-text">{cart.product.name || ''}</div>
                        <div className="d-flex pt-2 " style={{ cursor: "pointer" }}>
                            <img src={deleteIcon} alt="" width="20px" height="24px" />
                            <div className="cat-text d-inline me-2" onClick={clickDelete}>Delete</div>
                        </div>
                    </Col>
                </Row>

                <Row className="justify-content-center mt-2">
                    <Col sm="12" className=" d-flex flex-row justify-content-start">
                        <div className="d-inline pt-2 cat-title">
                            iPhone Mobile 128G 105px
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col sm="12" className="mt-1">
                        <div className="cat-text d-inline">Brand :</div>
                        <div className="brand-text d-inline mx-1">Apple</div>
                    </Col>
                </Row>

                <Row className="justify-content-between">
                    <Col sm="12" className=" d-flex flex-row justify-content-between">
                        <div className="d-inline pt-2 d-flex align-items-center">
                            <div className="cat-text  d-inline">Quantity</div>
                            <input
                                value={itemCount}
                                onChange={onChangeCount}
                                className="mx-2 "
                                type="number"
                                style={{ width: "40px", height: "25px" }}
                            />
                            <Button onClick={handleUpdateCart} className="btn btn-dark" >implement</Button>
                        </div>
                        <div className="d-inline pt-2 brand-text">{cart.product.price * itemCount} EGP</div>
                    </Col>
                </Row>
            </div>

            <ToastContainer />
        </Col>
    )
}

export default CartItem