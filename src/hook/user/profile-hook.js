import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateUser} from "../../redux/actions/authAction";
import notify from "../toastNotification";


const ProfileHook = () => {
    const dispatch = useDispatch()

    let user = []
    if (localStorage.getItem('user') !== null)
        user = JSON.parse(localStorage.getItem("user"))

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [username, setUsername] = useState(user.username)
    const [email, setEmail] = useState(user.email)

    const [loading, setLoading] = useState(true)


    const onChangeName = (event) => {
        event.persist();
        setUsername(event.target.value)
    }

    const onChangeEmail = (event) => {
        event.persist();
        setEmail(event.target.value)
    }

    const handelSubmit = async () => {
        setLoading(true)
        await dispatch(updateUser({
            username,
            email
        }));
        setLoading(false)
        setShow(false);
        // window.location.reload(false);
    }

    const res = useSelector(state => state.authReducer.updatedUser);

    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res)
                if (res.status === 200) {
                    notify('Updated user success', 'success');
                    localStorage.setItem('user', JSON.stringify(res.data));
                    setTimeout(()=> {
                        window.location.reload(false);
                    }, 2000);
                } else if (res.status === 400) {
                    notify('username or email already exist please changed', 'error');
                }
            }
        }
    }, [loading])

    return [user, show, handelSubmit, handleClose, handleShow, username, email, onChangeEmail, onChangeName]
}

export default ProfileHook;