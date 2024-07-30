import {CREATE_USER, LOGIN_USER, UPDATE_USER} from "../types";
import { useInsertDataHooks } from "../../hooks/useInsertDate";
import {useUpdateDate} from "../../hooks/useUpdateDate";


export const createUser = (data)=> async (dispatch)=> {
    try {
        const res = await useInsertDataHooks('user/signup', data);
        return dispatch({
            type: CREATE_USER,
            payload: res,
        })
    } catch (e) {
        console.log(e)
        return dispatch({
            type: CREATE_USER,
            payload: e.response,
        })
    }
}

export const loginUser = (data)=> async (dispatch)=> {
    try {
        const res = await useInsertDataHooks('user/login', data);
        return dispatch({
            type: LOGIN_USER,
            payload: res,
        })
    } catch (e) {
        console.log(e)
        return dispatch({
            type: LOGIN_USER,
            payload: e.response,
        })
    }
}

export const updateUser = (data)=> async (dispatch)=> {
    try {
        const res = await useUpdateDate('user/updateMe', data);
        return dispatch({
            type: UPDATE_USER,
            payload: res,
        })
    } catch (e) {
        console.log(e)
        return dispatch({
            type: UPDATE_USER,
            payload: e.response,
        })
    }
}
