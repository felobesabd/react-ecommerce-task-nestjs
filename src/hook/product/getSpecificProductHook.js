import {useDispatch, useSelector} from "react-redux";
import {getSpecificProduct} from "../../redux/actions/productAction";
import React , {useEffect} from "react";

const GetSpecificProductHook = (id)=> {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getSpecificProduct(id))
    }, [])

    const data = useSelector(state => state.productReducer.specificProduct);
    const loading = useSelector(state => state.productReducer.loading);

    if (data) {
        return [data];
    } else {
        return [];
    }
}

export default GetSpecificProductHook;