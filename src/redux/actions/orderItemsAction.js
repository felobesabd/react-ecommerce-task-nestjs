import {
    ADD_ORDER_ITEMS,
    ALL_ORDERS_ITEMS,
    GET_SPECIFIC_ORDER_ITEMS,
    DELETE_ORDER_ITEMS,
    GET_TOTAL_PRICE
} from "../types";
import { useInsertDataHooks } from "../../hooks/useInsertDate";
import {useGetDataToken} from "../../hooks/useGetData";
import {useDeleteDataHooks} from "../../hooks/useDeleteDate";

export const addOrderItems = (body)=> async (dispatch)=> {
    try {
        const res = await useInsertDataHooks(`orderItems`, body);
        return dispatch({
            type: ADD_ORDER_ITEMS,
            payload: res,
        })
    } catch (e) {
        console.log(e)
        return dispatch({
            type: ADD_ORDER_ITEMS,
            payload: e.response,
        })
    }
}

export const allOrderItemAction = (orderId)=> async (dispatch)=> {
    try {
        const res = await useGetDataToken(`orderItems/all/${orderId}`);
        return dispatch({
            type: ALL_ORDERS_ITEMS,
            payload: res,
        })
    } catch (e) {
        console.log(e)
        return dispatch({
            type: ALL_ORDERS_ITEMS,
            payload: e.response,
        })
    }
}

// export const deleteOrderAction = (id)=> async (dispatch)=> {
//     try {
//         const res = await useDeleteDataHooks(`order/${id}`);
//         return dispatch({
//             type: DELETE_ORDER,
//             payload: res,
//         })
//     } catch (e) {
//         console.log(e)
//         return dispatch({
//             type: DELETE_ORDER,
//             payload: e.response,
//         })
//     }
// }