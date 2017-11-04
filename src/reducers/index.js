import {combineReducers} from 'redux';
import {userReducer} from './userReducer';
import {loggedReducer} from './loggedReducer';
import {backgroundReducer} from './backgroundReducer';
import {registrationReducer} from './registrationReducer';
import {displayReducer} from './displayReducer';

export default combineReducers({
    user: userReducer,
    logged_status: loggedReducer,
    background: backgroundReducer,
    register: registrationReducer,
    display: displayReducer,
});