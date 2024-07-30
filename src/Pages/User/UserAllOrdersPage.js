import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import UserSideBar from '../../Components/User/UserSideBar';
import UserAllOrder from '../../Components/User/UserAllOrder';

const UserAllOrdersPage = () => {
    return (
        <Container >
            <Row className='py-3 d-flex justify-content-between'>
                <Col sm="3" xs="2" md="3">
                    <UserSideBar />
                </Col>

                <Col sm="9" xs="10" md="8">
                    <UserAllOrder />
                </Col>
            </Row>
        </Container>
    )
}


export default UserAllOrdersPage