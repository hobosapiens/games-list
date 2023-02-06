import { ADD_GAME_TO_FAVORITE, REMOVE_GAME_TO_FAVORITE } from '@store/constants/actionTypes';

const initialState = {
    favoriteGames: []
};

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GAME_TO_FAVORITE:
            return {
                ...state,
                favoriteGames: [...state.favoriteGames, action.payload]
            }
        case REMOVE_GAME_TO_FAVORITE:
            return {
                ...state,
                favoriteGames: state.favoriteGames.filter(game => game !== action.payload)
            }
        default:
            return state;
    }
}

export default favoriteReducer;