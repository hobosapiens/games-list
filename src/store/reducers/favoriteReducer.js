import { ADD_GAME_TO_FAVORITE, REMOVE_GAME_TO_FAVORITE } from '@store/constants/actionTypes';
import { getLocalStorage } from '@utils/localStorage';

const initialState = { 
        items: getLocalStorage('favoriteGames')
     };

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GAME_TO_FAVORITE:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case REMOVE_GAME_TO_FAVORITE:
            return {
                ...state,
                items: state.items.filter(item => item !== action.payload),
              }
        default:
            return state;
    }
}

export default favoriteReducer;