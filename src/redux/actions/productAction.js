import {CATCH_ERROR, GET_ALL_PRODUCT, GET_SPECIFIC_PRODUCT, GET_PRODUCTS_FOR_CATEGORY} from "../types";
import { getDataHooks } from "../../hooks/useGetData";

export const getAllProducts = ()=> async (dispatch)=> {
    try {
        const res = await getDataHooks('product');
        return dispatch({
            type: GET_ALL_PRODUCT,
            payload: res,
        })
    } catch (e) {
        console.log(e)
        return dispatch({
            type: GET_ALL_PRODUCT,
            payload: e.response,
        })
    }
}

export const getSpecificProduct = (id)=> async (dispatch)=> {
    try {
        const res = await getDataHooks(`product/${id}`);
        console.log(res)
        return dispatch({
            type: GET_SPECIFIC_PRODUCT,
            payload: res,
        })
    } catch (e) {
        console.log(e)
        return dispatch({
            type: GET_SPECIFIC_PRODUCT,
            payload:  e.response,
        })
    }
}

export const getProductsForCategory = (id)=> async (dispatch)=> {
    try {
        const res = await getDataHooks(`product/category/${id}`);
        console.log(res)
        return dispatch({
            type: GET_PRODUCTS_FOR_CATEGORY,
            payload: res,
        })
    } catch (e) {
        console.log(e)
        return dispatch({
            type: GET_PRODUCTS_FOR_CATEGORY,
            payload: e.response,
        })
    }
}