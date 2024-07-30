import {combineReducers} from 'redux';
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";
import authReducer from "./authReducer";
import wishlistReducer from "./wishlistReducer";
import orderReducer from "./orderReducer";
import cartReducer from "./cartReducer";
import orderItemsReducer from "./orderItemsReducer";

export default combineReducers({
    categoryReducer,
    productReducer,
    authReducer,
    wishlistReducer,
    orderReducer,
    cartReducer,
    orderItemsReducer,
})