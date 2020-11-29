import {createStore , combineReducers , applyMiddleware , compose} from 'redux';
import { productDeleteReducer, productDetailsReducer, productListReducer, productSaveReducer } from './reducers/productReducers';
import thunk from "redux-thunk";
import { cartReducer } from './reducers/cartReducers';
import Cookie from "js-cookie";
import { userRegisterReducer, userSigninReducer } from './reducers/userReducers';

const cartItems = Cookie.getJSON("cartItems") || [ ] ;
const userInfo = Cookie.getJSON("userInfo") || null ;

const initialState = { cart: {cartItems} , userSignin:{userInfo}};

const reducer = combineReducers({
    productList: productListReducer ,
    productDetails : productDetailsReducer ,
    cart : cartReducer ,
    userSignin: userSigninReducer,
    userRegister : userRegisterReducer ,
    productSave: productSaveReducer ,
    productDelete : productDeleteReducer

})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer , initialState , composeEnhancer(applyMiddleware(thunk)));

export default store;