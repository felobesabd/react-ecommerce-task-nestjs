import {GET_ALL_CART, CREATE_CART, DELETE_PRODUCT_FROM_CART, UPDATE_CART, GET_TOTAL_PRICE} from "../types";

const initial = {
    createCart: [],
    allCart: [],
    totalPrice: [],
    updateCart: [],
    deleteOne: [],
}

const cartReducer = (state = initial, action)=> {
    switch (action.type) {
        case CREATE_CART:
            return {
                ...state,
                createCart: action.payload,
            }
        case GET_ALL_CART:
            return {
                ...state,
                allCart: action.payload,
            }
        case GET_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: action.payload,
            }
        case UPDATE_CART:
            return {
                ...state,
                updateCart: action.payload,
            }
        case DELETE_PRODUCT_FROM_CART:
            return {
                ...state,
                deleteOne: action.payload,
            }
        default:
            return state;
    }
}

export default cartReducer;