import {CATCH_ERROR, GET_ALL_PRODUCT, GET_PRODUCTS_FOR_CATEGORY, GET_SPECIFIC_PRODUCT} from "../types";

const initial = {
    product: [],
    specificProduct: [],
    productsCategory: [],
    loading: true
}

const productReducer = (state = initial, action)=> {
    switch (action.type) {
        case GET_ALL_PRODUCT:
            return {
                ...state,
                product: action.payload,
                loading: false
            }

            case GET_SPECIFIC_PRODUCT:
            return {
                ...state,
                specificProduct: action.payload,
                loading: false
            }

            case GET_PRODUCTS_FOR_CATEGORY:
            return {
                ...state,
                productsCategory: action.payload,
                loading: false
            }

        case CATCH_ERROR:
            return {
                product: action.payload,
                loading: true
            }

        default:
            return state;
    }
}

export default productReducer;