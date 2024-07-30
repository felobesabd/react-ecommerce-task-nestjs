import {CATCH_ERROR, GET_ALL_CATEGORY, GET_SPECIFIC_CATEGORY} from "../types";
import { getDataHooks } from "../../hooks/useGetData";


export const getAllCategory = ()=> async (dispatch)=> {
    try {
        const res = await getDataHooks('category');
        return dispatch({
            type: GET_ALL_CATEGORY,
            payload: res,
        })
    } catch (e) {
        console.log(e)
        return dispatch({
            type: GET_ALL_CATEGORY,
            payload: e.response,
        })
    }
}

export const getSpecificCategory = (id)=> async (dispatch)=> {
    try {
        const res = await getDataHooks(`category/${id}`);
        return dispatch({
            type: GET_SPECIFIC_CATEGORY,
            payload: res,
        })
    } catch (e) {
        console.log(e)
        return dispatch({
            type: GET_SPECIFIC_CATEGORY,
            payload: e.response,
        })
    }
}