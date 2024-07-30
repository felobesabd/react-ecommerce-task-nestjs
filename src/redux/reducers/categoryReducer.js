import {CATCH_ERROR, GET_ALL_CATEGORY, GET_SPECIFIC_CATEGORY} from "../types";

const initial = {
    category: [],
    specificCategory: [],
    loading: true
}

const categoryReducer = (state = initial, action)=> {
    switch (action.type) {
        case GET_ALL_CATEGORY:
            return {
                ...state,
                category: action.payload,
                loading: false
            }

        case GET_SPECIFIC_CATEGORY:
            return {
                ...state,
                specificCategory: action.payload,
                loading: false
            }

        case CATCH_ERROR:
            return {
                category: action.payload,
                loading: true
            }
        default:
            return state;
    }
}

export default categoryReducer;