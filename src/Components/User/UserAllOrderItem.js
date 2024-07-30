import React, {useEffect, useState} from 'react'
import { Row, Col } from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import { ToastContainer } from 'react-toastify';

import iconDelete from '../../images/delete.png';
import DeleteOrderHook from "../../hook/order/delete-order-hook";
import {allOrderItemAction} from "../../redux/actions/orderItemsAction";

const UserAllOrderItem = ({ order }) => {

    const [result, onClickDelete] = DeleteOrderHook(order);
    console.log(order)

    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const get = async ()=> {
            setLoading(true);
            await dispatch(allOrderItemAction(order.orderId))
            setLoading(false);
        }
        get();
    }, [])


    const res = useSelector(state => state.orderItemsReducer.allOrderItems);

    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(order.orderId,res);
            }
        }
    }, [loading]);


    return (
        <div className="user-order mt-2">
            <Row className='justify-content-between align-items-center' style={{marginRight: "-12px", marginLeft: "-12px"}}>
                <div className="py-2 order-title">Order #{order.orderId || 1}</div>
                <div style={{cursor: "pointer"}} onClick={onClickDelete}>
                    <img src={iconDelete} alt='delete' width='20px' height='20px'/>
                    <span>Delete</span>
                </div>
            </Row>

            {
                loading === false ? (
                    res && res.length > 0 ? (
                        res.map((item, index) => {
                            return (
                                <div>{index}</div>
                                // <UserAllOrderCard key={index} products={item}/>
                            )
                        })
                    ): <h3>Not found ordersItem for user</h3>
                ) : null
            }

            <Row className="d-flex justify-content-between">
                <Col xs="6" className="">
                    <div>
                        <div className="d-inline">Status</div>
                        <div className="d-inline mx-2 stat">In progress</div>
                    </div>
                </Col>
                <Col xs="6" className="d-flex justify-content-end">
                    <div>
                        <div className="brand-text">{order.orderId} - {res.length}</div>
                    </div>
                </Col>
            </Row>
            <ToastContainer />
        </div>
    )
}

export default UserAllOrderItem