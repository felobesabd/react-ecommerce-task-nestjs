import {useDispatch, useSelector} from "react-redux";
import { getProductsForCategory } from "../../redux/actions/productAction";
import React , {useEffect} from "react";
import { getSpecificCategory } from "../../redux/actions/categoryAction";

const GetProductsForCategoryHook = (id)=> {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getProductsForCategory(id));
        dispatch(getSpecificCategory(id));
    }, [])

    const data = useSelector(state => state.productReducer.productsCategory);
    const loading = useSelector(state => state.productReducer.loading);

    const category = useSelector(state => state.categoryReducer.specificCategory);

    console.log(loading)


    return [data, category, loading]
}

export default GetProductsForCategoryHook;