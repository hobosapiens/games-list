import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';
import favoriteReducer from './favoriteReducer';

export default combineReducers({
    gamesReducer,
    favoriteReducer
})