import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import LoginHook from "../../hook/auth/loginHook";

const LoginPage = () => {

    const [login, password, onChangeLogin, onChangePassword, onSubmit] = LoginHook();

    return (
        <Container style={{ minHeight: "680px" }}>
            <Row className="py-5 d-flex justify-content-center ">
                <Col sm="12" className="d-flex flex-column ">
                    <label className="mx-auto title-login">Sign In</label>
                    <input
                        onChange={onChangeLogin}
                        value={login}
                        placeholder="login (email-username)"
                        type="text"
                        className="user-input my-3 text-center mx-auto"
                    />
                    <input
                        onChange={onChangePassword}
                        value={password}
                        placeholder="Password..."
                        type="password"
                        className="user-input text-center mx-auto"
                    />

                    <button onClick={onSubmit} className="btn-login mx-auto mt-4">Sign In</button>

                    <label className="mx-auto my-4">
                        Don't have an account?{" "}
                        <Link to="/register" style={{textDecoration:'none'}}>
                                <span style={{ cursor: "pointer" }} className="text-danger">
                                    Click here
                                </span>
                        </Link>
                    </label>
                </Col>

                <label className="mx-auto my-4">
                    <Link to="/admin/allproducts" style={{textDecoration:'none'}}>
                        <span style={{ cursor: "pointer" }} className="text-danger">
                            الدخول ادمن
                        </span>
                    </Link>

                    <Link to="/user/allorders" style={{textDecoration:'none'}}>
                        <span style={{ cursor: "pointer" }} className="text-danger mx-3">
                            الدخول مستخدم
                        </span>
                    </Link>
                </label>
            </Row>

            <ToastContainer />
        </Container>
    )
}

export default LoginPage