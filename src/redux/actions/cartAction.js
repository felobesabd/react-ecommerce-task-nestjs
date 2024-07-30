import {
    CREATE_CART, DELETE_PRODUCT_FROM_CART,
    GET_ALL_CART, UPDATE_CART, GET_TOTAL_PRICE
} from "../types";
import { useInsertDataHooks } from "../../hooks/useInsertDate";
import { useGetDataToken } from "../../hooks/useGetData";
import { useDeleteDataHooks } from "../../hooks/useDeleteDate";
import {useUpdateDate} from "../../hooks/useUpdateDate";


export const createCart = (body)=> async (dispatch)=> {
    try {
        const res = await useInsertDataHooks(`cart`, body);
        return dispatch({
            type: CREATE_CART,
            payload: res,
        })
    } catch (e) {
        console.log(e)
        return dispatch({
            type: CREATE_CART,
            payload: e.response,
        })
    }
}


export const getAllCarts = ()=> async (dispatch)=> {
    try {
        const res = await useGetDataToken(`cart`);
        return dispatch({
            type: GET_ALL_CART,
            payload: res,
        })
    } catch (e) {
        console.log(e)
        return dispatch({
            type: GET_ALL_CART,
            payload: e.response,
        })
    }
}

export const getTotalPrice = ()=> async (dispatch)=> {
    try {
        const res = await useGetDataToken(`cart/totalPrice`);
        return dispatch({
            type: GET_TOTAL_PRICE,
            payload: res,
        })
    } catch (e) {
        console.log(e)
        return dispatch({
            type: GET_TOTAL_PRICE,
            payload: e.response,
        })
    }
}

export const updateCart = (id, body)=> async (dispatch)=> {
    try {
        const res = await useUpdateDate(`cart/${id}`, body);
        return dispatch({
            type: UPDATE_CART,
            payload: res,
        })
    } catch (e) {
        console.log(e)
        return dispatch({
            type: UPDATE_CART,
            payload: e.response,
        })
    }
}

export const deleteOneFromCart = (id)=> async (dispatch)=> {
    try {
        const res = await useDeleteDataHooks(`cart/${id}`);
        return dispatch({
            type: DELETE_PRODUCT_FROM_CART,
            payload: res,
        })
    } catch (e) {
        console.log(e)
        return dispatch({
            type: DELETE_PRODUCT_FROM_CART,
            payload: e.response,
        })
    }
}
