import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";

import notify from "../toastNotification";
import {createUser} from "../../redux/actions/authAction";

const RegisterHook = ()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [load, setLoad] = useState();

    const onChangeUsername = (e)=> {
        setUsername(e.target.value);
    }
    const onChangeEmail = (e)=> {
        setEmail(e.target.value);
    }
    const onChangePassword = (e)=> {
        setPassword(e.target.value);
    }

    const validation = ()=> {
        if (username.length < 4) {
            notify('username At least 4 letters', 'error');
            return;
        }

        const re = /\S+@\S+\.\S+/;
        if (re.test(email) === false) {
            notify('Invalid email', 'error');
            return;
        }

        if (password.length < 6) {
            notify('password At least 6 letters', 'error');
            return;
        }
    }

    const data = useSelector(state => state.authReducer.newUser);
    // const loading = useSelector(state => state.categoryReducer.loading);

    const onSubmit = async ()=> {
        validation();
        setLoad(true)
            await dispatch(createUser({
                username,
                email,
                password
            }));
        setLoad(false)
    }

    useEffect(()=> {
        if (load === false) {
            if (data) {
                console.log(data);
                if (data.data?.statusCode === 400) {
                    notify('username or email already exist please changed', 'error');
                } else {
                    notify('Register acc successful', 'success');
                    setTimeout(()=> {
                        navigate('/login')
                    }, 3000)
                }
            }
        }
    }, [load])

    return [username, password, email, onChangeEmail, onChangeUsername, onChangePassword, onSubmit];
}

export default RegisterHook;