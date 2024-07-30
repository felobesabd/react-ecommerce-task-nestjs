import React , { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";

const GetAllCategoryHook = ()=> {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getAllCategory())
    }, [])

    const data = useSelector(state => state.categoryReducer.category);
    const loading = useSelector(state => state.categoryReducer.loading);

    return [data, loading];
}

export default GetAllCategoryHook;