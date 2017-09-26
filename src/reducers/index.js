import { combineReducers } from 'redux'
import authReducer from './auth'

const AppReducer = combineReducers({
    auth: authReducer,
});

export default AppReducer;