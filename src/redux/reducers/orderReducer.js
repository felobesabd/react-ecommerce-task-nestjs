import {ADD_ORDER, ALL_ORDERS, DELETE_ORDER} from "../types";

const initial = {
    addOrder: [],
    allOrders: [],
    deleteOrder: [],
}

const orderReducer = (state = initial, action)=> {
    switch (action.type) {
        case ADD_ORDER:
            return {
                ...state,
                addOrder: action.payload,
            }
        case ALL_ORDERS:
            return {
                ...state,
                allOrders: action.payload,
            }
        case DELETE_ORDER:
            return {
                ...state,
                deleteOrder: action.payload,
            }
        default:
            return state;
    }
}

export default orderReducer;