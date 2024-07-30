import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";

import notify from "../toastNotification";
import {loginUser} from "../../redux/actions/authAction";

const LoginHook = ()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [load, setLoad] = useState(true);

    const onChangeLogin = (e)=> {
        setLogin(e.target.value);
    }
    const onChangePassword = (e)=> {
        setPassword(e.target.value);
    }

    const validation = ()=> {
        // if (login.length < 4) {
        //     notify('username must be longer than or equal to 4 characters', 'error');
        //     return;
        // }

        const re = /\S+@\S+\.\S+/;
        if (re.test(login) === false && login.length < 4) {
            notify('Invalid email', 'error');
            return;
        }

        if (password.length < 6) {
            notify('password At least 6 letters', 'error');
            return;
        }
    }

    const data = useSelector(state => state.authReducer.loginUser);

    const onSubmit = async ()=> {
        validation();
        setLoad(true)
            await dispatch(loginUser({
                login,
                password
            }));
        setLoad(false)
    }

    useEffect(()=> {
        if (load === false) {
            if (data) {
                if (data?.data?.token) {
                    localStorage.setItem('token', data.data.token);
                    localStorage.setItem('user', JSON.stringify(data.data.user));
                    notify('You logged in successfully', 'success');
                    setTimeout(()=> {
                        window.location.href = '/';
                    }, 3000)
                } else if (data.data?.statusCode === 404) {
                    notify('Invalid login or password', 'error');
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                } else {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                }
            }
        }
    }, [load])

    return [login, password, onChangeLogin, onChangePassword, onSubmit];
}

export default LoginHook;