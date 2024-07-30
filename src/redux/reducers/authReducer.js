import {CREATE_USER, LOGIN_USER, UPDATE_USER} from "../types";

const initial = {
    newUser: [],
    loginUser: [],
    updatedUser: [],
    loading: true
}

const authReducer = (state = initial, action)=> {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                newUser: action.payload,
                loading: false
            }
        case LOGIN_USER:
            return {
                ...state,
                loginUser: action.payload,
                loading: false
            }
        case UPDATE_USER:
            return {
                ...state,
                updatedUser: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default authReducer;