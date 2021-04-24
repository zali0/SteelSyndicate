import {combineReducers} from 'redux';
import loggedReducer from './isLogged';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
    logged: loggedReducer,
    products: productsReducer
})

export default rootReducer;