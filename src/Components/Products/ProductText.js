import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Row, Col} from 'react-bootstrap';
import {Link, useParams} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GetSpecificProductHook from "../../hook/product/getSpecificProductHook";
import notify from "../../hook/toastNotification";
import {createCart} from "../../redux/actions/cartAction";

const ProductText = () => {
    const { id } = useParams();
    const [ data ] = GetSpecificProductHook(id);
    console.log(data)

    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    const clickAddCart = async ()=> {
        setLoading(true);
        await dispatch(createCart({
            productId: data.id,
        }));
        setLoading(false);
    }

    const res = useSelector(state => state.cartReducer.createCart);

    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res)
                if (res.status === 201) {
                    notify('Add product to cart success', 'success');
                } else if (res.status === 400) {
                    notify('Product already exists', 'error');
                } else {
                    notify('Username unauthorized please login..', 'error');
                }
            }
        }
    }, [loading]);

    return (
        <div>
            <Row>
                <Col md="8" className="mt-4">
                    <div className="cat-text d-inline">Category :</div>
                    <div className="brand-text d-inline mx-1">{data.categoryId ?  data.categoryId.name.en : ''}</div>
                </Col>
            </Row>

            <Row>
                <Col md="8" className="mt-4">
                    <div className="cat-text d-inline">Brand :</div>
                    <div className="brand-text d-inline mx-1">Apple</div>
                </Col>
            </Row>

            <Row>
                <Col md="8" className="mt-1 d-flex">
                    <div
                        className="color ms-2 border"
                        style={{ backgroundColor: "#E52C2C" }}>
                    </div>
                    <div
                        className="color ms-2 border "
                        style={{ backgroundColor: "white" }}>
                    </div>
                    <div
                        className="color ms-2 border"
                        style={{ backgroundColor: "black" }}>
                    </div>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col md="8">
                    <div className="cat-text d-inline">Details :</div>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col md="10">
                    <div className="product-description d-inline">
                        Felobes Abd Sadek Bebawy Felobes Abd Sadek Bebawy
                        Felobes Abd Sadek Bebawy Felobes Abd Sadek Bebawy
                        Felobes Abd Sadek Bebawy Felobes Abd Sadek Bebawy
                        Felobes Abd Sadek Bebawy Felobes Abd Sadek Bebawy
                    </div>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col md="12">
                    <Link to={`/cart`} style={{ textDecoration: 'none' }}>
                        <div className="product-price d-inline px-3 py-3 border">{data.price || 1000} EGP</div>
                    </Link>
                    <div onClick={clickAddCart} className="product-cart-add px-3 py-3 d-inline mx-3">Add Cart</div>
                </Col>
            </Row>

            <ToastContainer />
        </div>
    )
}

export default ProductText