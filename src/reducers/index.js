import {combineReducers} from 'redux';
import loggedReducer from './isLogged';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
    logged: loggedReducer,
    data: dataReducer
})

export default rootReducer;