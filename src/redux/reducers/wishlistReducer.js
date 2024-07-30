import {ADD_TO_WISHLIST, DELETE_FROM_WISHLIST, GET_USER_WISHLIST} from "../types";

const initial = {
    addToWishlist: [],
    deleteFromWishlist: [],
    getWishlist: [],
}

const wishlistReducer = (state = initial, action)=> {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            return {
                ...state,
                addToWishlist: action.payload,
            }
        case DELETE_FROM_WISHLIST:
            return {
                ...state,
                deleteFromWishlist: action.payload,
            }
        case GET_USER_WISHLIST:
            return {
                ...state,
                getWishlist: action.payload,
            }
        default:
            return state;
    }
}

export default wishlistReducer;