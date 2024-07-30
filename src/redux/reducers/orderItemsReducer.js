import {
    ADD_ORDER_ITEMS,
    ALL_ORDERS_ITEMS,
    GET_SPECIFIC_ORDER_ITEMS,
    DELETE_ORDER_ITEMS,
} from "../types";

const initial = {
    addOrderItems: [],
    allOrderItems: [],
}

const orderItemsReducer = (state = initial, action)=> {
    switch (action.type) {
        case ADD_ORDER_ITEMS:
            return {
                ...state,
                addOrderItems: action.payload,
            }
        case ALL_ORDERS_ITEMS:
            return {
                ...state,
                allOrderItems: action.payload,
            }
        default:
            return state;
    }
}

export default orderItemsReducer;