import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Container, Row, Col } from 'react-bootstrap';

import CartCheckout from '../../Components/Cart/CartCheckout';
import CartItem from '../../Components/Cart/CartItem';
import {getAllCarts} from "../../redux/actions/cartAction";

const CartPage = () => {

    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCart = async ()=> {
            setLoading(true);
            await dispatch(getAllCarts())
            setLoading(false);
        }
        getCart();
    }, [])


    const res = useSelector(state => state.cartReducer.allCart);

    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res)
                // if (res.status === 201) {
                //     notify('Add product to cart success', 'success');
                // } else if (res.status === 400) {
                //     notify('Product already exists', 'error');
                // } else {
                //     notify('Username unauthorized please login..', 'error');
                // }
            }
        }
    }, [loading]);

    return (
        <Container style={{ minHeight: '670px' }}>
            <Row>
                <div className='cart-title mt-4'>Cart</div>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Col xs="12" md="9">
                    {
                        loading === false ? (
                            res && res.length > 0 ? (
                                res.map((item, index) => {
                                    return (
                                        <CartItem key={index} cart={item}/>
                                    )
                                })
                            ): <h3>Not found cart for user</h3>
                        ) : null
                    }
                </Col>

                <Col xs="6" md="3">
                    <CartCheckout />
                </Col>
            </Row>
        </Container>
    )
}

export default CartPage;