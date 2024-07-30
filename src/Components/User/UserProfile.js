import React from 'react';
import {Row, Col, Modal, Button} from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';

import deleteIcon from '../../images/delete.png';
import ProfileHook from "../../hook/user/profile-hook";

const UserProfile = () => {

    const [user, show, handelSubmit, handleClose, handleShow, username, email, onChangeEmail, onChangeName] = ProfileHook()

    return (
        <div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>
                        <div className='font'>Edit profile</div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        value={username}
                        onChange={onChangeName}
                        type="text"
                        className="input-form font d-block mt-3 px-3"
                        placeholder="username"
                    />
                    <input
                        value={email}
                        onChange={onChangeEmail}
                        type="email"
                        className="input-form font d-block mt-3 px-3"
                        placeholder="email"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button className='font' variant="success" onClick={handleClose}>
                        cancel
                    </Button>
                    <Button className='font' variant="dark" onClick={handelSubmit}>
                        save edit
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="admin-content-text">Profile</div>
            <div className="user-address-card my-3 px-2">
                <Row className="d-flex justify-content-between pt-2">
                    <Col xs="6" className="d-flex">
                        <div className="p-2">Name:</div>
                        <div className="p-1 item-delete-edit">{user.username}</div>
                    </Col>
                    <Col xs="6" className="d-flex justify-content-end">
                        <div className="d-flex align-items-sm-baseline mx-2" onClick={handleShow}>
                            <img
                                alt=""
                                className="ms-1 mt-2"
                                src={deleteIcon}
                                height="20px"
                                width="20px"
                            />
                            <p className="item-delete-edit">Edit</p>
                        </div>
                    </Col>
                </Row>

                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2">Email :</div>
                        <div className="p-1 item-delete-edit">{user.email}</div>
                    </Col>
                </Row>
            </div>
            <ToastContainer />
        </div>
    )
}

export default UserProfile;