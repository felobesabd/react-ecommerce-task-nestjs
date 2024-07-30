import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import RegisterHook from "../../hook/auth/registerHook";

const RegisterPage = () => {

    const [username, password, email, onChangeEmail, onChangeUsername, onChangePassword, onSubmit] = RegisterHook();

    return (
        <Container style={{ minHeight: "680px" }}>
            <Row className="py-5 d-flex justify-content-center hieght-search">
                <Col sm="12" className="d-flex flex-column ">
                    <label className="mx-auto title-login">Register New Acc</label>

                    <input
                        onChange={onChangeUsername}
                        value={username}
                        placeholder="username..."
                        type="text"
                        className="user-input mt-3 text-center mx-auto"
                    />

                    <input
                        onChange={onChangeEmail}
                        value={email}
                        placeholder="me@example.com"
                        type="text"
                        className="user-input my-3 text-center mx-auto"
                    />

                    <input
                        onChange={onChangePassword}
                        value={password}
                        placeholder="password..."
                        type="password"
                        className="user-input text-center mx-auto"
                    />

                    <button onClick={onSubmit} className="btn-login mx-auto mt-4">Register Acc</button>

                    <label className="mx-auto my-4">
                        You already have an account?{" "}
                        <Link to="/login" style={{ textDecoration: "none" }}>
                            <span style={{ cursor: "pointer" }} className="text-danger">
                                Enter Here
                            </span>
                        </Link>
                    </label>
                </Col>
            </Row>
            <ToastContainer />
        </Container>
    )
}

export default RegisterPage