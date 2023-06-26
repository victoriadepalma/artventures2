import {combineReducers} from 'redux';
import user from './user/users';
import tours from './tours/tours';



export default combineReducers({
    user,tours
});
