import {ADD_ORDER, ALL_ORDERS, DELETE_ORDER, GET_SPECIFIC_ORDER} from "../types";
import { useInsertDataHooks } from "../../hooks/useInsertDate";
import {useGetDataToken} from "../../hooks/useGetData";
import {useDeleteDataHooks} from "../../hooks/useDeleteDate";

export const addOrderAction = ()=> async (dispatch)=> {
    try {
        const res = await useInsertDataHooks('order');
        return dispatch({
            type: ADD_ORDER,
            payload: res,
        })
    } catch (e) {
        console.log(e)
        return dispatch({
            type: ADD_ORDER,
            payload: e.response,
        })
    }
}

export const allOrdersAction = ()=> async (dispatch)=> {
    try {
        const res = await useGetDataToken('order');
        return dispatch({
            type: ALL_ORDERS,
            payload: res,
        })
    } catch (e) {
        console.log(e)
        return dispatch({
            type: ALL_ORDERS,
            payload: e.response,
        })
    }
}

export const specificOrderAction = (id)=> async (dispatch)=> {
    try {
        const res = await useGetDataToken(`order/${id}`);
        return dispatch({
            type: GET_SPECIFIC_ORDER,
            payload: res,
        })
    } catch (e) {
        console.log(e)
        return dispatch({
            type: GET_SPECIFIC_ORDER,
            payload: e.response,
        })
    }
}

export const deleteOrderAction = (id)=> async (dispatch)=> {
    try {
        const res = await useDeleteDataHooks(`order/${id}`);
        return dispatch({
            type: DELETE_ORDER,
            payload: res,
        })
    } catch (e) {
        console.log(e)
        return dispatch({
            type: DELETE_ORDER,
            payload: e.response,
        })
    }
}