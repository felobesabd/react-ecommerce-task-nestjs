import {ADD_TO_WISHLIST, DELETE_FROM_WISHLIST, GET_USER_WISHLIST} from "../types";
import { useInsertDataHooks } from "../../hooks/useInsertDate";
import {useDeleteDataHooks} from "../../hooks/useDeleteDate";
import { useGetDataToken } from "../../hooks/useGetData";

export const getUserWishlist = ()=> async (dispatch)=> {
    try {
        const res = await useGetDataToken(`wishlist`);
        return dispatch({
            type: GET_USER_WISHLIST,
            payload: res,
        })
    } catch (e) {
        return dispatch({
            type: GET_USER_WISHLIST,
            payload: e.response,
        })
    }
}

export const addToWishlist = (body)=> async (dispatch)=> {
    try {
        const res = await useInsertDataHooks('wishlist', body);
        return dispatch({
            type: ADD_TO_WISHLIST,
            payload: res,
        })
    } catch (e) {
        return dispatch({
            type: ADD_TO_WISHLIST,
            payload: e.response,
        })
    }
}

export const deleteFromWishlist = (prodId)=> async (dispatch)=> {
    try {
        const res = await useDeleteDataHooks(`wishlist/${prodId}`);
        return dispatch({
            type: DELETE_FROM_WISHLIST,
            payload: res,
        })
    } catch (e) {
        console.log('e' + e)
        return dispatch({
            type: DELETE_FROM_WISHLIST,
            payload: e.response,
        })
    }
}

