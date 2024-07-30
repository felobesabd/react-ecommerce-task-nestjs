import React, {useEffect, useState} from 'react';
import { Row } from 'react-bootstrap';

import UserAllOrderItem from './UserAllOrderItem';
import AllOrdersHook from "../../hook/user/all-orders-hook";

const UserAllOrder = () => {
    const [res, loading, user] = AllOrdersHook()

    return (
        <div>
            <div className="admin-content-text">Welcome {user.username || ""}</div>
            <Row className='justify-content-between'>
                {
                    loading === false ? (
                        res && res.length > 0 ? (
                            res.map((item, index) => {
                                return (
                                    <UserAllOrderItem key={index} order={item}/>
                                )
                            })
                        ): <h3>Not found orders for user {user.username || ""}</h3>
                    ) : null
                }
            </Row>
        </div>
    )
}

export default UserAllOrder;